const Container = ({ children }) => {
  return (
    <div className="bg-white h-screen w-screen flex  flex-col items-center">
      {children}
    </div>
  );
};

export default Container;
