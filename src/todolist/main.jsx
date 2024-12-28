import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoList from "./TodoList";
import Container from "../Container";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <TodoList />
      <AlertButton text="Click me" message="ouch..." />
      <MyButton text="Smash me" onSmash={() => alert("Ouch... u smash me")} />
      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("You click toolbar");
        }}
      />
    </Container>
  </StrictMode>
);
