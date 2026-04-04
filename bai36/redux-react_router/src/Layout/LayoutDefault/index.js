import { Outlet } from "react-router";
import "./LayoutDefault.scss";
import CartMini from "../../components/CartMini";
import Logo from "../../components/Logo";

function LayoutDefault() {
    return (
        <>
            <div className="layout--default">
                <header className="layout--default__header">
                    <div className="layout--default__logo">
                        <Logo />
                    </div>
                    <div className="cart">
                        <ul>
                            <li>
                                <CartMini />
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