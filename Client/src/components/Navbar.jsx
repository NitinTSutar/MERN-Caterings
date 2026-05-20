import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">MERN Caterings</h1>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/AddCaterer">Add Caterer</Link>
      </div>
    </nav>
  );
}

export default Navbar;
