import { useState, useEffect } from "react";
import { getCases } from "../services/cases";

const DataPage = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <>
    {cases.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Case Key</th>
              <th>Patient Name</th>
              <th>Owner Name</th>
              <th>Specialty</th>
              <th>Creation Date</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((caseItem) => (
              <tr key={caseItem.id}>
                <td>{caseItem.case_key}</td>
                <td>{caseItem.patient}</td>
                <td>{caseItem.owner}</td>
                <td>{caseItem.specialty}</td>
                <td>{caseItem.creation_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No cases found</p>
      )}
    </>
  );
};

export default DataPage;
