import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationsProvider from "./context/DestinationsContext/DestinationsProvider";
import CreateDestination from "./pages/CreateDestination";

function App() {
  return (
    <DestinationsProvider>
      <Destinations />
      {/*   <CreateDestination /> */}
    </DestinationsProvider>
  );
}

export default App;
