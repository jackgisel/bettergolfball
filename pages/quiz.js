import Container from "../components/Container";
import Question from "../components/Question";

const data = [
  {
    title: "What do you usually shoot?",
    subtitle: "Let's be honest.",
    choices: [
      {
        choice: "70s",
        emoji: "🐅",
      },
      {
        choice: "80s",
        emoji: "🐐",
      },
      {
        choice: "90s",
        emoji: "🐎",
      },
      {
        choice: "100s",
        emoji: "🐂",
      },
      {
        choice: "110s",
        emoji: "🐪",
      },
    ],
  },
];

const Quiz = () => {
  return (
    <Container dark>
      <div className="flex-1 flex justify-center items-center">
        <div className="max-w-xl rounded overflow-hidden shadow-lg">
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
