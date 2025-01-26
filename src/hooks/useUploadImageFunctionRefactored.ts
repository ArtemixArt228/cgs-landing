import { useFormikContext } from "formik";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { queryKeys } from "../consts/queryKeys";
import { adminGlobalService } from "../services/adminHomePage";

const useUploadImageFunction = (
  key = queryKeys.GetFullPage,
  submitInTheEnd = false,
  nestedImageName = ""
) => {
  const queryClient = new QueryClient();
  const { handleSubmit, setFieldValue } = useFormikContext();

  const upload = async (image: any) => {
    const response = await adminGlobalService.uploadImage(image);
    return response;
  };

  const { mutateAsync } = useMutation<{ url: string } | void>(
    [queryKeys.uploadImage],
    upload
  );

  const uploadImageFunction = async (
    image: any,
    localNestedImageName?: string
  ) => {
    const link = await mutateAsync(image);
    if (localNestedImageName) {
      setFieldValue(localNestedImageName, link);
    } else {
      setFieldValue(
        nestedImageName.length !== 0 ? nestedImageName : "image",
        link
      );
    }
    submitInTheEnd && handleSubmit();
    queryClient.invalidateQueries([key]);
  };

  return uploadImageFunction;
};

export default useUploadImageFunction;
