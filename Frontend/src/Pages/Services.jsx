import React from 'react'
import PillNav from "../Components/PillNav";
import logo from "../Assets/logo.png";


export default function Services() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" },
        ]}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#EDF2FB"
        pillColor="#ABC4FF"
        hoveredPillTextColor="#D7E3FC"
        pillTextColor="#060010"
      />
    </div>
  )
}
