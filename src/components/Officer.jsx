import axios from "axios";

import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Officer({ officer }) {
  const currentTd = useRef(null);
  const token = useSelector((state) => state.user.token);

  function tryDelete() {
    if (window.confirm("Вы уверены что хотите удалить сотрудника?")) {
      axios.delete(
        `https://sf-final-project-be.herokuapp.com/api/officers/${officer._id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      currentTd.current.remove();
    }
  }
  return (
    <tr ref={currentTd}>
      <td>{officer.approved ? "Да" : "Нет"}</td>
      <td>{officer.email}</td>
      <td>{officer.firstName ? officer.firstName : "Не указано"}</td>
      <td>{officer.lastName ? officer.lastName : "Не указано"}</td>
      <td>
        <Link to={`/officers/${officer._id}`} className="officer__link">
          <i className="uil uil-edit"></i>
        </Link>
      </td>
      <td className="officer__delete" onClick={tryDelete}>
        <i className="uil uil-multiply"></i>
      </td>
    </tr>
  );
}
