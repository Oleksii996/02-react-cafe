import { useState } from "react";

export default function ClickCounter() {
  const [clicks, setClick] = useState(0);

  const handeClick = () => {
    setClick(clicks + 1);
    console.log(clicks + 1);
  };

  return <button onClick={handeClick}>Click: {clicks} </button>;
}
