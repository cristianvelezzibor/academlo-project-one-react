import "./ButtonPhrase.css";

const ButtonPhrase = ({ eventClick }) => {
  return (
    <button onClick={eventClick}>
      <i className="bx bx-refresh"></i>
    </button>
  );
};

export default ButtonPhrase;
