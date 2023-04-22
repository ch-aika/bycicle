import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import axios from "axios";
import Header from "../components/Header";
import { useSelector } from "react-redux";

export default function Steal() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const userInfo = useSelector((state) => state.user.userInfo);

  const getOfficers = async () => {
    if (token) {
      let url = `https://sf-final-project-be.herokuapp.com/api/officers`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const responce = await res.json();
      return responce;
    } else {
      return null;
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["officers"],
    queryFn: getOfficers,
  });
  console.log();

  const signInSchema = Yup.object().shape({
    licenseNumber: Yup.string().required("Необходимо указать лицензию"),
    ownerFullName: Yup.string().required("Необходимо указать фио"),
    type: Yup.string().required("Необходимо указать тип велосипеда"),
    date: Yup.date().required("Укажите дату кражи"),
    clientId: !token ? Yup.string().required("Укажите clientId") : null,
  });

  const initialValues = {
    licenseNumber: "",
    ownerFullName: "",
    type: "sport",
    clientId: "",
    color: "",
    date: "",
    description: "",
    officer: "",
  };

  const onSubmit = (values) => {
    mutate(values, {
      onSuccess: (response) => {
        navigate("/");
      },
      onError: (response) => {
        alert("Произошла ошибка");
      },
    });
  };

  const { mutate } = useMutation({
    mutationFn: (formPayload) => {
      if (token) {
        return axios.post(
          "https://sf-final-project-be.herokuapp.com/api/cases",
          formPayload,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
      } else {
        return axios.post(
          "https://sf-final-project-be.herokuapp.com/api/public/report",
          formPayload
        );
      }
    },
  });
  //номер лицензии фио клиента тип велосипеда-выпад список цвет велосипеда дата кражи дополнительная информация
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="formContainer steal__form">
            <div className="formWrapper">
              <Header />

              <span className="form__title">Сообщите о краже</span>
              <Form>
                <Field
                  type="text"
                  name="licenseNumber"
                  id="licenseNumber"
                  placeholder="Номер лицензии"
                  className={
                    errors.licenseNumber && touched.licenseNumber
                      ? "input-error"
                      : null
                  }
                />
                <ErrorMessage
                  name="licenseNumber"
                  component="span"
                  className="error"
                />
                <Field
                  type="text"
                  name="ownerFullName"
                  id="ownerFullName"
                  placeholder="ФИО"
                  className={
                    errors.ownerFullName && touched.ownerFullName
                      ? "input-error"
                      : null
                  }
                />
                <ErrorMessage
                  name="ownerFullName"
                  component="span"
                  className="error"
                />
                {!token && (
                  <>
                    <Field
                      type="text"
                      name="clientId"
                      id="clientId"
                      placeholder="код клиента"
                      className={
                        errors.clientId && touched.clientId
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="clientId"
                      component="span"
                      className="error"
                    />
                  </>
                )}
                <p>Тип велосипеда</p>
                <Field
                  as="select"
                  name="type"
                  id="type"
                  placeholder="Тип велосипеда"
                  className={errors.type && touched.type ? "input-error" : null}
                >
                  <option value="sport">sport</option>
                  <option value="general">general</option>
                </Field>
                <ErrorMessage name="type" component="span" className="error" />

                {userInfo.approved && (
                  <>
                    <p>Ответственный сотрудник</p>
                    <Field
                      as="select"
                      name="officer"
                      id="officer"
                      placeholder="ответственный сотрудник"
                      className={
                        errors.officer && touched.officer ? "input-error" : null
                      }
                    >
                      <option value="">Не указано</option>
                      {data?.officers
                        .filter((of) => of.approved)
                        .map((of) => (
                          <option key={of._id} value={of._id}>
                            {of.firstName}
                          </option>
                        ))}
                    </Field>
                  </>
                )}
                <Field
                  type="text"
                  name="color"
                  id="color"
                  placeholder="Цвет велосипеда"
                  className={
                    errors.color && touched.color ? "input-error" : null
                  }
                />
                <ErrorMessage name="color" component="span" className="error" />
                <Field
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Дата кражи"
                  className={errors.date && touched.date ? "input-error" : null}
                />
                <ErrorMessage name="date" component="span" className="error" />
                <Field
                  as="textarea"
                  name="description"
                  id="description"
                  placeholder="Дополнительная информация"
                  className={
                    errors.description && touched.description
                      ? "input-error"
                      : null
                  }
                />
                <ErrorMessage
                  name="description"
                  component="span"
                  className="error"
                />
                <button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                >
                  Сообщить
                </button>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
