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
        <div className="service-text">Classic haircut</div>
      </div>
      {/*end of first div */}

      {/*second div */}
      <div className="service">
        <img
          className="frame-child"
          alt=""
          src={require(`./../images/dyehair.jpg`)}
        />
        <div className="service-text">Colouring</div>
      </div>
      {/*end of second div */}

      {/*third div */}
      <div className="service">
        <img
          className="frame-child"
          alt=""
          src={require(`./../images/perm.jpg`)}
        />
        <div className="service-text">Perm Hair</div>
      </div>
      {/*end of third div */}

      {/*fourth div */}
      <div className="service">
        <img
          className="frame-child"
          alt=""
          src={require(`./../images/texture.jpg`)}
        />
        <div className="service-text">Texturizing</div>
      </div>
      {/*end of fourth div */}
    </div>
  );
}
