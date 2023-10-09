import React from "react";
import "../css/Prices.css";
export default function Prices() {
  return (
    <div className="services">
      {/*first div */}
      <div className="service">
        <img
          className="frame-child"
          alt=""
          src={require(`./../images/haircut.jpg`)}
        />
        <div>Classic haircut</div>
      </div>
      {/*end of first div */}

      {/*second div */}
      <div className="service">
        <img
          className="frame-child"
          alt=""
          src={require(`./../images/dyehair.jpg`)}
        />
        <div>Colouring</div>
      </div>
      {/*end of second div */}

      {/*third div */}
      <div className="service">
        <img
          className="frame-child"
          alt=""
          src={require(`./../images/perm.jpg`)}
        />
        <div>Perm Hair</div>
      </div>
      {/*end of third div */}

      {/*fourth div */}
      <div className="service">
        <img
          className="frame-child"
          alt=""
          src={require(`./../images/texture.jpg`)}
        />
        <div>Texturizing</div>
      </div>
      {/*end of fourth div */}
    </div>
  );
}
