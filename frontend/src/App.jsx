import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// pages & components
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import AddJobPage from "./pages/AddJobPage";
import JobPage from "./pages/JobPage";
import EditJobPage from "./pages/EditJobPage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
    const[jobAdded, setJobAdded] = useState(false);
    const[jobEdited, setJobEdited] = useState(false);
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home jobAdded={jobAdded} jobEdited={jobEdited} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/add-job" element={<AddJobPage setJobAdded={setJobAdded}/>} />
              <Route path="/jobs/:id" element={<JobPage />} />
              <Route path="/edit-job/:id" element={<EditJobPage setJobEdited={setJobEdited} />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
