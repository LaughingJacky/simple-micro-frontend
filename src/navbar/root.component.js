/**
 * @file index.js
 * @author Laughing Jacky
 * @email 4264332(#qq.com)
 * @create date 2020-03-27 22:51:46
 * @modify date 2020-03-27 22:51:46
 */
import React from 'react';

const nav = {
    padding: 0,
    marginTop: '50px',
    position: 'absolute',
    top: 0,
    height: '25px',
    width: '100%',
    display: 'flex'
};

const navItem = {
    textAlign: 'center',
    flex: 1,
    listStyleType: 'none',
    padding: '10px',
    cursor: 'pointer'
};

const navigateTo = url => window.history.pushState(null, null, url);

const NavLink = ({to, children}) => (
    <li style={navItem}>
        <a onClick={() => navigateTo(to)}>
            {children}
        </a>
    </li>
);
export default () => (
    <ul style={nav}>
        <NavLink to="/react">React</NavLink>
        <NavLink to="/vue">Vue</NavLink>
        <NavLink to="/svelte">Svelte</NavLink>
        <NavLink to="/inferno">Inferno</NavLink>
        <NavLink to="/riot">Riot</NavLink>
    </ul>
);
