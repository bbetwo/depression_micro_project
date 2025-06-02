import { useContext } from "react";
import { TestCont } from "../context/TestCont";

export const useTestBox = () => {
  const context = useContext(TestCont);
  if (!context) {
    throw new Error("netu");
  }

  return context;
};
