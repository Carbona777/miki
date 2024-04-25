import "./App.css";
import Hero from "./Screens/Hero";

// Higher Order Function
import ScreenWrapper from "./HOC/ScreenWrapper";

function App() {
  return (
    <div className="App">
      <Hero />
    </div>
  );
}

export default ScreenWrapper(App);
