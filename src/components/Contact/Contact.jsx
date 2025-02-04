import { useDispatch } from "react-redux";
import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { contactReducer } from "../../redux/contacts/slice";
import ContactForm from "../ContactForm/ContactForm";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteNumber = () => {
    dispatch(deleteContact(id));
    toast.success("Deleted");
  };
  const editContacts = () => {
    dispatch(contactReducer(true));
  };

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

      <div>
        <button className={btn.Contact} onClick={editContacts}>
          Edit
        </button>
        <button className={btn.Contact} onClick={deleteNumber}>
          Delete
        </button>
      </div>
    </li>
  );
};
export default Contact;
