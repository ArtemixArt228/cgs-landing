import { useRouter } from "next/router";
import { navigationRoutesLinks } from "../utils/variables";
interface IData {
  handleButtonClick: () => void;
}

const useContactFormRedirect = (): IData => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.pathname == navigationRoutesLinks.Contact
      ? router.reload()
      : router.push(navigationRoutesLinks.Contact);
  };

  return {
    handleButtonClick,
  };
};

export default useContactFormRedirect;
