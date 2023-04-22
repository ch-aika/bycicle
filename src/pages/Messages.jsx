import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import Message from "../components/Message";

export default function Messages() {
  const token = useSelector((state) => state.user.token);

  const getOfficers = async () => {
    let url = `https://sf-final-project-be.herokuapp.com/api/cases`;

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
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["officers2"],
    queryFn: getOfficers,
  });

  return (
    <div>
      <Header />
      <div className="table__container">
        <h1 className="table__name">Сообщения о краже</h1>
        <div className="table__content">
          <table className="table">
            <thead>
              <tr>
                <th>Статус</th>
                <th>ФИО</th>
                <th>Тип велосипеда</th>
                <th>Цвет велосипеда</th>
                <th>Дата кражи</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.data?.map((message) => (
                  <Message key={message._id} message={message} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
