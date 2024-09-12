import React, { useState } from "react";
import { useFetchQuiz } from "../hooks/useFetchQuiz";
import Question from "./Question";
import AnswerOptions from "./AnswerOptions";
import { useNavigate } from "react-router-dom";

const Quiz: React.FC = () => {
  const { questions, loading, error } = useFetchQuiz(10);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const navigate = useNavigate();

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  const handleSubmit = () => {
    if (selectedAnswer === questions[currentQuestion].correct_answer) {
      setCorrectAnswers((prev) => prev + 1);
    }

    if (currentQuestion + 1 === questions.length) {
      navigate("/results", {
        state: {
          total: questions.length,
          correct: correctAnswers,
          incorrect: questions.length - correctAnswers,
        },
      });
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="quiz-container">
      <Question question={questions[currentQuestion].question} />
      <AnswerOptions
        options={[
          ...questions[currentQuestion].incorrect_answers,
          questions[currentQuestion].correct_answer,
        ].sort()}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
      />
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={!selectedAnswer}
      >
        Submit
      </button>
    </div>
  );
};

export default Quiz;