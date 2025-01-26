import { useFormikContext } from "formik";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { IImage } from "../types/Admin/Admin.types";
import { queryKeys } from "../consts/queryKeys";
import { adminGlobalService } from "../services/adminHomePage";

const useUploadVideoFunction = (
  state?: IImage,
  key = queryKeys.GetFullPage,
  submitInTheEnd = true,
  nestedImageName = ""
) => {
  const queryClient = new QueryClient();
  const { handleSubmit, setFieldValue } = useFormikContext();

  const upload = async (image: any) => {
    const response = await adminGlobalService.uploadImage(image);
    return response;
  };

  const { mutateAsync, isLoading } = useMutation<{ url: string } | void>(
    [queryKeys.uploadImage],
    upload
  );

  const uploadVideoFunction = async (image: any, localState?: IImage) => {
    const link = await mutateAsync(image);
    if (state) {
      state.image! = link!;
      !submitInTheEnd &&
        setFieldValue(
          nestedImageName.length !== 0 ? nestedImageName : "image",
          link
        );
    } else {
      localState!.image = link!;
    }
    submitInTheEnd && handleSubmit();
    queryClient.invalidateQueries([key]);
  };

  return { uploadVideoFunction, isLoading };
};

export default useUploadVideoFunction;
