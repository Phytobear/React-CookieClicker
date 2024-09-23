import { useEffect, useState } from "react";
import "./Styles/UpgradeButtons.css";

export default function UpgradeButtons({
  wookieCount,
  setWookieCount,
  wookiesPerSecond,
  setWookiesPerSecond,
  upgradeCount,
  setUpgradeCount,
}) {
  const [upgrades, setUpgrades] = useState([]);

  useEffect(() => {
    async function fetchUpgrades() {
      const res = await fetch("https://react-cookieclicker-1-dg3c.onrender.com/api/upgrades");
      const fetchData = await res.json();
      setUpgrades(fetchData);
    }
    fetchUpgrades();
  }, []);

  const handleUpgradesClick = (upgrade) => {
    console.log("Button clicked for: ", upgrade.name);
    console.log("Before update:", { wookieCount, wookiesPerSecond });

    if (wookieCount >= upgrade.cost) {
      setWookieCount(wookieCount - upgrade.cost);
      setWookiesPerSecond(wookiesPerSecond + upgrade.plusWPS);
      setUpgradeCount(upgradeCount + 1);

      console.log("After update:", {
        wookieCount: wookieCount - upgrade.cost,
        wookiesPerSecond: wookiesPerSecond + upgrade.plusWPS,
      });
    } else {
      console.log("Not enough wookies:", upgrade.name);
    }
  };

  const upgradesArray = upgrades.map((upgrade) => (
    <button
      key={upgrade.id}
      className="upgradeButton"
      onClick={() => handleUpgradesClick(upgrade)}
      disabled={wookieCount < upgrade.cost}
    >
      <h3>{upgrade.name}</h3>
      <p>Cost: {upgrade.cost}</p>
      <p>WPS Increase: {upgrade.plusWPS}</p>
    </button>
  ));

  return <div className="upgradeButtonsContainer">{upgradesArray}</div>;
}
