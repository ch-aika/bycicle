import { useMutation } from "@tanstack/react-query";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import axios from "axios";
import Header from "../components/Header";

export default function Register() {
  const navigate = useNavigate();

  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Необходимо указать почту"),
    password: Yup.string()
      .required("Необходимо указать пароль")
      .min(6, "пароль слишком короткий"),
    clientId: Yup.string().required("укажите идентификатор"),
  });

  const initialValues = {
    email: "",
    password: "",
    clientId: "",
    firstName: "",
    lastName: "",
  };

  const onSubmit = (values) => {
    mutate(values, {
      onSuccess: (response) => {
        navigate("/login");
      },
      onError: (response) => {
        alert("Произошла ошибка");
      },
    });
  };

  const { mutate } = useMutation({
    mutationFn: (formPayload) => {
      return axios.post(
        "https://sf-final-project-be.herokuapp.com/api/auth/sign_up",
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
              <span className="form__title">Регистрация</span>
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
                <Field
                  type="text"
                  name="clientId"
                  id="clientId"
                  placeholder="Идентификатор доступа"
                  className={
                    errors.clientId && touched.clientId ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="clientId"
                  component="span"
                  className="error"
                />
                <Field
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Имя"
                  className={
                    errors.firstName && touched.firstName ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="error"
                />
                <Field
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Фамилия"
                  className={
                    errors.lastName && touched.lastName ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="error"
                />

                <button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                >
                  Зарегестрироваться
                </button>
              </Form>
              <p>
                У вас уже есть аккаунт?{" "}
                <Link
                  to="/login"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  Войти
                </Link>{" "}
              </p>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
