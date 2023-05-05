import "./PhraseText.css";

const PhraseText = ({ phrase }) => {
  return (
    <section className="containerPhrase">
      <p>{phrase}</p>
    </section>
  );
};

export default PhraseText;
