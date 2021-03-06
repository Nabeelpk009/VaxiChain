import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from './App.module.css';

function MfrNavbar(props) {
  return (
    <div className="navigation" style={{backgroundColor: props.color}}>
      <nav class="py-3 navbar navbar-expand-sm">
        <div class="container">
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
            <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/" className={styles.navbarlinks}>
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Vaccine" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Vaccine" className={styles.navbarlinks}>
                RegisterVaccine
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Rules" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Rules" className={styles.navbarlinks}>
                RegisterRules
                </Link>
              </li>              
            </ul>
          </div>
        </div>
        
      </nav>
    </div>
  );
}

export default withRouter(MfrNavbar);