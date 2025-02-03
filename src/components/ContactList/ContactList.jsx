import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import Loader from "../../Loader/Loader";
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";

// const getVisibleContacts = contacts.filter(({ name }) =>
//   name.toLowerCase().includes(filter.toLowerCase())
// );
export const ContactList = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts) || [];

  return (
    <ul className={css.list}>
      {loading && <Loader />}
      {!loading && Array.isArray(contacts) && contacts.length > 0 && !error
        ? contacts.map(({ id, number, name }) => (
            <Contact key={id} id={id} number={number} name={name} />
          ))
        : !loading && <p>No contacts found</p>}
      {error && <div>`Error: ${error} `</div>}
    </ul>
    // <ul className={css.list}>
    //       {loading && <Loader />}

    //   {!loading &&
    //     contacts &&
    //     !error &&
    //     contacts.map(({ id, number, name }) => (
    //       <Contact key={id} id={id} number={number} name={name} />
    //     ))}
    //   {error && <div>`Error: ${error} `</div>}
    // </ul>
  );
};
