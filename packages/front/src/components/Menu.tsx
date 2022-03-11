import React from 'react';
import Link from 'next/link';

const Menu = () => (
  <ul className="nav">
    <li className="nav-item nav-link">
      <Link href="/">Home</Link>
    </li>
    <li className="nav-item nav-link">
      <Link href="/profile">My profile</Link>
    </li>
    <li className="nav-item nav-link">
      <Link href="/places">My places</Link>
    </li>
    <li className="nav-item nav-link">
      <Link href="/contact">Contact</Link>
    </li>
  </ul>
);

export default Menu;
