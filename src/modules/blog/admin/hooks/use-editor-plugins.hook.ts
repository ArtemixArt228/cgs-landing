import { useState, useEffect } from "react";
import { Plugin } from "suneditor/src/plugins/Plugin";
import { articleIntroPlugin } from "../plugins/article-intro.plugin";

export const useEditorPlugins = () => {
  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();

  useEffect(() => {
    let isMounted = true;
    import("suneditor/src/plugins")
      .then((plugs) => {
        const loadedPlugins = plugs.default || plugs;
        if (isMounted) {
          setPlugins({ ...loadedPlugins, articleIntroPlugin });
        }
      })
      .catch((err) => {
        console.error("Failed to load plugins:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return plugins;
};
