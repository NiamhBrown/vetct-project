import React, { useState } from 'react';
import Case from './Case';
import PropTypes from 'prop-types';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CasesTable = ({ filteredCases }) => {
  const [expandedRow, setExpandedRow] = useState(null);

  return (
    <div className="table-wrapper">
      <table className="table table-bordered table-custom mb-0">
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
          {filteredCases.map((caseItem) => (
            <React.Fragment key={caseItem.id}>
              <tr>
                <td>
                  <button
                    className="btn"
                    onClick={() =>
                      setExpandedRow(
                        expandedRow === caseItem.id ? null : caseItem.id
                      )
                    }
                  >
                    {expandedRow === caseItem.id ? (
                      <ArrowDropUpIcon />
                    ) : (
                      <ArrowDropDownIcon />
                    )}
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
                    <Case caseItem={caseItem} />
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

CasesTable.propTypes = {
  filteredCases: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    case_key: PropTypes.string.isRequired,
    patient: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    creation_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default CasesTable;
