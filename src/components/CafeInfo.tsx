import { useState } from "react";

interface ClickCounterProps {
  onUpdate: () => void;
  value: number;
}

export default function ClickCounter({ onUpdate }: ClickCounterProps) {
  const [clicks, setClick] = useState(0);

  const handeClick = () => {
    setClick(clicks + 1);
    onUpdate();
  };

  return <button onClick={handeClick}>Click: {clicks} </button>;
}
