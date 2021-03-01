import { useState } from "react";
import Container from "../components/Container";
import Question from "../components/Question";
import { data } from "../utils/questions";

const Quiz = () => {
  const [i, setI] = useState(0);
  const handleAnswer = () => {
    if (i < data.length - 1) {
      setI(i + 1);
    }
  };
  return (
    <Container dark>
      <div className="flex-1 flex justify-center items-center w-5/6 lg:w-2/6">
        <div className="w-full rounded overflow-hidden shadow-lg">
          {/* {data.map((question) => {
            return (
              <Question
                key={question.title}
                title={question.title}
                subtitle={question.subtitle}
                choices={question.choices}
              />
            );
          })} */}
          <Question
            onComplete={handleAnswer}
            key={data[i].title}
            title={data[i].title}
            subtitle={data[i].subtitle}
            choices={data[i].choices}
          />
        </div>
      </div>
    </Container>
  );
};

export default Quiz;
