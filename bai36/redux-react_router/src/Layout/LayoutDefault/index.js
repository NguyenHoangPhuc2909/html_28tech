import { NavLink, Outlet } from "react-router";
import "../LayoutDefault/LayoutDefault.scss";

function LayoutDefault() {
    return (
        <>
            <div className="layout--default">
                <header className="layout--default__header">
                    <div className="layout-default__logo">
                        <NavLink to="/">Logo</NavLink>
                    </div>
                    <div className="cart">
                        <ul>
                            <li>
                                <NavLink to="/cart">Cart</NavLink>
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
};

export default LayoutDefault;