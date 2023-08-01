import Sidebar from "./components/Sidebar";
import './assets/vendor/css/rtl/core.css'
import './assets/vendor/css/rtl/theme-default.css'
import './assets/css/demo.css' 
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
    <BrowserRouter>
      <Sidebar>
        {/* <Dashboard/> */}
      </Sidebar>
    </BrowserRouter>
    </>
  );
}

export default App;
