import React from "react";

function About() {
  return (
    <>
      <h2 className="text-center my-3">About project</h2>
      <div className="row no-gutters text-center d-flex justify-content-center">
        <div className="col-8">
          <div className="list-group shadow">
            <button
              type="button"
              className="list-group-item list-group-item-action "
            >
              Author: Vũ Đức Vĩ
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Create on: 14/06/2020 at: 1:14
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Technology: MERN Stack (MongoDB, Express, React, Node.js)
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Reference:{" "}
              <a href="https://www.youtube.com/watch?v=7CqJlxBYj-M&t=551s">
                https://www.youtube.com/watch?v=7CqJlxBYj-M&t=551s
              </a>
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
              disabled
            >
              a
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
