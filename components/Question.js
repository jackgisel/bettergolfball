import { useState } from "react";
import Button from "../components/Button";

const Choice = ({ choice, emoji }) => {
  return (
    <div className="flex flex-row items-center">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2 mb-2">
        {emoji}
      </span>
      <div className="text-xl mb-2 text-semibold">{choice}</div>
    </div>
  );
};

const Question = ({ title, subtitle, choices }) => {
  const [selected, setSelected] = useState();
  return (
    <>
      <div className="px-6 pt-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-lg">{subtitle}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {choices.map((c, i) => (
          <a key={i} onClick={() => setSelected(i)}>
            <div
              className={
                selected === i
                  ? "p-2 rounded-lg mb-4 items-center flex bg-gray-200 hover:bg-gray-200 cursor-pointer"
                  : "p-2 rounded-lg mb-4 items-center flex hover:bg-gray-200 cursor-pointer"
              }
            >
              <Choice index={i} choice={c.choice} emoji={c.emoji} />
            </div>
          </a>
        ))}
        {typeof selected === "number" && (
          <div className="text-center pb-2">
            <Button title="Next" />
          </div>
        )}
      </div>
    </>
  );
};

export default Question;
