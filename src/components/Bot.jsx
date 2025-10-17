import bot from '../assets/bot.png';
const Bot = ({ onClick }) => {
  return (
    <div className="bot-icon" onClick={onClick}>
      <img
        src={bot}
        alt="Chat Bot"
      />
      <span className="tooltip">Click ME!</span>
    </div>
  );
};

export default Bot;
