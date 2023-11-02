import { Landing } from "./Landing";
import { Level3 } from "./Level3";
import { useSearchParams } from "react-router-dom";
import { Level2 } from "./Level2";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentLevel = searchParams.get("level");
  return (
    <div className="snap-y h-screen snap-mandatory no-scrollbar overflow-y-scroll">
      <Landing />
      {currentLevel === "2" && <Level2 />} 
      {currentLevel === "3" && <Level3 />}

    </div>
  );
}

export default App;
