const Bot = ({ onClick }) => {
  return (
    <div className="bot-icon" onClick={onClick}>
      <img
        src="src/assets/bot.png"
        alt="Chat Bot"
      />
      <span className="tooltip">Click ME!</span>
    </div>
  );
};

export default Bot;
