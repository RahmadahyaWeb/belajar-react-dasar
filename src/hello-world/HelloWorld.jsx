export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld text="Hello World"/>
      <ParagraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld({text = "ups, lupa kasih text"}) {
  return (
    <h1 style={{ color: "red", backgroundColor: "aqua" }}>
      {text.toUpperCase()}
    </h1>
  );
}

function ParagraphHelloWorld() {
  const text = "Belajar ReactJS";
  const style = {
    color: "blue",
    backgroundColor: "yellow",
  };

  return <p style={style}>{text.toLowerCase()}</p>;
}
