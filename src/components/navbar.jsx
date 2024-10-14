// lives in components folder, this will be used and accessible thorughout the site
// uses .jsx because it uses react components, .js files will solely use javascript

import React from 'react';
import { Link } from 'react-router-dom'; // import statement to get links
import { ShoppingCart } from 'phosphor-react'; // import for icons
import "./navbar.css"; // import navbar graphic

//create navigation bar component
export const Navbar = () => {
  return (
  <div className="navbar"> {/* create a navbar class */}
    <div className="links"> {/* this is where all the links will exist, links will navigate to each page */}
      <Link to = "/"> Shop </Link> {/* link to main shopping page */}
      <Link to = "/cart">
        <ShoppingCart size={32}/> {/* insert icon for cart and set size */}
      </Link>
    </div>
  </div>
  );
};