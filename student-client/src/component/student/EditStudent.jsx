import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const { firstName, lastName, email, department } = student;

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get(`http://localhost:4800/students/${id}`);
    setStudent(result.data);
  };

  const handleInputChange = (e) => {
    setStudent((currentStudent) => ({ ...currentStudent, [e.target.name]: e.target.value }));
  };

  const updateStudent = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4800/students/${id}`, student);
    setStudent((student) => ({ ...student, firstName: "", lastName: "", email: "", department: "" }));
    navigate("/view-students");
  };

  return (
    <>
      <div className="container shadow pt-4">
        <div className="col-sm-8 py-2 px-5">
          <h2 className="mb-3">Edit student</h2>
          <form onSubmit={(e) => updateStudent(e)}>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="firstName">
                First Name
              </label>
              <input
                className="form-control col-sm-5"
                type="text"
                name="firstName"
                id="firstName"
                required
                value={firstName}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="form-control col-sm-5"
                type="text"
                name="lastName"
                id="lastName"
                required
                value={lastName}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="email">
                Email
              </label>
              <input
                className="form-control col-sm-5"
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="department">
                Department
              </label>
              <input
                className="form-control col-sm-5"
                type="text"
                name="department"
                id="department"
                required
                value={department}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="row mb-">
              <div className="col-sm-2">
                <button type="submit" className="btn btn-outline-success btn-md">
                  Save
                </button>
              </div>
              <div className="col-sm-2">
                <Link to={"/view-students"} className="btn btn-outline-warning btn-md">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditStudent;
