export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld() {
  const text = "Hello World";
  return <h1>{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const text = "Belajar ReactJS";
  return <p>{text.toLowerCase()}</p>;
}
