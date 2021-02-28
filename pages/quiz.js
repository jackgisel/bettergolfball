import Container from "../components/Container";
import Question from "../components/Question";
import { data } from "../utils/questions";

const Quiz = () => {
  return (
    <Container dark>
      <div className="flex-1 flex justify-center items-center w-5/6 lg:w-2/6">
        <div className="w-full rounded overflow-hidden shadow-lg">
          {data.map((question) => {
            return (
              <Question
                key={question.title}
                title={question.title}
                subtitle={question.subtitle}
                choices={question.choices}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Quiz;
