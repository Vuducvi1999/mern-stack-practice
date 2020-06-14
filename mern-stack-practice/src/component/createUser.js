import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [user, setUser] = useState("");
  const [err, setErr] = useState("");

  const handlechange = (e) => {
    const target = e.target;
    const value = target.value;
    setUser(value);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!err) {
      setErr("Required !");
      return;
    }
    await axios.post("http://localhost:5000/users/add", { userName: user });
    window.location = "/exercises";
  };
  return (
    <>
      <h2>Create User</h2>
      <form onSubmit={handlesubmit}>
        <div className="form-group">
          <label>User name:</label>
          {err ? <span className="text-danger">{err}</span> : ""}
          <input
            type="text"
            className="form-control"
            placeholder="name..."
            value={user}
            onChange={handlechange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </>
  );
}

export default CreateUser;
