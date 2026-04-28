import { Layout } from "antd";
import Notify from "../../Notify";
import "../LayoutDefault/LayoutDefault.css";
import { SearchOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import logo from "../../../images/logo.png";
import logoFold from "../../../images/logo-fold.png";
import { useState } from "react";
import MenuSider from "../../MenuSider";
import { Outlet } from "react-router-dom";
const { Sider, Content } = Layout;
function LayoutDefault(){
    const [collapsed, setCollapsed] = useState(false);
    const currentYear = new Date().getFullYear();
    return (
        <>
        <Layout className="layout-default">
            <header className="header">
                <div className={"header__logo " + (collapsed && "header__logo--collapsed")}>
                    <img src={collapsed ? logoFold : logo} alt="Logo"/>
                </div>
                <div className="header__nav">
                    <div className="header__nav-left">
                        <div className="header__collapse" onClick={() => setCollapsed(!collapsed)}>
                            {(collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />)}
                        </div>
                        <div className="header__search">
                            <SearchOutlined />
                        </div>
                    </div>
                    <div className="header__nav-right">
                        <Notify/>
                    </div>
                </div>
            </header>
            <Layout>
                <Sider className="sider" collapsed={collapsed} theme="light"><MenuSider/></Sider>
                <Content className="content"><Outlet/></Content>
            </Layout>
            <footer className="footer"><p>Ant Design ©{currentYear} Created by Ant UED</p></footer>
        </Layout>
        </>
    )
};

export default LayoutDefault;