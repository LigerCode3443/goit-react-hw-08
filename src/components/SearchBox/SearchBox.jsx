import { useDispatch } from "react-redux";
import s from "./searchBox.module.css";
import { setFilter } from "../../redux/filters/slice";

export const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.box}>
      <h2 className={s.title}>Find contacts by name</h2>
      <input
        className={s.input}
        type="text"
        placeholder="enter contacts"
        onChange={(e) => {
          const data = e.target.value;
          dispatch(setFilter(data));
        }}
      />
    </div>
  );
};
