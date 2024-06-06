import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../common/components/constants";

export default function Products() {
  const data = [
    <Link to={ROUTES.user.appointment}>Appointment & Visitor Management</Link>,
    <Link to={ROUTES.user.lobby}>Lobby Management</Link>,
    <Link to={ROUTES.user.payroll}>Payroll Management</Link>,
  ];

  const [isOpen, setOpen] = useState(false);
  const [items] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  };
  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem
          ? items.find((item) => item.id === selectedItem).label
          : "Solutions"}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {items.map((item) => (
          <div
            className="dropdown-item"
            onClick={(e) => handleItemClick(e.target.id)}
            id={item.id}
          >
            <span
              className={`dropdown-item-dot ${
                item.id === selectedItem && "selected"
              }`}
            >
              •{" "}
            </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
