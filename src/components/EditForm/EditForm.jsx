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
  <Formik
    initialValues={contactValues}
    onSubmit={submitForm}
    validationSchema={validationSchema}
  >
    <Form className={css.form}>
      <div
        style={{ position: "relative" }}
        className="flex flex-col gap-2 w-2/3"
      >
        <label>Name</label>
        <Field type="text" name="name" className={css.field} />
        <ErrorMessage style={{ color: "tomato" }} name="name" component="div" />
      </div>
      <div
        style={{ position: "relative" }}
        className="flex flex-col gap-2 w-2/3"
      >
        <label htmlFor={numberFieldId}>Number</label>
        <Field
          type="text"
          name="number"
          style={{ outline: "none" }}
          id={numberFieldId}
          placeholder="xxx-xx-xx"
          className="p-3 rounded-xl hover:border-red-400 sm:max-w-md"
        />
        <ErrorMessage
          style={{ color: "tomato" }}
          name="number"
          component="div"
        />
      </div>
      <div>
        <button
          className="p-3 rounded-xl border cursor-pointer hover:bg-green-200"
          type="submit"
          onSubmit={submitForm}
        >
          Edit
        </button>
        <button
          onClick={handleClose}
          className="p-3 rounded-xl border cursor-pointer hover:bg-red-200"
          type="button"
        >
          Close
        </button>
      </div>
    </Form>
  </Formik>
);
