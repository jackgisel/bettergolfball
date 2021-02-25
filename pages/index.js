import Button from "../components/Button";

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen w-screen flex  flex-col">
      <div className="flex-1 flex justify-center items-center flex-col">
        <img
          className="h-15 rounded"
          src="https://cdn.discordapp.com/attachments/766719205654921226/814366655018303498/logo_size_invert.jpg"
        />
        <h2 className="text-2xl py-4 font-bold">
          Welcome to Better Golf Balls
        </h2>
        <Button title="Help me find my balls" />
      </div>
      <div className="flex justify-center">
        <h3>BetterGolfBalls &copy; 2021</h3>
      </div>
    </div>
  );
};

export default Home;
