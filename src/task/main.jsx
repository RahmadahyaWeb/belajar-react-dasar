import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "../Container";
import Task from "./Task";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Task/>
    </Container>
  </StrictMode>
);
