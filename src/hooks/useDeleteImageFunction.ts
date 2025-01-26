import { useFormikContext } from "formik";
import { queryKeys } from "../consts/queryKeys";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { IImage } from "../types/Admin/Admin.types";
import { adminGlobalService } from "../services/adminHomePage";

const useDeleteImageFunction = async (
  state?: IImage,
  key = queryKeys.GetFullPage,
  submitInTheEnd = false,
  nestedImageName = ""
) => {
  const queryClient = new QueryClient();
  const { handleSubmit, setFieldValue } = useFormikContext();

  const { mutate } = useMutation([queryKeys.deleteImage], (url: string) =>
    adminGlobalService.deleteImage(url)
  );

  const deleteImageFunction = (
    localState?: IImage,
    localNestedImageName?: string
  ) => {
    const link = state ? state.image!.url : localState!.image!.url;
    mutate(link);
    if (state) {
      state.image = { url: "" };
      !submitInTheEnd &&
        setFieldValue(
          nestedImageName.length !== 0 ? nestedImageName : "image",
          {
            url: "",
          }
        );
    } else if (localNestedImageName) {
      setFieldValue(localNestedImageName, "");
    } else {
      localState!.image = null;
    }

    if (submitInTheEnd) {
      handleSubmit();
    }
    queryClient.invalidateQueries([key]);
  };

  return deleteImageFunction;
};

export default useDeleteImageFunction;
