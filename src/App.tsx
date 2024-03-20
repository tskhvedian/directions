import MapProvider from "./components/GoogleMaps/MapProvider";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="w-full h-screen px-2 py-2 bg-gray-100">
      <MapProvider />
    </div>
  );
}

export default App;
