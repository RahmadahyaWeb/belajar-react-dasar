import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "../Container";
import ContactForm from "./ContactForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <ContactForm />
    </Container>
  </StrictMode>
);
