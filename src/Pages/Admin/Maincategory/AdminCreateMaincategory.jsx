import React, { useState } from "react";
import Breadcrum from "../../../Component/Breadcrum";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import FormValidator from "../../../Validators/FormValidator";
export default function AdminCreateMaincategory() {
  let [data, setData] = useState({
    name: "",
    pic: "",
    active: true,
  });

  // message error
  let [errorMessage, setErrorMessage] = useState({
    name: "Name Field is Mendatory",
    pic: "Pic Field is Mendatory",
  });

  // Show Error
  let [show, setShow] = useState(false);

  // function
  function getInputData(e) {
    var name = e.target.name;
    var value = e.target.files ? e.target.files[0].name : e.target.value;

    setErrorMessage((old) => {
      return {
        ...old,
        [name]: FormValidator(e),
      };
    });
    setData((old) => {
      return {
        ...old,
        [name]: name==="active"?(value==="1"?true:false):value
      };
    });
  }
  function postData(e) {
    e.preventDefault();

    let error = Object.values(errorMessage).find((x) => x !== "");
    if (error) setShow(true);
    else {
      alert(`
  Name: ${data.name},
  Pic: ${data.pic},
  Active:${data.active}

      `);
    }
  }
  return (
    <>
      <Breadcrum title="Admin" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 ">
            <Sidebar />
          </div>
          <div className="col-md-9 ">
            <h5 className="bg-primary text-center text-light p-2 my-4 w-100">
              Maincategoryfds{" "}
              <Link to="/admin/maincategory">
                <i className="fa fa-long-arrow-left text-light float-end"></i>
              </Link>
            </h5>

            <form onSubmit={postData}>
              <div className="mb-3">
                <label>Name*</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Maincategory Name"
                  onChange={getInputData}
                  className={`form-control border-3 ${
                    show && errorMessage.name
                      ? "border-danger"
                      : "border-primary"
                  }`}
                />
                {show && errorMessage.name ? (
                  <p className="text-danger">{errorMessage.name}</p>
                ) : null}
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label>Pic*</label>
                  <input
                    type="file"
                    name="pic"
                    onChange={getInputData}
                    className={`form-control border-3 ${
                      show && errorMessage.pic
                        ? "border-danger"
                        : "border-primary"
                    }`}
                  />
                  {show && errorMessage.pic ? (
                    <p className="text-danger">{errorMessage.pic}</p>
                  ) : null}
                </div>
                <div className="col-md-6">
                  <label>Active</label>
                  <select
                    name="active"
                    className="form-select border-primary border-3"
                    onChange={getInputData}
                  >
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 mt-3">
                <button className="btn btn-primary w-100">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
