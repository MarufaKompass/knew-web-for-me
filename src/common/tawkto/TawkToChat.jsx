import React, { useEffect } from "react";
import TawkTo from "tawkto-react";

const TawkToChat = () => {
  useEffect(() => {
    var tawk = new TawkTo("6474358d74285f0ec46e25b6", "1h1iv2cf9");

    tawk.onStatusChange((status) => {
      console.log(status);
    });
  }, []);

  return <></>;
};

export default TawkToChat;
