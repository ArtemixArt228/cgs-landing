import { useState } from "react";

import { useScrollTo } from "../../../../hooks/useScrollTo";

export const useArticleState = () => {
  const [isNewArticle, setIsNewArticle] = useState(true);
  const [selectedArticleId, setSelectedArticleId] = useState(0);
  const [ref, scrollTo] = useScrollTo<HTMLDivElement>();

  return {
    isNewArticle,
    setIsNewArticle,
    selectedArticleId,
    setSelectedArticleId,
    scrollRef: ref,
    scrollTo,
  };
};
