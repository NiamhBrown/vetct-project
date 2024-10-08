import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Case = ({ caseItem }) => {
  return (
    <div className="case-item-container">
      <img
        src={caseItem.image_url}
        alt={caseItem.species}
        className="case-item-image"
      />
      <div className="case-item-details">
        <p>
          <strong>Reported Date:</strong> {caseItem.reported_date}
        </p>
        <p>
          <strong>Status:</strong> {caseItem.status}
        </p>
        <p>
          <strong>Turnaround Time:</strong> {caseItem.turnaround}
        </p>
        <Link
          to={`/case/${caseItem.id}`}
          state={{ id: `${caseItem.id}` }}
          className="primary-btn"
        >
          View profile
        </Link>
      </div>
    </div>
  );
};

// If converting to TS, would create an interface with props.
Case.propTypes = {
  caseItem: PropTypes.shape({
    reported_date: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    turnaround: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default Case;
