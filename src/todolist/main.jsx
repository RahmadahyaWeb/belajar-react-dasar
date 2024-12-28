import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoList from "./TodoList";
import Container from "../Container";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <TodoList />
    </Container>
  </StrictMode>
);
