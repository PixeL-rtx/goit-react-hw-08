import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const value = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleChange = (value) => dispatch(changeFilter(value));

  return (
    <div className={css.filter}>
      <label className={css.label}>
        <input
          className={css.input}
          type="text"
          name="search"
          placeholder=""
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
        Find contacts by name
      </label>
    </div>
  );
};

export default SearchBox;
