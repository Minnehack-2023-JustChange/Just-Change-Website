import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

// This function creates the header on the website and links the different sections of the website
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Just Change</div>
      <nav>
        <ul>
          <li >
            <Link  to="/">
              <div className={classes.tabHeader}>Home</div>
            </Link>
          </li>
          <li >
            <Link to="/account"></Link>
              <div className={classes.tabHeader}>Account</div>
            
          </li>
          {/* <li className={classes.title}>
            <Link className={classes.menus} to="/">
              About Me
            </Link>
          </li>
          <li className={classes.title}>
            <Link className={classes.menus} to="/projects">
              Projects
            </Link>
          </li>
          <li className={classes.title}>
            <Link className={classes.menus} to="/contact-me">
              Contact Me
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
