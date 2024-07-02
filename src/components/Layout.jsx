import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { Container } from "./Container/Container";

export const Layout = () => {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
};
