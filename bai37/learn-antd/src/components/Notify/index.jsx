import { Button, Dropdown } from "antd";
import { BellOutlined } from "@ant-design/icons";
import "./Notify.css";

function Notify() {
	const items = [
		{
			label: (
				<div className="notify__item">
					<div className="notify__item-icon"><BellOutlined/></div>
					<div className="notify__item-content">
						<div className="notify__item-title">1st menu item</div>
						<div className="notify__item-time">8 minutes ago</div>
					</div>
				</div>
			),
			key: '1',
		},
		{
			label: (
				<div className="notify__item">
					<div className="notify__item-icon"><BellOutlined/></div>
					<div className="notify__item-content">
						<div className="notify__item-title">2nd menu item</div>
						<div className="notify__item-time">10 minutes ago</div>
					</div>
				</div>
			),
			key: '2',
		},
		{
			label: (
				<div className="notify__item">
					<div className="notify__item-icon"><BellOutlined/></div>
					<div className="notify__item-content">
						<div className="notify__item-title">3rd menu item</div>
						<div className="notify__item-time">8 minutes ago</div>
					</div>
				</div>
			),
			key: '3',
		},
		{
			label: (
				<div className="notify__item">
					<div className="notify__item-icon"><BellOutlined/></div>
					<div className="notify__item-content">
						<div className="notify__item-title">4th menu item</div>
						<div className="notify__item-time">8 minutes ago</div>
					</div>
				</div>
			),
			key: '4',
		},
		{
			label: (
				<div className="notify__item">
					<div className="notify__item-icon"><BellOutlined/></div>
					<div className="notify__item-content">
						<div className="notify__item-title">5th menu item</div>
						<div className="notify__item-time">8 minutes ago</div>
					</div>
				</div>
			),
			key: '5',
		},
		{
			label: (
				<div className="notify__item">
					<div className="notify__item-icon"><BellOutlined/></div>
					<div className="notify__item-content">
						<div className="notify__item-title">6th menu item</div>
						<div className="notify__item-time">8 minutes ago</div>
					</div>
				</div>
			),
			key: '6',
		},

		{
			label: (
				<div className="notify__item">
					<div className="notify__item-icon"><BellOutlined/></div>
					<div className="notify__item-content">
						<div className="notify__item-title">7th menu item</div>
						<div className="notify__item-time">8 minutes ago</div>
					</div>
				</div>
			),
			key: '7',
		},
		{
			label: (
				<div className="notify__item">
					<div className="notify__item-icon"><BellOutlined/></div>
					<div className="notify__item-content">
						<div className="notify__item-title">8th menu item</div>
						<div className="notify__item-time">8 minutes ago</div>
					</div>
				</div>
			),
			key: '8',
		},
		{
			label: (
				<div className="notify__item">
					<div className="notify__item-icon"><BellOutlined/></div>
					<div className="notify__item-content">
						<div className="notify__item-title">9th menu item</div>
						<div className="notify__item-time">8 minutes ago</div>
					</div>
				</div>
			),
			key: '9',
		},
		{
			label: (
				<div className="notify__item">
					<div className="notify__item-icon"><BellOutlined/></div>
					<div className="notify__item-content">
						<div className="notify__item-title">10th menu item</div>
						<div className="notify__item-time">8 minutes ago</div>
					</div>
				</div>
			),
			key: '10',
		},
	];
	return (
		<>
			<Dropdown menu={{ items }} trigger={['click']}
				popupRender={(menu) => (
					<>
						<div className="notify__dropdown">
							<div className="notify__header">
								<div className="notify__header-title">
									<BellOutlined /> Notification
								</div>
								<Button type="link">View All</Button>
							</div>
							<div className="notify__body">{menu}</div>
						</div>
					</>
				)}
			>
				<Button type="text" className="btn">
					<BellOutlined />
				</Button>
			</Dropdown>
		</>
	)
}

export default Notify;