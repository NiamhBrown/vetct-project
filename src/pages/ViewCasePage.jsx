import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'


import { getCase } from "../services/cases";


const ViewCasePage = () => {
    const [caseInfo, setCaseInfo] = useState({});

    const location = useLocation()
    const { id } = location.state
    console.log("THIS IS THE ID FROM STATE", id)

    const getCaseInfo = async () => {
        try {
            let response = await getCase(id);
            setCaseInfo(response)
            console.log("THIS IS response", response)
        }
        catch(error) {
            console.error("Error fetching cases:", error);
        }
        
      };


      console.log("caseInfo", caseInfo)
    
      useEffect(() => {
        getCaseInfo();
      }, []);

    return (
        <>
        <a href="/">back </a>
        <p>{caseInfo.patient}</p>
        <p>{caseInfo.status}</p>

        </>
    )
}

export default ViewCasePage