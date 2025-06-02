import { useContext, useState } from "react";
import { initNumberContext } from "../context/initNumberContext";

export const MicroCounter = () => {
  const initNum = useContext(initNumberContext);
  const [count, setCount] = useState<number | null>(initNum);

  const handleClick = () => {
    setCount((prev) => prev === null? null: prev + 1);
  };
  return <button onClick={handleClick}>{count}</button>;
};

interface hui {
  name: string
}

type hui2 = {

}

