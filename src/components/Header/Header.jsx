import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";


const Header = () => {
    const links = ['Apple', 'Car', 'Tesla', 'Rocket'];

    return <header className={styles.header}>
        <nav>
            {links && links.map(link => <Link to={'news/' + link.toLowerCase()}>{link}</Link>)}
        </nav>
    </header>
}


export default Header;