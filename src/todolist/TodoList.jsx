import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      text: "Learn HTML",
      isCompleted: true,
    },
    {
      text: "Learn CSS",
      isCompleted: true,
    },
    {
      text: "Learn Javascript",
      isCompleted: true,
    },
    {
      text: "Learn ReactJS",
      isCompleted: false,
    },
  ];

  const todos = data.map((todo) => {
    return <Todo {...todo} />;
  });

  return <ul>{todos}</ul>;
}
