import "../views/Nav.scss"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink activeClassName="isactive" to="/" exact>Home</NavLink>
            <NavLink activeClassName="isactive" to="/timer">Timer App</NavLink>
            <NavLink activeClassName="isactive" to="/todo">Todo App</NavLink>
            <NavLink activeClassName="isactive" to="/blog">Blogs App</NavLink>
            <NavLink activeClassName="isactive" to="/youtube search">Youtube Search</NavLink>
        </div>
    );
}

export default Nav;