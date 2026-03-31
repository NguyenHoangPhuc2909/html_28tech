import "../LayoutDefault/LayoutDefault.scss";
import { NavLink, Outlet } from "react-router";
function LayoutDefault() {
    const navLinkActive = (e) => {
        // console.log(e);
        return e.isActive ? "menu__link menu__link--active" : "menu__link";
    }
    return (
        <>
            <div className="layout--default">
                <header className="layout--default__header">
                    <div className="layout--default__logo">Logo</div>
                    <div className="menu">
                        <ul>
                            <li>
                                <NavLink className={navLinkActive} to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={navLinkActive} to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink className={navLinkActive} to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink className={navLinkActive} to="/blog">Blog</NavLink>
                                <ul className="menu__sub">
                                    <li><NavLink className={navLinkActive} to="/blog/news">Blog News</NavLink></li>
                                    <li><NavLink className={navLinkActive} to="/blog/related">Blog Related</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </header>
                <main className="layout--default__main">
                    <Outlet />
                </main>
                <footer className="layout--default__footer">Copyright @ 2026 by Nguyen Hoang Phuc</footer>
            </div>
        </>
    );
}

export default LayoutDefault;