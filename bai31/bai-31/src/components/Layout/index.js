import Header from "../Header";
import { createContext } from "react";
export const MenuContext  = createContext();

function Layout() {
    const menus = [
        "Trang chu",
        "Tin tuc", 
        "Gioi thieu", 
        "Lien he"
    ];
    return (
        <>
            <MenuContext.Provider value={menus}>
                <Header/>
            </MenuContext.Provider>
            <div>Main</div>
            <div>Footer</div>
        </>
    );
}

export default Layout;