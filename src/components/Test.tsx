import { useTestBox } from "../hooks/useTestBox";

export const Test = () => {
  const { state, dispatch } = useTestBox();
  const handleClick = () => {
    dispatch({ type: "decrement" });
  };
  return <button onClick={handleClick}>{state}</button>;
};
