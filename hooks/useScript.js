const { useState, useEffect } = require("react");

// Ensure we don't load more than once.
const loadedScriptsMap = new Map();

function useScript(scriptUrl) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const loadingScript = loadedScriptsMap.get(scriptUrl);
    if (loadingScript) {
      loadingScript.then(() => setReady(true));
      return;
    }

    loadedScriptsMap.set(
      scriptUrl,
      new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.onload = () => {
          setReady(true);
          resolve();
        };
        document.head.appendChild(script);
      }),
    );
  }, [scriptUrl]);

  return ready;
}

export default useScript;
