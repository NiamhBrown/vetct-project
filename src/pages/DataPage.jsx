import { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getPaginatedCases } from "../services/cases";
import { CasesTable } from "../components/CasesTable";
import 'bootstrap/dist/css/bootstrap.min.css';
import './DataPage.css'

const DataPage = () => {
  const [cases, setCases] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPages, setTotalPages] = useState()

  const getCases = async () => {
    try {
        setLoading(true);
        let response = await getPaginatedCases(currentPage);
        setCases(response.cases)
        setLoading(false);
        console.log(cases)
        setTotalPages(response.totalPages)

        console.log("made it in try catch success")
    }
    catch(error) {
        console.error("Error fetching cases:", error);
        setError(error.message);
        setLoading(false);
    }
  };

  useEffect(() => {
    getCases();
  }, [currentPage]);



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredCases = cases.filter((caseItem) => 
    caseItem.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
    caseItem.species.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("currentPage", currentPage)

  return (
    <div className="container">
        <img className="img-fluid" src="https://uk.vet-ct.com/hubfs/VetCT-NewLogoWhite-padded.png" alt="VET.CT logo" />
        <div className="mb-3">
        {/* add a label for screen readers  */}
        <input
          type="text"
          className="form-control"
          placeholder="Search by patient name or breed"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        </div>
        <div>
            {filteredCases.length === 1 ? `${filteredCases.length} case found` : `${filteredCases.length} cases found`} 
        </div>

      {cases.length > 0 ? (
        <CasesTable filteredCases = { filteredCases }/>
      ) : (
        <p>No cases found</p>
      )}
              <>
            <Stack spacing={2}>
            <Pagination count={totalPages} color="secondary" onChange={(event, page) => setCurrentPage(page)} page={currentPage}/>
          </Stack>
          </>
    </div>
  );
};

export default DataPage;