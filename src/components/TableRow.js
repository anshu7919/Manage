import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const TableRow = ({
  user,
  selected,
  handleRowSelection,
  handleEdit,
  handleDelete,
}) => {
  return (
    <tr className={selected ? "selected" : ""}>
      <td>
        <input
          type="checkbox"
          checked={selected}
          onChange={(event) => handleRowSelection(event, user.id)}
        />
      </td>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td className="btn-container">
        <button onClick={() => handleEdit(user.id)}>
          <TbEdit fontSize={"16px"}/>
        </button>
        <button onClick={() => handleDelete(user.id, true)}>
        <MdDeleteOutline fontSize={"16px"} color="red"/>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
