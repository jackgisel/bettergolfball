const Button = ({ title }) => {
  return (
    <div className="bg-green-400 rounded-full py-3 px-8 shadow cursor-pointer">
      <a className="font-bold text-white">{title}</a>
    </div>
  );
};

export default Button;
