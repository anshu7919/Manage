import React, { useState } from "react";

const EditModal = ({ editRowData, setIsModalOpen, allRoles, handleSaveRow 
}) => {
  const id = editRowData?.id;
  const [name, setName] = useState(editRowData?.name);
  const [email, setEmail] = useState(editRowData?.email);
  const [role, setRole] = useState(editRowData?.role);

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Row</h3>
        <form>
          <p
            style={{
              fontSize: "small",
            }}
          >
            ID : {editRowData?.id}
          </p>
          <label
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <p>Name</p>

            <input
              style={{
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <p>Email</p>

            <input
              style={{
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <p>Role</p>

            <select
              style={{
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
              onChange={(e) => setRole(e.target.value)}
              value={role}
            >
              {allRoles.map(role => <option key={role}>
                {role}
              </option>)}
              </select>
          </label>

        </form>
        <div style={{
          marginTop : "20px",
          display : "flex",
          gap : "20px",
          alignItems : "center"
        }}
        >
          <button
          onClick={() => {
            handleSaveRow({id, name, email, role})
            setIsModalOpen(false)
          }}
          >Save</button>
          <button
          style={{
            background : "red"
          }}
          onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
