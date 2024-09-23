import { useEffect, useState } from "react";

export default function WookieCounterDisplay({ wookieCount }) {
  return <h2 className="counter">Total Wookies: {wookieCount}</h2>;
}
