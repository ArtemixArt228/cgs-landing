import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const useDownloadCv = (
  name: string,
  fileType: "pdf" | "docx" = "pdf"
) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Helper function to generate the download URL
  const generateDownloadUrl = useCallback(
    (url?: string): string => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const currentUrl = url || `${window.location.origin}${router.asPath}`;

      return fileType === "pdf"
        ? `${baseUrl}/api/devs-info/cv/${fileType}?link=${currentUrl}`
        : `${baseUrl}/api/devs-info/cv/${fileType}/${currentUrl}`;
    },
    [fileType, router.asPath]
  );

  // Helper function to trigger file download
  const triggerDownload = (blob: Blob, fileName: string) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href); // Clean up the URL object
  };

  const downloadFile = useCallback(
    async (url?: string) => {
      setIsLoading(true);

      try {
        const downloadUrl = generateDownloadUrl(url);

        const response = await axios.get(downloadUrl, {
          responseType: "arraybuffer",
        });

        const blob = new Blob([response.data], {
          type: `application/${fileType}`,
        });

        const formattedName = name.toLowerCase().replace(/\s+/g, "-");
        const fileName = `cv-${formattedName}.${fileType}`;

        triggerDownload(blob, fileName);
      } catch (error) {
        console.error(`Failed to download the ${fileType}:`, error);
      } finally {
        setIsLoading(false);
      }
    },
    [fileType, generateDownloadUrl, name]
  );

  return { downloadFile, isLoading };
};
