import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoList from "./TodoList";
import Container from "../Container";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";
import Counter from "../form/Counter";

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

      <SearchForm />
      <SayHelloForm />
      <Counter/>
    </Container>
  </StrictMode>
);
