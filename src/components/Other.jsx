import { useEffect } from "react";

const Other = () => {
    
  useEffect(() => {
    console.log("Hello World!");
  }, []);

  return (
    <div className="flex items-center justify-center mt-[5rem] ">
      <h1 className="text-4xl font-bold text-center">check console</h1>
    </div>
  );
};

export default Other;
