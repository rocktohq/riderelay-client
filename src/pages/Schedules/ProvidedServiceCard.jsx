import PropTypes from "prop-types";

const ProvidedServiceCard = ({providedService}) => {
    // const {name,image, description, status} = providedService;
    console.log(providedService)
  return (
    <div className="shadow-md p-5 rounded-md">

    </div>
  );
};

export default ProvidedServiceCard;
ProvidedServiceCard.propTypes = {
    providedService: PropTypes.object,
  };
  