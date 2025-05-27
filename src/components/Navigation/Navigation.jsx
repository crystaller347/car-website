import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };

  return (
    <header className={css.header}>
      <NavLink className={css.logo}>
        Rental<span className={css.logoSpan}>Car</span>
      </NavLink>
      <nav className={css.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
