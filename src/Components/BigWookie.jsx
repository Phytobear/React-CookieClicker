import { useEffect, useState } from "react";
import "./Styles/BigWookie.css";

export default function BigWookie({ handleClick }) {
  return (
    <div className="bigWookieContainer">
      <img
        src="/BigWookieImage.png"
        alt="Cute Wookie"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
