import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <header className="flex justify-center bg-slate-500 rounded-xl border-1 border-solid border-gold">
      <nav>
        <ul className="flex gap-4 text-2xl font-bold p-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
          <li>
            <NavLink to="contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
