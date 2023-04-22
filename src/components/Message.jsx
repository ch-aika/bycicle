import axios from "axios";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Message({ message }) {
  const currentTd = useRef(null);
  const token = useSelector((state) => state.user.token);

  function tryDelete() {
    if (window.confirm("Вы уверены что хотите удалить сообщение о краже?")) {
      axios.delete(
        `https://sf-final-project-be.herokuapp.com/api/cases/${message._id}`,
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
      <td>{message.status}</td>
      <td>{message.ownerFullName}</td>
      <td>{message.type}</td>
      <td>{message.color ? message.color : "Не указано"}</td>
      <td>{new Date(message.date).toLocaleDateString()}</td>
      <td>
        <Link to={`/cases/${message._id}`} className="officer__link">
          {/* Редактировать */}
          <i className="uil uil-edit"></i>
        </Link>
      </td>
      <td className="officer__delete" onClick={tryDelete}>
        <i className="uil uil-multiply"></i>
      </td>
    </tr>
  );
}
