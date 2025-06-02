import { useContext } from "react";
import { RedContext } from "../context/RedContext";

export const useIncDec = () => {
  return useContext(RedContext);
};
