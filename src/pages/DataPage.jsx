import React, { useState, useEffect } from "react";
import { getCases } from "../services/cases";
import Case from "../components/Case";
import 'bootstrap/dist/css/bootstrap.min.css';

const DataPage = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null); 

  useEffect(() => {
    getCases()
      .then((data) => {
        setCases(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cases:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const toggleRow = (caseId) => {
    setExpandedRow(expandedRow === caseId ? null : caseId);
  };

  return (
    <div className="container">
      {cases.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th> 
              <th>Case Key</th>
              <th>Patient Name</th>
              <th>Owner Name</th>
              <th>Specialty</th>
              <th>Creation Date</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((caseItem) => (
              <React.Fragment key={caseItem.id}>
                <tr>
                  <td>
                    <button
                      className="btn"
                      onClick={() => toggleRow(caseItem.id)}
                    >
                      {expandedRow === caseItem.id ? '▲' : '▼'}
                    </button>
                  </td>
                  <td>{caseItem.case_key}</td>
                  <td>{caseItem.patient}</td>
                  <td>{caseItem.owner}</td>
                  <td>{caseItem.specialty}</td>
                  <td>{caseItem.creation_date}</td>
                </tr>
                <tr>
                  <td colSpan="6" className="p-0">
                    <div
                      className={`collapse ${expandedRow === caseItem.id ? 'show' : ''}`}
                    >
                      {/* Collapsible content */}
                      <Case caseItem={caseItem}/>
                      {/* <div className="p-3">
                        <p><strong>Reported Date:</strong> {caseItem.reported_date}</p>
                        <p><strong>Species:</strong> {caseItem.species}</p>
                        <p><strong>Turnaround Time:</strong> {caseItem.turnaround}</p>
                        <p><strong>Image:</strong></p>
                        <img src={caseItem.image_url} alt={caseItem.species} className="img-fluid" />
                      </div> */}
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No cases found</p>
      )}
    </div>
  );
};

export default DataPage;