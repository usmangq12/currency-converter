import { Outlet } from "react-router-dom";
import Routes from "./Routes";
import { Header } from "./containers";

function App() {
  return (
    <div>
      <Header />
      <Routes />
      <Outlet />
    </div>
  );
}

export default App;
