import React from 'react';
import { Link } from 'react-router-dom';
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
};

// In Navbar, we can assign a style from an object by using curly braces
function Nav() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Home</div>
      <ul className="nav">
          <li>
            <Link to="/About">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/Examples">
              My Examples
            </Link>
          </li>
          <li>
            <Link to="/Contact Me">
                Contact Me
            </Link>
          </li>
        </ul>
    </div>
  );
}

export default Nav;