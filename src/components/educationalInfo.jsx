import { React, useState } from "react";
import "../styles/educational-info.css";

export default function EducationalInfo() {
   const [schoolName, setSchoolName] = useState("");
   const [titleOfStudy, setTitleOfStudy] = useState("");
   const [dateOfStudy, setDateOfStudy] = useState("");
   const [formSubmitted, setFormSubmitted] = useState(false);

   function handleSubmit(e) {
      e.preventDefault();
      setFormSubmitted(true);
   }

   function handleEdit(e) {
      e.preventDefault();
      setFormSubmitted(false);
   }

   return (
      <div className="educational-info-container">
         <h1 className="educational-info-title">Educational Information</h1>
         {!formSubmitted && (
            <form className="educational-info-form" onSubmit={handleSubmit}>
               <div className="school-name">
                  <input type="text" className="school-name" id="school-name" placeholder="SCHOOL NAME" maxLength={35} value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
               </div>
               <div className="title-of-study">
                  <input type="text" className="title-of-study" id="title-of-study" placeholder="TITLE OF STUDY" maxLength={35} value={titleOfStudy} onChange={(e) => setTitleOfStudy(e.target.value)} />
               </div>
               <div className="date-of-study">
                  <input type="date" className="date-of-study" id="date-of-study" placeholder="DATE" value={dateOfStudy} onChange={(e) => setDateOfStudy(e.target.value)} />
               </div>
               <button type="submit">SUBMIT</button>
            </form>
         )}

         {formSubmitted && (
            <form className="displayed-info-container" onSubmit={handleEdit}>
               <div className="displayed-info-data">
                  <h2>{schoolName}</h2>
                  <p>Title of study: {titleOfStudy}</p>
                  <p>Date of study: {dateOfStudy}</p>
               </div>
               <button type="submit">EDIT</button>
            </form>
         )}
      </div>
   );
}
