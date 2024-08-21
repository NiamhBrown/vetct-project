import PropTypes from 'prop-types';

const Case = ( {caseItem} ) => {

    return (
                        <div className="p-3">
                        <p><strong>Reported Date:</strong> {caseItem.reported_date}</p>
                        <p><strong>Species:</strong> {caseItem.species}</p>
                        <p><strong>Turnaround Time:</strong> {caseItem.turnaround}</p>
                        <img src={caseItem.image_url} alt={caseItem.species} className="img-fluid" />
                      </div> 
    )
}

// If converting to TS, would create an interface with props.
Case.propTypes = {
    caseItem: PropTypes.shape({
        reported_date: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        turnaround: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired
    }).isRequired
};

export default Case