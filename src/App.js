import "./App.css";
import Home from "./components/pages/Home";
// import Test from "./components/pages/Test";
import ComponentWithGeolocation from "./components/ComponentwithGeoLocation";
function App() {
  return (
    <div className="App">
      <Home />
      {/* <Test /> */}
      <ComponentWithGeolocation />
    </div>
  );
}

export default App;
