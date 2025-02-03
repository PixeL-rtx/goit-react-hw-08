import { useDispatch } from "react-redux";
import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <ul className={css.contact_List}>
        <li className={css.contact}>
          <IoIosContact />
          <p>{name}</p>
        </li>
        <li className={css.contact}>
          <MdPhoneInTalk />
          <p>{number}</p>
        </li>
      </ul>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
}
