import { Landing } from "./Landing"
import { Level2 } from "./Level2"
import { Level3 } from "./Level3"

import "swiper/css";

function App() {
  return (
    <div className="snap-y h-screen snap-mandatory no-scrollbar overflow-y-scroll">
      <Landing />
      <Level2/>
      <Level3/>
    </div>
  )
}

export default App
