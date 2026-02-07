interface ClickCounterProps {
  onUpdate: () => void;
  value: number;
}

export default function ClickCounter({ onUpdate, value }: ClickCounterProps) {
  return <button onClick={onUpdate}>Click: {value} </button>;
}
