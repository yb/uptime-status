import { useMemo } from "react";
import Link from "./link";
import Header from "./header";
import UptimeRobot from "./uptimerobot";
import Package from "../../package.json";
import { GetHitokoto } from "../common/hitokoto";
import { useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter'

function App() {
  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === "string") return [ApiKeys];
    return [];
  }, []);

  const [hitokoto, setHitokoto] = useState(['结局是什么，我们自己决定！']);

  function getText() {
    GetHitokoto().then(({ data }) => {
      setHitokoto([...hitokoto,data.hitokoto]);
    });
  }

  useEffect(() => {
    getText();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div id="uptime">
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id="footer">
          <p className="hitokoto">
            <Typewriter cursor="true" delaySpeed="6000" cursorStyle="⚡" words={hitokoto} onDelay={getText}/>
          </p>
          <p>
            基于 <Link to="https://uptimerobot.com/" text="UptimeRobot" />{" "}
            接口制作，检测频率 5 分钟
          </p>
          <p>
            &copy; 2020{" "}
            <Link to="https://status.wzue.cn/" text="STATUS.WZUE.CN" />, Version{" "}
            {Package.version}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
