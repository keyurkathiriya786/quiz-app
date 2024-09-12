import React from "react";

interface QuestionProps {
  question: string;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  return <h2 className="question">{question}</h2>;
};

export default Question;