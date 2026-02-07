interface CountDisplayProps {
  clicks: number;
}

export default function CountDisplay({ clicks }: CountDisplayProps) {
  return <div>The button has been clicked {clicks} times</div>;
}
