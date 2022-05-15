import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Andrew Ngo</h1>
      <img src={coverImage} alt="galaxy of stars"></img>
      {props.children}
    </header>
  );
}

export default Header;
