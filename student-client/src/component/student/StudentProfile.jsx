import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const StudentProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:4800/students/${id}`);
    setStudent(result.data);
  };

  return (
    <>
      <div className="container shadow">
        <div className="pt-4">
          <ul className="list-group">
            <li className="list-group-item">
              Name : {student.firstName} {student.lastName}
            </li>
            <li className="list-group-item">Email : {student.email}</li>
            <li className="list-group-item">Department : {student.department}</li>
          </ul>
          <button className="btn btn-primary mb-4 mt-2" onClick={() => navigate("/view-students")}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
