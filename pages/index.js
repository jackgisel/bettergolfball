import Link from "next/link";
import Button from "../components/Button";
import Container from "../components/Container";

const Home = () => {
  return (
    <Container>
      <div className="flex-1 flex justify-center  flex-col w-2/5 items-center">
        <img
          className="h-36"
          src="https://cdn.discordapp.com/attachments/766719205654921226/814545979650867290/Black_and_Green_Framed_Fitness_Logo.png"
        />
        <h2 className="text-4xl py-4 font-bold">
          Welcome to Better Golf Balls
        </h2>
        <p className="text-center pb-6">
          Ever wanted to find your perfect golf ball, but don't know where to
          start? Our simple 1 minute quiz will guide you to the right spot
        </p>
        <Link href="/quiz">
          <a>
            <Button title="Help me find my balls" />
          </a>
        </Link>
      </div>
      <div className="flex justify-center pb-3">
        <h3>BetterGolfBalls &copy; 2021</h3>
      </div>
    </Container>
  );
};

export default Home;
