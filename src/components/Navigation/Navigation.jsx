import "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <header>
      <NavLink>
        Rental<span>Car</span>
      </NavLink>
      <nav>
        <NavLink>Home</NavLink>
        <NavLink>Catalog</NavLink>
      </nav>
    </header>
  );
}
