import { Link } from "react-router-dom";

function NavBar() {
  return (
    
    <nav className="access-navbar">
      
    <nav className="access-navbar">
      <ul className="access-navbar-right">
        <li className="access-navbar-hostels">
          <Link to="/counterbutton">Counter Button</Link>
        </li>
        <li className="access-navbar-hostels">
          <Link to="/greeting">Greeting</Link>
        </li>
        <li className="user-profile">
          <Link to="/fruitlist">Fruit List</Link>
        </li>
        <li className="user-profile">
          <Link to="/forminput">Form Input</Link>
        </li>
        <li className="user-profile">
          <Link to="/headerdisplay">Header Display</Link>
        </li>
        <li className="user-profile">
          <Link to="/tasks">Tasks</Link>
        </li>
      </ul>
    </nav>
    
    </nav>
  );
}
export default NavBar;