import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import MoreDetailsContainer from "./MoreDetailsButtonContainer";

const MoreDetailsButton = ({ cityName }: { cityName: string }) => {
  const navigate = useNavigate();
  return (
    <MoreDetailsContainer
      as="div"
      onClick={() => navigate(`more-details/${cityName}`)}
    >
      <p>Detailed Weather of {cityName}</p>
      <span />
      <FontAwesomeIcon icon={faArrowRight} />
    </MoreDetailsContainer>
  );
};
export default MoreDetailsButton;
