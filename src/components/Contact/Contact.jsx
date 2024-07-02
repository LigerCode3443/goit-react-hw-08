import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { deleteContactThunk } from "../../redux/contacts/operations";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <div className={s.box}>
        <FaUser color="gold" />
        <h3 className={s.title}>{contact.name}</h3>
      </div>
      <div className={s.box}>
        <FaPhoneAlt color="gold" />
        <a href="tel:" className={s.tel}>
          {contact.number}
        </a>
      </div>

      <button
        onClick={() => dispatch(deleteContactThunk(contact.id))}
        className={s.btn}
      >
        Delete
      </button>
    </li>
  );
};
