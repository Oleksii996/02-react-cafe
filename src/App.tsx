import { useState } from "react";
import ClickCounter from "./components/CafeInfo";
import CountDisplay from "./components/Notification";

export default function App() {
  const [clicks, setClick] = useState(0);

  const handeClick = () => {
    setClick(clicks + 1);
    console.log(clicks);
  };

  return (
    <>
      <CountDisplay clicks={clicks} />
      <ClickCounter onUpdate={handeClick} value={clicks} />
      <ClickCounter onUpdate={handeClick} value={clicks} />
      <ClickCounter onUpdate={handeClick} value={clicks} />
    </>
  );
}
