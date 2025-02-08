import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { CiLogin } from "react-icons/ci";

import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

import css from "./LoginForm.module.css";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// junir_html_css@gmail.com
// Qwerty12345

const initialValues = {
  email: "",
  password: "",
};

const RegistrationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email!")
    .required("Email is required!"),
  password: Yup.string()
    .matches(passwordRules, "Please enter a valid password!")
    .required("Password is required!"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.setSubmitting(false);
    actions.resetForm();

    // const form = e.currentTarget;

    // dispatch(
    //   login({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // )
    //   .unwrap()
    //   .then(() => {
    //     console.log("login success");
    //   })
    //   .catch(() => {
    //     console.log("login error");
    //   });
    // form.reset();
  };

  return (
    // <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={css.label}>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit"> Login</button>
    // </form>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={css.formContact}>
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
            <CiLogin /> <span>Login</span>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
