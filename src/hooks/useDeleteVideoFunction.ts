import { useFormikContext } from "formik";
import { queryKeys } from "../consts/queryKeys";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { IImage } from "../types/Admin/Admin.types";
import { adminGlobalService } from "../services/adminHomePage";

const useDeleteVideoFunction = (
  state?: IImage,
  key = queryKeys.GetFullPage,
  submitInTheEnd = true,
  nestedImageName = ""
) => {
  const queryClient = new QueryClient();
  const { handleSubmit, setFieldValue } = useFormikContext();

  const { mutate, isLoading } = useMutation(
    [queryKeys.deleteImage],
    (url: string) => adminGlobalService.deleteImage(url)
  );

  const deleteImageFunction = (localState?: IImage) => {
    const link = state ? state.image!.url : localState!.image!.url;
    mutate(link);
    if (state) {
      state.image = null;
      !submitInTheEnd &&
        setFieldValue(
          nestedImageName.length !== 0 ? nestedImageName : "image",
          null
        );
    } else {
      localState!.image = null;
    }
    submitInTheEnd && handleSubmit();
    queryClient.invalidateQueries([key]);
  };

  return { deleteImageFunction, isLoading };
};

export default useDeleteVideoFunction;
