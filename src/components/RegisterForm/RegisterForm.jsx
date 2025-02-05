import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import css from "./RegisterForm.module.css";

///8 символов,1-большоя,1-маленькая,1-цифра
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name is too short!")
    .max(50, "Name is too long!")
    .required("Name is required!"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required!"),
  password: Yup.string()
    .matches(passwordRules, "Please create a stronger password!")
    .required("Password is required!"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};
const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.setSubmitting(false);
    actions.resetForm();
    // e.preventDefault();
    // const form = e.target;

    // dispatch(
    //   register({
    //     name: form.elements.name.value,
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    // form.reset();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={css.formRegister}>
          <label className={css.formLabel}>
            Name
            <div className={css.formInputWrapper}>
              <Field className={css.formInput} type="text" name="name" />
              <ErrorMessage
                className={css.formErrorMessage}
                name="name"
                component="div"
              />
            </div>
          </label>
          <label className={css.formLabel}>
            Email
            <div className={css.formInputWrapper}>
              <Field
                className={css.formInput}
                type="email"
                inputMode="email"
                name="email"
              />
              <ErrorMessage
                className={css.formErrorMessage}
                name="email"
                component="div"
              />
            </div>
          </label>
          <label className={css.formLabel}>
            Password
            <div className={css.formInputWrapper}>
              <Field
                className={css.formInput}
                type="password"
                inputMode="text"
                name="password"
              />
              <ErrorMessage
                className={css.formErrorMessage}
                name="password"
                component="div"
              />
            </div>
          </label>
          <button
            className={css.formButton}
            type="submit"
            disabled={isSubmitting}
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default RegisterForm;
