import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/common/Navbar";
import StudentsView from "./component/student/StudentsView";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import AddStudent from "./component/student/AddStudent.jsx";
import EditStudent from "./component/student/EditStudent.jsx";
import StudentProfile from "./component/student/StudentProfile.jsx";

function App() {
  return (
    <>
      <main className="container mt-5">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/view-students" element={<StudentsView />}></Route>
            <Route path="/add-students" element={<AddStudent />}></Route>
            <Route path="/edit-student/:id" element={<EditStudent />}></Route>
            <Route path="/student-profile/:id" element={<StudentProfile />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
