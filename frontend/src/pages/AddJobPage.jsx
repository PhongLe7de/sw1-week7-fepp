import { useState } from "react";

const AddJobPage = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("Full-Time");
  const [jobDescription, setJobDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const jobData = {
      jobTitle,
      jobType,
      jobDescription,
      companyName,
      contactEmail,
      contactPhone,
    };

    console.log("Submitted Job Data:", jobData);

  };

  return (
    <div className="create">
      <h2>Add a New Job</h2>
      <form onSubmit={submitForm}>
        <label>Job Title:</label>
        <input
          type="text"
          required
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />

        <label>Job Type:</label>
        <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Remote">Remote</option>
          <option value="Internship">Internship</option>
        </select>

        <label>Job Description:</label>
        <textarea
          required
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        ></textarea>

        <label>Company Name:</label>
        <input
          type="text"
          required
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <label>Contact Email:</label>
        <input
          type="email"
          required
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />

        <label>Contact Phone:</label>
        <input
          type="tel"
          required
          value={contactPhone}
          onChange={(e) => setContactPhone(e.target.value)}
        />

        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AddJobPage;
