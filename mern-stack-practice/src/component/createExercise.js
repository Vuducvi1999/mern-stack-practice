import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise() {
  const [user, setUser] = useState([]);
  const [select, setSelect] = useState({
    userName: "",
    description: "",
    duration: 0,
    date: new Date(),
  });
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("http://localhost:5000/users/");
      setUser(data.data);
      setSelect({
        ...select,
        userName: data.data[0].userName,
      });
    }
    fetchData();
  }, []);

  const handlechange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setSelect({
      ...select,
      [name]: value,
    });
    console.log(select);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!select.description) {
      setError("Required !");
      return;
    }
    await axios.post("http://localhost:5000/exercises/add", select);
    window.location = "/exercises";
  };
  return (
    <>
      <h2>Create New Exercise</h2>
      <form onSubmit={handlesubmit}>
        <div className="form-group">
          <label htmlFor="userName">User Name:</label>
          <select
            className="form-control"
            id="username"
            name="userName"
            value={select ? select.userName : ""}
            onChange={handlechange}
          >
            {user
              ? user.map((i) => {
                  return <option key={i._id}>{i.userName}</option>;
                })
              : ""}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          {error ? <span className="text-danger"> {error}</span> : ""}
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="description..."
            value={select ? select.description : ""}
            onChange={handlechange}
          />
        </div>
        <div className="form-group">
          <label>Duration (minutes):</label>
          <input
            type="number"
            name="duration"
            className="form-control"
            value={select.duration}
            onChange={handlechange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Date:</label>
          <br />
          <DatePicker
            name="date"
            className="form-control"
            selected={select.date}
            onChange={(date) => {
              setSelect({
                ...select,
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

export default CreateExercise;
