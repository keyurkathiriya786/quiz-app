import React from "react";

interface AnswerOptionsProps {
  options: string[];
  selectedAnswer: string | null;
  setSelectedAnswer: (answer: string) => void;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({
  options,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  return (
    <ul className="answer-options">
      {options.map((option, idx) => (
        <li key={idx}>
          <button
            className={`answer-button ${
              selectedAnswer === option ? "selected" : ""
            }`}
            onClick={() => setSelectedAnswer(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AnswerOptions;