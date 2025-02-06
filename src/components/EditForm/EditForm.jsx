import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./EditForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { nanoid } from "nanoid";
import toast from "react-hot-toast";
import { editContact } from "../../redux/contacts/operations";
import { isEditField } from "../../redux/contacts/slice";

const EditForm = () => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const dispatch = useDispatch();
};

const contactValues = {
  name: "",
  number: "",
};

const submitForm = (values, actions) => {
  dispatch(editContact(values));
  dispatch(isEditField(false));
  toast.success("Edit");
  actions.resetForm();
};

const handleClose = () => {
  dispatch(isEditField(false));
};

const pattern = /^\d{3}-?\d{2}-?\d{2}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(pattern, "Invalid phone number")
    .required("Required"),
});

return (
  <div className={css.modalOverlay}>
    <Formik
      initialValues={contactValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.formInputWrapper}>
          <label className={css.formLabel} htmlFor={nameFieldId}>
            Name
          </label>

          <Field
            id={nameFieldId}
            type="text"
            name="name"
            className={css.formInput}
          />

          <ErrorMessage
            style={{ color: "tomato" }}
            name="name"
            component="div"
          />
        </div>
        <div className={css.formInputWrapper}>
          <label className={css.formLabel} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            type="text"
            name="number"
            style={{ outline: "none" }}
            id={numberFieldId}
            placeholder="xxx-xx-xx"
            className={css.formLabel}
          />
          <ErrorMessage
            style={{ color: "tomato" }}
            name="number"
            component="div"
            className={css.formErrorMessage}
          />
        </div>
        <div className={css.formInputWrapper}>
          <button
            className={css.formButton}
            type="submit"
            onSubmit={submitForm}
          >
            Edit
          </button>
          <button
            onClick={handleClose}
            className={css.formButton}
            type="button"
          >
            Close
          </button>
        </div>
      </Form>
    </Formik>
  </div>
);

export default EditForm;
