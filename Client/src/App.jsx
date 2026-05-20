import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddCaterer from "./pages/AddCaterer";
import Navbar from "./components/Navbar";

const NotFound = () => (
  <main className="mx-auto max-w-4xl px-6 py-16">
    <h1 className="text-3xl font-bold">404</h1>
    <p className="mt-2 text-slate-600">Page not found.</p>
  </main>
);

const App = () => (
  <div className="min-h-screen bg-slate-100 text-slate-900">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/AddCaterer" element={<AddCaterer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
