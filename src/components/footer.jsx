import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../App.css';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {setCurrentYear(new Date().getFullYear());}, []);

  return (
    <>
      <i><p className="walter-turncoat-regular">&copy; {currentYear} Abiwasabi. All Rights Reserved.</p></i>
      
    </>
  );
};

export default Footer;