import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [state, setState] = useState({
    name: "",
    status: "",
  });
  const [allTasks, setAllTasks] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setAllTasks((prevTasks) => [...prevTasks, state]);
    setState({
      name: "",
      status: "",
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={submitHandler}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                value={state.name}
                onChange={(e) =>
                  setState({
                    ...state,
                    name: e.target.value,
                  })
                }
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                value={state.status}
                onChange={(e) =>
                  setState({
                    ...state,
                    status: e.target.value,
                  })
                }
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {allTasks
                .filter((task) => {
                  if (show === "all") {
                    return true;
                  } else if (show === "active") {
                    return task.status === "active";
                  } else if (show === "completed") {
                    return task.status === "completed";
                  }
                  return true;
                })
                .sort((a, b) => {
                  if (a.status === "active" && b.status !== "active") {
                    return -1;
                  } else if (a.status !== "active" && b.status === "active") {
                    return 1;
                  } else if (
                    a.status === "completed" &&
                    b.status !== "completed"
                  ) {
                    return -1;
                  } else if (
                    a.status !== "completed" &&
                    b.status === "completed"
                  ) {
                    return 1;
                  } else {
                    return 0;
                  }
                })
                .map((task, i) => (
                  <tr key={i}>
                    <td>{task.name}</td>
                    <td>{task.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
