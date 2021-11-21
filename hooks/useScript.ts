import { useState, useEffect } from "react";

// Ensure we don't load more than once.
const loadedScriptsMap = new Map<string, Promise<void>>();

interface UseScriptOptions {
  shouldLoadScript?: boolean,
}

function useScript(scriptUrl: string, { shouldLoadScript }: UseScriptOptions = {}) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!shouldLoadScript) {
      return;
    }

    const loadingScript = loadedScriptsMap.get(scriptUrl);
    if (loadingScript) {
      loadingScript.then(() => setReady(true));
      return;
    }

    loadedScriptsMap.set(
      scriptUrl,
      new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.onload = () => {
          setReady(true);
          resolve();
        };
        document.head.appendChild(script);
      }),
    );
  }, [scriptUrl, shouldLoadScript]);

  return ready;
}

export default useScript;
