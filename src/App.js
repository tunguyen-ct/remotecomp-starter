import React from "react";
import { Title } from "./components/Title";

export const App = ({ name = "World" }) => {
  return <Title>Hellu {name}!</Title>;
};
