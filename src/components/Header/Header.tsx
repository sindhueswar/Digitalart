import React from "react";
import Counter from "../counter/counter";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Bidding from "../bidding/bidding";
import Branding from "../branding/branding";
export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="containerhead">
          <Navbar />
          <div className="head">
            <p className="feature">DES JKG GHSTGZFRHJ</p>
            <h1 className="headtext">
              Lohrjr Semmet,Dghthgh &Gell Hyrjwb {"   "}
              <i className="Highlighttext">Coe GHG</i>
            </h1>
            <h5 className="headdesc">
              Vestibulum ante hgfn hjmipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae{" "}
              <span className="highlightnum">$2000</span> Vestibulum ornare
            </h5>
          </div>
          <div className="btn">
            <button className="btn1">Stwgfzg km</button>
            <button className="btn2">Stwgfz ng km?</button>
          </div>
          <div className="horizontalline"></div>
          <div className="counter">
            <Counter label="Ffnvt Vnhv" targetValue={10} />
            <Counter label="Tpehin Bm" targetValue={15} />
            <Counter label="Cusre Bhr" targetValue={20} />
          </div>
        </div>
        <div className="bidding">
          <Bidding />
        </div>
      </div>
      <div className="branding">
        <Branding />
      </div>
    </div>
  );
}
