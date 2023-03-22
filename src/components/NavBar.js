import React from "react";



function NavBar() {
  const links = ["home", "about", "projects"];
  
  const navbar = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));
  return <nav>{navbar}</nav>;
}

export default NavBar;