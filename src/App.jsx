import { useEffect, useState } from "react";
import "./App.css";
import BigWookie from "./Components/BigWookie";
import WookieCounterDisplay from "./Components/WookieCounterDisplay";
import UpgradeButtons from "./Components/UpgradeButtons";
import WookiesPerSecondDisplay from "./Components/WookiesPerSecondDisplay";

export default function App() {
  const [wookieCount, setWookieCount] = useState(() => {
    const storedCount = localStorage.getItem("lsCount");
    return storedCount ? Number(storedCount) : 0;
  });

  const [wookiesPerSecond, setWookiesPerSecond] = useState(() => {
    const storedPerSecond = localStorage.getItem("lsPerSecond");
    return storedPerSecond ? Number(storedPerSecond) : 1;
  });

  const [upgradeCount, setUpgradeCount] = useState(() => {
    const savedUpgradeCount = localStorage.getItem("upgradeCount");
    return savedUpgradeCount ? JSON.parse(savedUpgradeCount) : 0;
  });

  function WookieClick() {
    setWookieCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    localStorage.setItem("lsPerSecond", wookiesPerSecond);
  }, [wookiesPerSecond]);

  useEffect(() => {
    localStorage.setItem("lsCount", wookieCount);
  }, [wookieCount]);

  useEffect(() => {
    localStorage.setItem("upgradeCount", JSON.stringify(upgradeCount));
  }, [upgradeCount]);

  useEffect(() => {
    if (wookiesPerSecond > 0) {
      const interval = setInterval(() => {
        setWookieCount((prevCount) => prevCount + wookiesPerSecond);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [wookiesPerSecond]);

  <WookieCounterDisplay wookieCount={wookieCount} />;

  return (
    <>
      <div className="mainContainer">
        <header className="titleContainer">
          <h1>Wills Wookie Clicker</h1>
        </header>

        <div className="contentContainer">
          <div className="leftColumn">
            <div className="WookieStats-Container">
              <div className="counterContainer">
                <WookieCounterDisplay wookieCount={wookieCount} />
              </div>

              <div className="wpsContainer">
                <WookiesPerSecondDisplay wookiesPerSecond={wookiesPerSecond} />
              </div>

              <div className="upgradeStatsContainer">
                <p>Total Upgrades Purchased: {upgradeCount}</p>
              </div>
            </div>

            <div className="bigWookieContainer">
              <BigWookie handleClick={WookieClick} />
            </div>
          </div>
          <div className="upgradesContainer">
            <UpgradeButtons
              wookieCount={wookieCount}
              setWookieCount={setWookieCount}
              wookiesPerSecond={wookiesPerSecond}
              setWookiesPerSecond={setWookiesPerSecond}
              upgradeCount={upgradeCount}
              setUpgradeCount={setUpgradeCount}
            />
          </div>
        </div>
      </div>
    </>
  );
}
