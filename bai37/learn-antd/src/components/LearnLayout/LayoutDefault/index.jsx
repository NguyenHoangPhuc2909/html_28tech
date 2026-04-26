import { Layout } from "antd";
import LearnGrid from "../../LearnGrid";
import "../LayoutDefault/LayoutDefault.css";
import { SearchOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import logo from "../../../images/logo.png";
import logoFold from "../../../images/logo-fold.png";
import { useState } from "react";
const { Footer, Sider, Content } = Layout;
function LayoutDefault(){
    const [collapsed, setCollapsed] = useState(false);
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
                    <div className="header__nav-right">Noi dung</div>
                </div>
            </header>
            <Layout>
                <Sider className="sider" collapsed={collapsed} theme="light">sider</Sider>
                <Content className="content"><LearnGrid/></Content>
            </Layout>
            <Footer className="footer">footer</Footer>
        </Layout>
        </>
    )
};

export default LayoutDefault;