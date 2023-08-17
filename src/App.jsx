import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ActiveUsers from "./pages/ActiveUsers/ActiveUsers";
import Customers from "./pages/Customers/Customers";
import Analytics from "./pages/Analytics/Analytics";
import Questions from "./pages/Questions/Questions";
import Login from './pages/login/Login';
const NotFound = () => {
  return (
    <div className="text-center">
      <h1>404 - Not Found</h1>
      <p>The page you're looking for does not exist.</p>
    </div>
  );
}
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Login />} />
            <Route path="/dashboard" element={<Sidebar><Dashboard /></Sidebar>} />
            <Route path="/users" element={<Sidebar><ActiveUsers /></Sidebar>} />
            <Route path="/customers" element={<Sidebar><Customers /></Sidebar>} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/questions" element={<Sidebar><Questions /></Sidebar>} />  
            <Route path="/*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
