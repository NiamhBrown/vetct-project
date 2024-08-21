import { useState, useEffect } from "react";

import { getCase } from "../services/cases";


const ViewCasePage = () => {
    const [caseInfo, setCaseInfo] = useState();

    const getCaseInfo = async () => {
        try {
            console.log(location.state)
            let response = await getCase(location.state.id);
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
        <p>{"hi"}</p>
    )
}

export default ViewCasePage