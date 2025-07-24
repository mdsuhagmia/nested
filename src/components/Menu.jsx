// Menu.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../components/Container"; // path adjust করো

const Menu = () => {
  return (
    <nav className="bg-blue-600 py-2 shadow-md">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold">Suhag</h1>
          <ul className="flex gap-6 text-lg font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 border-b-2 border-yellow-300"
                    : "text-white hover:text-yellow-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 border-b-2 border-yellow-300"
                    : "text-white hover:text-yellow-200"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 border-b-2 border-yellow-300"
                    : "text-white hover:text-yellow-200"
                }
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 border-b-2 border-yellow-300"
                    : "text-white hover:text-yellow-200"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Menu;