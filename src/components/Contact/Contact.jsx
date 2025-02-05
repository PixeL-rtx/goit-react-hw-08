// import { IoIosContact } from "react-icons/io";
// import { MdPhoneInTalk } from "react-icons/md";

// import css from "./Contact.module.css";
// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contacts/operations";
// import toast from "react-hot-toast";

// import ContactForm from "../ContactForm/ContactForm";
// import { contactReducer } from "../../redux/contacts/slice";

// const Contact = ({ name, number, id }) => {
//   const dispatch = useDispatch();

//   const editContacts = () => {
//     dispatch(contactReducer({ id, name: "", number: "" }));
//   };

//   const deleteNumber = () => {
//     dispatch(deleteContact(id));
//     toast.success("Deleted");
//   };

//   return (
//     <li className={css.item}>
//       <ul className={css.contact_List}>
//         <li className={css.contact}>
//           <IoIosContact />
//           <p>{name}</p>
//         </li>
//         <li className={css.contact}>
//           <MdPhoneInTalk />
//           <p>{number}</p>
//         </li>
//       </ul>

//       <div>
//         <button type="button" onClick={editContacts} className={css.btnContact}>
//           Edit
//         </button>
//         <button type="button" onClick={deleteNumber} className={css.btnContact}>
//           Delete
//         </button>
//       </div>
//     </li>
//   );
// };
// export default Contact;

//////////

import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";

import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const editContacts = () => {
    dispatch(editContact({ id, updatedData: { name: "", number: "" } }));
  };

  const deleteNumber = () => {
    dispatch(deleteContact(id));
    toast.success("Deleted");
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
        <button type="button" onClick={editContacts} className={css.btnContact}>
          Edit
        </button>
        <button type="button" onClick={deleteNumber} className={css.btnContact}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
