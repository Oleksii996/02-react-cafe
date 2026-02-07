export default function App() {
  const handClick = (e: React.MouseEvent<HTMLHeadingElement>) => {
    console.log(e);
  };

  return (
    <div>
      <h1 onClick={handClick}>App component</h1>
    </div>
  );
}
