import axios from "axios";
import { ErrorMessage, Field, Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Header from "./Header";

import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";

export default function FullOfficer() {
  const token = useSelector((state) => state.user.token);
  const [officer, setOfficer] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://sf-final-project-be.herokuapp.com/api/officers/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((data) => {
        setOfficer(data.data.data);
      });
  }, []);

  const initialValues = {
    firstName: officer.firstName || "",
    lastName: officer.lastName || "",
    approved: officer.approved || false,
  };

  const onSubmit = (values) => {
    mutate(values, {
      onSuccess: (response) => {
        navigate("/officers");
      },
      onError: (response) => {
        alert("Произошла ошибка");
      },
    });
  };

  const { mutate } = useMutation({
    mutationFn: (formPayload) => {
      return axios.put(
        `https://sf-final-project-be.herokuapp.com/api/officers/${id}`,
        formPayload,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    },
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="formContainer steal__form">
            <div className="formWrapper">
              <Header />

              <span className="menu__link">Редактировать</span>
              <Form>
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
                <div className="checkbox">
                  <Field
                    type="checkbox"
                    name="approved"
                    id="approved"
                    placeholder="Фамилия"
                    className={
                      errors.approved && touched.approved
                        ? "input-error"
                        : "input-checkbox"
                    }
                  />
                  Одобрен
                </div>

                <ErrorMessage
                  name="approved"
                  component="span"
                  className="error"
                />
                <button type="submit">Сохранить</button>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
