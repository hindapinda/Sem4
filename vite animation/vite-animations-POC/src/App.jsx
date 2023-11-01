import "./App.css";
import hindanimation from "./assets/animation_lnio6d3x.json";
import Lottie from "lottie-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="text">hind om 11:45</p>
        <div className="animation-container">
          <Lottie
            loop={true}
            animationData={hindanimation}
            style={{ width: "60%", height: "auto" }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
