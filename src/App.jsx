import "./App.css";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";

function App() {
  const URL = "ws://localhost:5000";

  useWebSocket(URL, {
    onOpen: () => {
      console.log("connection is established with server");
    },
  });

  return <div className="App">Hello Darkness my old friend</div>;
}

export default App;
