import { useQuery } from "react-query";
import { getAnswer, getMCQs } from "../../../services/api/home";
import { useState } from "react";

const useMCQs = () => {
  const { data, isLoading, refetch } = useQuery("getMCQs", getMCQs);
  const [answerSelected, setAnswerSelected] = useState<string | undefined>(
    undefined
  );
  const [correctAnswer, setCorrectAnswer] = useState<string | undefined>(
    undefined
  );

  function handleRefetch() {
    setTimeout(() => {
      setAnswerSelected(undefined);
      setCorrectAnswer(undefined);
      refetch();
    }, 4000);
  }

  async function handleAnswerSelect(id: string) {
    const answer = await getAnswer(data.id);
    setAnswerSelected(id);
    setCorrectAnswer(answer.correct_options[0].id);
    handleRefetch();
  }

  return { data, isLoading, answerSelected, handleAnswerSelect, correctAnswer };
};

export default useMCQs;
