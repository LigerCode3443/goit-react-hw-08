import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { Contacts } from "./page/Contacts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
