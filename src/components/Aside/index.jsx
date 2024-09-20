import React from "react";
import styles from "./Aside.module.css";
import { NavLink } from "react-router-dom";

export default function Aside({ title, icon, links = [], className, activeClassName }) {
  return (
    <aside className={`${className} ${styles.aside}`}>
      {(title || icon) && (
        <header>
          {icon}
          <h1>{title}</h1>
        </header>
      )}
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              end
              className={({ isActive }) => (isActive ? `${styles.active} ${activeClassName}` : "")}
            >
              {link.icon && <span>{link.icon}</span>}
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
