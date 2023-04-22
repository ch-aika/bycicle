import { useMutation } from "@tanstack/react-query";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import axios from "axios";
import Header from "../components/Header";
import { setToken, setUserInfo } from "../redux/slices/userReducer";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Необходимо указать почту"),

    password: Yup.string()
      .required("Необходимо указать пароль")
      .min(6, "пароль слишком короткий"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    mutate(values, {
      onSuccess: (response) => {
        dispatch(setToken(response.data.data.token));
        dispatch(setUserInfo(response.data.data.user));
        navigate("/");
      },
      onError: (response) => {
        alert("Произошла ошибка");
      },
    });
  };

  const { mutate } = useMutation({
    mutationFn: (formPayload) => {
      return axios.post(
        "https://sf-final-project-be.herokuapp.com/api/auth/sign_in",
        formPayload
      );
    },
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="formContainer register__form">
            <div className="formWrapper">
              <Header />
              <span className="form__title">Логин</span>
              <Form>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                <ErrorMessage name="email" component="span" className="error" />
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Пароль"
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />
                <button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                >
                  Войти
                </button>
              </Form>
              <p>
                У вас еще нет аккаунта?{" "}
                <Link
                  to="/register"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  Зарегестрироваться
                </Link>{" "}
              </p>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
