import { useMutation } from "@tanstack/react-query";
import { Plugin } from "suneditor/src/plugins/Plugin";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";

import { adminGlobalService } from "../../../../services/adminHomePage";

import { queryKeys } from "../../../../consts/queryKeys";

export const useEditorConfig = (
  plugins: Array<Plugin> | Record<string, Plugin> | undefined
): SunEditorReactProps | undefined => {
  const { mutateAsync } = useMutation(
    [queryKeys.uploadImage],
    (data: FormData) => adminGlobalService.uploadImage(data)
  );

  const handleImageUploadBefore = (
    files: File[],
    _: object,
    uploadHandler: any
  ) => {
    (async () => {
      const formData = new FormData();
      formData.append("image", files[0], files[0].name);

      try {
        const img = await mutateAsync(formData);

        const response = {
          result: [
            {
              url: img?.url,
              name: "image_name",
              size: "4096",
            },
          ],
        };

        uploadHandler(response);
      } catch (error) {
        console.error("Image upload failed:", error);
      }
    })();

    uploadHandler();
  };

  return plugins
    ? {
        height: "990px",
        onImageUploadBefore: handleImageUploadBefore,
        setOptions: {
          defaultStyle: "font-family: NAMU;",
          font: ["NAMU", "NAMU-1600", "NAMU-1750", "NAMU-1850", "Open Sans"],
          iframe: false,
          linkRelDefault: {
            default: undefined,
            check_new_window: "nofollow noopener",
          },
          // Explicitly cast plugins to match the expected type
          plugins: plugins as Record<string, Plugin>,
          buttonList: [
            ["undo", "redo"],
            [
              "formatBlock",
              "font",
              "fontSize",
              "fontColor",
              "hiliteColor",
              "align",
              "paragraphStyle",
              "blockquote",
              "lineHeight",
              "table",
            ],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["removeFormat"],
            ["outdent", "indent"],
            ["list"],
            ["link", "image", "video"],
            ["articleIntro"],
            ["codeView"],
          ],
        },
      }
    : undefined;
};
