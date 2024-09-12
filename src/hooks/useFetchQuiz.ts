import { useState, useEffect } from "react";
import axios from "axios";
import { QuizResponse, Question } from "../utils/types";

export const useFetchQuiz = (amount: number) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<QuizResponse>(
          `https://opentdb.com/api.php?amount=${amount}`
        );
        setQuestions(response.data.results);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch questions.");
        setLoading(false);
      }
    };
    fetchData();
  }, [amount]);

  return { questions, loading, error };
};