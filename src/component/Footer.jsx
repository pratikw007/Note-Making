import React from "react";
const curryear = new Date().getFullYear;
function Footer() {
  return (
    <footer>
      <p>Copyright @ 2022{curryear}</p>
    </footer>
  );
}

export default Footer;
