import { NavLink } from "react-router-dom";
import Sidebardata from "./sidebardata";

export function Sidebar() {
  return (
    <div className="route">
      <div className="sidebarmain">
        <div className="iconcon">
          <img src="/src/assets/image 5 1 1 (1).svg" alt="" className="iconsd" />
          <h1 className="invit">Invitation Icon</h1>
        </div>
        <div className="conttainer">
          {Sidebardata.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              activeClassName="active"
              style={{ display: "flex", textDecoration: "none" }}
            >
              <img src={item.icon} alt="" className="iconsid" style={{ color: "#C874E8" }} />
              <p className="dash">{item.title}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
