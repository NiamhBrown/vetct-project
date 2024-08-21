import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'


import { getCase } from "../services/cases";


const ViewCasePage = () => {
    const [caseInfo, setCaseInfo] = useState();

    const location = useLocation()
    const { id } = location.state

    const getCaseInfo = async () => {
        try {
            let response = await getCase(id);
            setCaseInfo(response)
            console.log(caseInfo)
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
        <p>{caseInfo.patient}</p>
    )
}

export default ViewCasePage