import { Menu } from "antd";
import { HomeOutlined,LinkedinOutlined, YoutubeOutlined, TwitterOutlined, MailOutlined, PieChartOutlined, WindowsOutlined, WeiboOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function MenuSider() {
	const items = [
		{
			label: "Menu 1",
			icon: <MailOutlined />,
			key: "menu-1",
			children: [
				{
					label: <Link to={"/"}>DashBoard</Link>,
					icon: <TwitterOutlined />,
					key: "/"
				},
				{
					label: "Menu 1-2",
					icon: <WeiboOutlined />,
					key: "menu-1-2"
				},
				{
					label: "Menu 1-3",
					icon: <LinkedinOutlined />,
					key: "menu-1-3"
				},
			]
		},
		{
			label: "Menu 2",
			icon: <PieChartOutlined />,
			key: "menu-2",
			children: [
				{
					label: "Menu 2-1",
					icon: <TwitterOutlined />,
					key: "menu-2-1"
				},
				{
					label: "Menu 2-2",
					icon: <WeiboOutlined />,
					key: "menu-2-2"
				},
				{
					label: "Menu 2-3",
					icon: <LinkedinOutlined />,
					key: "menu-2-3"
				},
			]
		},
		{
			label: "Menu 3",
			icon: <WindowsOutlined />,
			key: "menu-3",
			children: [
				{
					label: "Menu 3-1",
					icon: <TwitterOutlined />,
					key: "menu-3-1"
				},
				{
					label: "Menu 3-2",
					icon: <WeiboOutlined />,
					key: "menu-3-2"
				},
				{
					label: "Menu 3-3",
					icon: <LinkedinOutlined />,
					key: "menu-3-3"
				},
			]
		},
		{
			label: "Menu 4",
			icon: <YoutubeOutlined />,
			key: "menu-4",
			children: [
				{
					label: "Menu 4-1",
					icon: <TwitterOutlined />,
					key: "menu-4-1"
				},
				{
					label: "Menu 4-2",
					icon: <WeiboOutlined />,
					key: "menu-4-2"
				},
				{
					label: "Menu 4-3",
					icon: <LinkedinOutlined />,
					key: "menu-4-3"
				},
			]
		},
		{
			label: <Link to={"/book-room"}>Book room</Link>,
			key: "/book-room",
			icon: <HomeOutlined />
		}
	]
	return (
		<>
			<Menu
				mode="inline"
				items={items}
				defaultSelectedKeys={['/']}
				defaultOpenKeys={['menu-1']}>
			</Menu>
		</>
	)
}

export default MenuSider;