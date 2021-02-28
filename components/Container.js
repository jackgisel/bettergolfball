const Container = ({ dark, children }) => {
  return (
    <div className="bg-gray-100 h-screen w-screen flex  flex-col items-center">
      {children}
    </div>
  );
};

export default Container;
