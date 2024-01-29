import { React, useState } from "react";

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
      <>
         <h1>Educational Information</h1>
         {!formSubmitted && (
            <form onSubmit={handleSubmit}>
               <div className="school-name">
                  <h1>School Name</h1>
                  <label htmlFor="school-name" />
                  <input type="text" className="school-name" id="school-name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
               </div>
               <div className="title-of-study">
                  <h1>Title of study</h1>
                  <label htmlFor="title-of-study" />
                  <input type="text" className="title-of-study" id="title-of-study" value={titleOfStudy} onChange={(e) => setTitleOfStudy(e.target.value)} />
               </div>
               <div className="date-of-study">
                  <h1>Date of study</h1>
                  <label htmlFor="date-of-study" />
                  <input type="text" className="date-of-study" id="date-of-study" value={dateOfStudy} onChange={(e) => setDateOfStudy(e.target.value)} />
               </div>
               <button type="submit">Submit</button>
            </form>
         )}

         {formSubmitted && (
            <form className="displayed-info" onSubmit={handleEdit}>
               <h2>{schoolName}</h2>
               <p>Title of study: {titleOfStudy}</p>
               <p>Date of study: {dateOfStudy}</p>
               <button type="submit">Edit</button>
            </form>
         )}
      </>
   );
}
