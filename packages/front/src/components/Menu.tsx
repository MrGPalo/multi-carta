import React from 'react';
import Link from 'next/link';

const Menu = () => (
  <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/profile">My profile</Link>
    </li>
    <li>
      <Link href="/places">My places</Link>
    </li>
    <li>
      <Link href="/contact">Contact</Link>
    </li>
  </ul>
);

export default Menu;
