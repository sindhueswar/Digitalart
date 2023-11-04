import React from "react";
import "./branding.css";
export default function branding() {
  return (
    <div className="brands">
      <div id="grid2">
        <div className="brand" style={{ fontStyle: "italic" }}>
          SDADS
        </div>
        <div className="brand" style={{ fontStyle: "cursive" }}>
          ZDCDW
        </div>
        <div className="brand">RSCEW</div>
        <div
          className="brand"
          style={{ fontStyle: "revert-layer", fontFamily: "AmstelvarAlpha" }}
        >
          POITH
        </div>
        <div
          className="brand"
          style={{
            fontStyle: "oblique",
            fontFamily: "monospace",
            fontSize: "2em",
          }}
        >
          LSKTL
        </div>
      </div>
    </div>
  );
}
