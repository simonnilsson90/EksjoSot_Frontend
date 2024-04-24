import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const StyledNavLink = ({ to, children, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Event handlers for mouse enter and leave
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <NavLink
      to={to}  // Ensure `to` is passed to define the link's destination
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={({ isActive }) => ({
        textDecoration: 'none',
        color: isHovered || isActive ? '#a96120' : 'inherit',  // Change color on hover and active state
        cursor: 'pointer',  // Cursor style can indicate it's clickable
      })}
      {...props}  // Pass any additional props to support extensibility
    >
      {children}  
    </NavLink>
  );
};

export default StyledNavLink;
