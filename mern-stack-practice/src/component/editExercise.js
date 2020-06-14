import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EditExercise({ match }) {
  const [user, setUser] = useState({
    userName: "",
    duration: 0,
    description: "",
    date: new Date(),
  });

  useEffect(() => {
    async function fetch() {
      const data = await axios.get(
        "http://localhost:5000/exercises/" + match.params.id
      );
      let { userName, duration, description, date } = data.data;
      const _date = Date.parse(date);
      date = _date;
      setUser({
        ...user,
        userName,
        duration,
        description,
        date,
      });
    }
    fetch();
  }, []);
  const handlesubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:5000/exercises/update/" + match.params.id,
      user
    );
    window.location = "/exercises";
  };
  const handlechange = (e) => {
    const target = e.target;
    const name = target.name;
    const val = target.value;
    setUser({
      ...user,
      [name]: val,
    });
  };

  return (
    <>
      <h2>Edit Exercise</h2>
      <form onSubmit={handlesubmit}>
        <div className="form-group">
          <label htmlFor="userName">User Name:</label>
          <select
            className="form-control"
            id="username"
            name="userName"
            value={user ? user.userName : ""}
            onChange={handlechange}
          >
            {user ? <option>{user.userName}</option> : ""}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="description..."
            value={user ? user.description : ""}
            onChange={handlechange}
          />
        </div>
        <div className="form-group">
          <label>Duration (minutes):</label>
          <input
            type="number"
            name="duration"
            className="form-control"
            value={user.duration}
            onChange={handlechange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Date:</label>
          <br />
          <DatePicker
            name="date"
            className="form-control"
            selected={user.date}
            onChange={(date) => {
              setUser({
                ...user,
                date,
              });
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </>
  );
}

export default EditExercise;
