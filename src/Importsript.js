import React, { useEffect } from "react";

function Importsript(url) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
  return <div></div>;
}

export default Importsript;
