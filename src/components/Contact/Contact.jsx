import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { AiOutlineUserDelete } from "react-icons/ai";
import { LiaUserEditSolid } from "react-icons/lia";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import EditForm from "../EditForm/EditForm";
import DeleteContactModal from "../DeleteContact/DeleteContact";
import { useEffect, useRef, useState } from "react";

const Contact = ({ contact }) => {
  const bodyRef = useRef(document.body);
  const dispatch = useDispatch();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const body = bodyRef.current;
    isEditModalOpen || isDeleteModalOpen
      ? body.classList.add("disable-scroll")
      : body.classList.remove("disable-scroll");

    return () => {
      body.classList.remove("disable-scroll");
    };
  }, [isEditModalOpen, isDeleteModalOpen]);

  const handleDelete = () => {
    handleCloseDeleteModal();
    dispatch(deleteContact(contact.id));
  };

  const handleUpdateContact = (modifiedContact) => {
    handleCloseEditModal();
    dispatch(updateContact(modifiedContact));
  };

  const handleOpenEditNodal = () => setIsEditModalOpen(true);

  const handleCloseEditModal = () => setIsEditModalOpen(false);

  const handleOpenDeleteNodal = () => setIsDeleteModalOpen(true);

  const handleCloseDeleteModal = () => setIsDeleteModalOpen(false);

  return (
    <ul className={css.list}>
      <li className={css.contactItem}>
        <div className={css.textWrapper}>
          <div className={css.contactContext}>
            <IoIosContact />
            <span>{contact.name}</span>
          </div>
          <div className={css.contactContext}>
            <MdPhoneInTalk />
            <a href={`tel: ` + contact.number}>{contact.number}</a>
          </div>
        </div>
        <div className={css.btnWrapper}>
          <button
            onClick={handleOpenEditNodal}
            type="button"
            aria-label="edit button"
            className={css.btn_Contact}
          >
            <span>Edit</span>
            {/* <LiaUserEditSolid color="#00ff00" /> */}
          </button>
          <button
            onClick={handleOpenDeleteNodal}
            type="button"
            aria-label="delete button"
            className={css.btn_Contact}
          >
            <span>Delete</span>
            {/* <AiOutlineUserDelete color="#00ff00" /> */}
          </button>
        </div>
      </li>

      {isEditModalOpen && (
        <EditForm
          handleCloseModal={handleCloseEditModal}
          handleUpdateContact={handleUpdateContact}
          id={contact.id}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteContactModal
          contact={contact}
          handleDelete={handleDelete}
          handleCancel={handleCloseDeleteModal}
        />
      )}
    </ul>
  );
};

export default Contact;
