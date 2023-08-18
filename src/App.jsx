import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ActiveUsers from "./pages/ActiveUsers/ActiveUsers";
import Customers from "./pages/Customers/Customers";
import Analytics from "./pages/Analytics/Analytics";
import Questions from "./pages/Questions/Questions";
import Login from './pages/login/Login';
import { SnackbarProvider } from "notistack";
const NotFound = () => {
  return (
    <div className="text-center">
      <h1>404 - Not Found</h1>
      <p>The page you're looking for does not exist.</p>
    </div>
  );
}

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  
  if (!token) {
    // Redirect to the login page if no token is found
    window.location.href = "/";
    return null; // Return null instead of just returning to prevent rendering children
  }
  
  // Decode the JWT token to get its expiration date
  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    // Invalid JWT token format
    localStorage.removeItem("token");
    window.location.href = "/";
    return null;
  }
  
  const encodedPayload = tokenParts[1];
  const decodedPayload = atob(encodedPayload);
  const payload = JSON.parse(decodedPayload);
  
  const currentTimestamp = Date.now() / 1000; // Convert to seconds
  
  if (payload.exp && payload.exp < currentTimestamp) {
    // Token has expired, remove it from localStorage
    localStorage.removeItem("token");
    window.location.href = "/";
    return null;
  }
  
  return children;
}

const  LoginRoute = ({ children })=>{
  const token = localStorage.getItem("token");
  if(token){
    window.location.href = "/dashboard";
    return;
  }
  return children;
}
function App() {
  return (
    <>
    <SnackbarProvider>
      <BrowserRouter>
          <Routes>
            <Route index path="/" element={<LoginRoute><Login /></LoginRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Sidebar><Dashboard /></Sidebar></PrivateRoute>} />
            <Route path="/users" element={<PrivateRoute><Sidebar><ActiveUsers /></Sidebar></PrivateRoute>} />
            <Route path="/customers" element={<PrivateRoute><Sidebar><Customers /></Sidebar></PrivateRoute>} />
            <Route path="/analytics" element={<PrivateRoute><Sidebar><Analytics /></Sidebar></PrivateRoute>} />
            <Route path="/questions" element={<PrivateRoute><Sidebar><Questions /></Sidebar></PrivateRoute>} />  
            <Route path="/*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
      </SnackbarProvider> 
    </>
  );
}

export default App;
