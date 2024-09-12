import React from "react";
import { useLocation } from "react-router-dom";

const Results: React.FC = () => {
  const location = useLocation();
  const { total, correct, incorrect } = location.state as {
    total: number;
    correct: number;
    incorrect: number;
  };

  return (
    <div className="results-container">
      <h1>Quiz Completed!</h1>
      <p>Total Questions: {total}</p>
      <p>Correct Answers: {correct}</p>
      <p>Incorrect Answers: {incorrect}</p>
    </div>
  );
};

export default Results;