import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { getCase } from "../services/cases";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


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
        <div className='container'>
        <img className="img-fluid" src="https://uk.vet-ct.com/hubfs/VetCT-NewLogoWhite-padded.png" alt="VET.CT logo" />

        <div className="casepage-container">
        <a href="/" className="profile-btn"> <ArrowBackIcon/> </a>
            <div className="case-item-container">
                <img src={caseInfo.image_url} alt={caseInfo.species} className="case-item-image" />
                 <div className="case-item-details">
                    <p><strong>Patient: </strong>{caseInfo.patient}</p>
                    <p><strong>Owner: </strong>{caseInfo.owner}</p>
                    <p><strong>Species:</strong> {caseInfo.species}</p>
                    <p><strong>Speciality:</strong> {caseInfo.specialty}</p>
                    <p><strong>Body areas:</strong> {caseInfo.body_areas}</p>
                    <p><strong>Reporting Specialist:</strong> {caseInfo.reporting_specialist}</p>
                    <br/>
                    <p><strong>Turnaround Time:</strong> {caseInfo.turnaround}</p>
                    <p><strong>Status: </strong>{caseInfo.status}</p>
                    <p><strong>Creation Date:</strong> {caseInfo.creation_date}</p>
                    <p><strong>Reported Date:</strong> {caseInfo.reported_date}</p>
                    
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default ViewCasePage