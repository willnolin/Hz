import React from 'react'
import gitIcon from '../images/github-icon.png';
import linkedIcon from '../images/linkedin-icon.png';
function Footer() {
  return (
    <footer className="footer-container">
      <a href="https://github.com/willnolin/Hz"><img style={{ width: '32px' }} src={gitIcon} alt="github" /></a>
      <p> @ Will Metivier</p>
      <a href="https://www.linkedin.com/in/will-metivier-1ab10541/"><img style={{width: '32px'}} src={linkedIcon} alt="linkedin" /></a>
    </footer>
  )
}

export default Footer;
