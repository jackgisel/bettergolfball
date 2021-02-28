const Button = ({ title }) => {
  return (
    <a className="font-bold text-white">
      <div className="bg-green-400 rounded-full py-3 px-8 shadow cursor-pointer">
        {title}
      </div>
    </a>
  );
};

export default Button;
