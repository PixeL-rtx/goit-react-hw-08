import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then((result) => {
        toast.success(`Contact ${values.name} successfully added`);
        console.log("result: ", result);
        actions.setSubmitting(false);
        actions.resetForm();
      })
      .catch((error) => {
        toast.error("Failed to add contact");

        actions.setSubmitting(false);
      });
  };
  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Number is required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <label className={css.label_Contact}>
            Name
            <div>
              <Field
                className={css.field}
                type="text"
                name="name"
                placeholder="Enter First Name "
              />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "tomato" }}
              />
            </div>
          </label>
          <label className={css.label_Contact}>
            Number
            <div>
              <Field
                className={css.field}
                type="tel"
                inputMode="tel"
                name="number"
                placeholder="Phone: XXX-XXX-XXXX"
              />
              <ErrorMessage
                name="number"
                component="div"
                style={{ color: "tomato" }}
              />
            </div>
          </label>
          <button type="submit" disabled={isSubmitting}>
            Add contact{" "}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
