import axios from "axios";
import { ErrorMessage, Field, Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Header from "./Header";

import * as Yup from "yup";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function FullCase() {
  const token = useSelector((state) => state.user.token);
  const userInfo = useSelector((state) => state.user.userInfo);
  const [fullCase, setFullCase] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    axios
      .get(`https://sf-final-project-be.herokuapp.com/api/cases/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((data) => {
        setFullCase(data.data.data);
      });
  }, []);

  const onSubmit = (values) => {
    mutate(values, {
      onSuccess: (response) => {
        navigate("/cases");
      },
      onError: (response) => {
        alert("Произошла ошибка");
      },
    });
  };

  const initialValues = {
    licenseNumber: fullCase.licenseNumber || "",
    ownerFullName: fullCase.ownerFullName || "",
    type: fullCase.type || "sport",
    color: fullCase.color || "",
    date: fullCase.date?.slice(0, 10),
    description: fullCase.description || "",
    officer: fullCase.officer || "",
    status: fullCase.status,
    resolution: fullCase.resolution ? fullCase.resolution : "",
  };

  const { mutate } = useMutation({
    mutationFn: (formPayload) => {
      return axios.put(
        `https://sf-final-project-be.herokuapp.com/api/cases/${id}`,
        formPayload,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    },
  });

  const signInSchema = Yup.object().shape({
    licenseNumber: Yup.string().required("Необходимо указать лицензию"),
    ownerFullName: Yup.string().required("Необходимо указать фио"),
    type: Yup.string().required("Необходимо указать тип велосипеда"),
    date: Yup.date().required("Укажите дату кражи"),
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={signInSchema}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty, values } = formik;

        return (
          <div className="formContainer steal__form redact__form">
            <div className="formWrapper">
              <Header />

              <span className="form__title">Редактировать</span>
              <Form>
                <p>Статус</p>
                <Field
                  as="select"
                  name="status"
                  id="status"
                  placeholder="Статус"
                  className={
                    errors.status && touched.status ? "input-error" : null
                  }
                >
                  <option value="new">Новое</option>
                  <option value="in_progress">В процессе</option>
                  <option value="done">Завершен</option>
                </Field>
                <ErrorMessage
                  name="status"
                  component="span"
                  className="error"
                />
                <p>Номер лицензии</p>
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
                <p>ФИО</p>
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
                <p>Цвет</p>
                <Field
                  type="text"
                  name="color"
                  id="color"
                  placeholder="Цвет велосипеда"
                  className={
                    errors.color && touched.color ? "input-error" : null
                  }
                />
                <p>Дата Кражи</p>
                <ErrorMessage name="color" component="span" className="error" />
                <Field
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Дата кражи"
                  className={errors.date && touched.date ? "input-error" : null}
                />
                <ErrorMessage name="date" component="span" className="error" />
                {values.status === "done" && (
                  <>
                    <p>завершающий комментарий</p>
                    <Field
                      type="text"
                      name="resolution"
                      id="resolution"
                      placeholder="Завершающий комментарий"
                      className={
                        errors.resolution && touched.resolution
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="resolution"
                      component="span"
                      className="error"
                    />
                  </>
                )}
                <p>Дополнительная информация</p>
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
                  disabled={
                    values.status === "done" && values.resolution === ""
                  }
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                >
                  Сохранить
                </button>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
