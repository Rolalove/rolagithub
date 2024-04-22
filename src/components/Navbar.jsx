import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex  px-10 py-6 justify-between  text-[#002147] font-defaultfont text-xl  font-medium  max-sm:flex-col  max-sm:px-2 max-sm:py-4">
        <h3 className="italic">RolasGit</h3>

        <div className="flex gap-10 max-sm:justify-between max-sm:gap-1">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/errorboundary">Errorboundary</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
