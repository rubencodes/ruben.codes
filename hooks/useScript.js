const { useState, useEffect } = require("react");

function useScript(scriptUrl) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.onload = () => setReady(true);
    document.head.appendChild(script);
  }, [scriptUrl]);

  return ready;
}

export default useScript;
