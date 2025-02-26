import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/navbar";
import { Dashboard } from "./pages/dashboard";
import { ThemeProvider } from "./providers/theme.provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;