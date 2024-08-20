import { useState, useEffect } from "react";
import { getCases } from "../services/cases";

const DataPage = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    getCases()
      .then((data) => {
        setCases(data.data);
      })
      .catch((error) => {
        console.error("Error fetching cases:", error);
      });
  }, []); 

  return (
    <>
      {cases.length > 0 ? (
        cases.map((caseItem) => (
          <div key={caseItem.id}>
            <p>Case key: {caseItem.case_key}</p>
            <p>Patient name: {caseItem.patient}</p>
            <p>Owner name: {caseItem.owner}</p>
            <p>Specialty: {caseItem.specialty}</p>
            <p>Creation date: {caseItem.creation_date}</p>
          </div>
        ))
      ) : (
        <p>No cases found</p>
      )}
    </>
  );
};

export default DataPage;
