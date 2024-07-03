import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./Navigation.module.css";
const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && s.active);
};

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <header className="flex justify-between items-center bg-slate-500 rounded-xl border-1 border-solid border-gold">
      <h2 className="text-xl font-bold p-5">{user.email}</h2>
      <nav>
        <ul className="flex gap-4 text-2xl font-bold p-5 items-center">
          <li>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="contacts" className={buildLinkClass}>
              Contacts
            </NavLink>
          </li>
          {!isLoggedIn && (
            <>
              <li>
                <NavLink to="login">Login</NavLink>
              </li>
              <li>
                <NavLink to="register">Register</NavLink>
              </li>
            </>
          )}
          {isLoggedIn && (
            <button
              onClick={() => dispatch(logoutThunk())}
              className="btn btn-warning"
            >
              Logout
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
};
