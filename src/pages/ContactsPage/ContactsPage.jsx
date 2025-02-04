import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import ContactList from "../../components/ContactList/ContactList";
import Error from "../../components/Error/Error";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../Loader/Loader";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <div>
        <SearchBox />
        {loading && <Loader />}
        {error && <Error />}
        {contacts.length > 0 && !error && !loading && (
          <ContactList contacts={contacts} />
        )}
      </div>
    </div>
  );
};

export default ContactsPage;
