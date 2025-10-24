import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import ResetPassword from "./pages/ResetPassword";



function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>
        
 
      </Routes>
    </Router>
  );
}

export default App;
