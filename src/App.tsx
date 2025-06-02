import { initNumberContext } from "./context/initNumberContext";
import "./App.css";
import { MicroCounter } from "./components/MicroCounter";
import { IncDec, TestRedCon } from "./components/TestRedCon";
import { TestBox } from "./components/TestProsh";
import { Test } from "./components/Test";

function App() {
  return (
    <>
      <initNumberContext.Provider value={100}>
        <MicroCounter />
      </initNumberContext.Provider>
      <IncDec>
        <TestRedCon />
      </IncDec>
      <TestBox>
        <Test />
      </TestBox>
    </>
  );
}

export default App;
