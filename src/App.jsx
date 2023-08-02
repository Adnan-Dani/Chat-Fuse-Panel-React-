import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ActiveUsers from "./pages/ActiveUsers/ActiveUsers";
import Customers from "./pages/Customers/Customers";
import Analytics from "./pages/Analytics/Analytics";
import Questions from "./pages/Questions/Questions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route index path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<ActiveUsers />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/questions" element={<Questions />} /> 
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
