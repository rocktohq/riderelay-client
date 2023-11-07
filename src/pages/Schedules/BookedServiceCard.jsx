import PropTypes from "prop-types";

const BookedServiceCard = ({ bookedService }) => {
  console.log(bookedService);
  return <div>My Booked Service</div>;
};

export default BookedServiceCard;
BookedServiceCard.propTypes = {
  bookedService: PropTypes.object,
};
