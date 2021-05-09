import "./Problem1.css";
import { useState } from "react";
import Nav from "./Nav";

function Problem1() {
  const [size, setSize] = useState(false);

  const handleFontBigSize = () => {
    setSize(true);
  };
  const handleFontSmallSize = () => {
    setSize(false);
  };
  return (
    <>
      <Nav />
      <section className="main">
        <div className="btn_box">
          <button onClick={handleFontBigSize}>+</button>
          <button onClick={handleFontSmallSize}>-</button>
        </div>
        <div className={size ? "text add" : "text minus"}>
          <h3>Vertical Mobile Navbar</h3>
        </div>
      </section>
    </>
  );
}

export default Problem1;
