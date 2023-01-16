import React from "react";
import "./developer.styles.scss";
import Logo from "../../images/btlogo.png";

const Developer = () => {
  return (
    <div className="dev">
      <p>Powered by: </p>
      <a href="https://boldtechgh.com">
        <img src={Logo} alt="boldtech logo" width={50} />
      </a>

      <p>
        <a href="https://boldtechgh.com">BoldTech GH</a>{" "}
      </p>
    </div>
  );
};

export default Developer;
