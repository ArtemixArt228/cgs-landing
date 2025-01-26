import Image, { ImageProps } from "next/image";
import React, { useEffect, useState } from "react";

import { isMobileConnection, defer } from "../../utils/ImagePreview";

const ImagePreview = (props: ImageProps) => {
  const [loading, setLoading] = useState(props.loading);

  useEffect(() => {
    if (props.loading === "eager" || props.priority) {
      return;
    }

    if (!isMobileConnection()) {
      let clearDefer: () => void;
      const onLoad = () => {
        clearDefer = defer(() => setLoading("eager"));
      };
      window.addEventListener("load", onLoad);
      return () => {
        window.removeEventListener("load", onLoad);
        if (clearDefer) {
          clearDefer();
        }
      };
    }
  }, [props.loading, props.priority]);

  return <Image alt={""} loading={loading} {...props} />;
};

export default ImagePreview;
