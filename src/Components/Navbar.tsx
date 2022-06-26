import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useGlobalContext } from '../Contexts/ContextProvider'
const avatar = require('../Data/avatar.jpg')

interface NavButtonProps {
	title: string
	customFunc: () => void
	icon: React.ReactElement
	color: string
}

const NavButton: React.FC<NavButtonProps> = ({
	title,
	customFunc,
	icon,
	color
}) => {
	return (
		<TooltipComponent content={title} position="BottomCenter">
			<button
				onClick={customFunc}
				style={{ color }}
				className="relative text-lg rounded-full p-3 hover:bg-light-gray"
			>
				<span>{icon}</span>
			</button>
		</TooltipComponent>
	)
}

const Navbar: React.FC = () => {
	const { activeMenu, setActiveMenu } = useGlobalContext()

	return (
		<div className="flex justify-between items-center p-2 md:mx-2 relative">
			<NavButton
				title="Menu"
				customFunc={() => setActiveMenu(!activeMenu)}
				color="blue"
				icon={<AiOutlineMenu />}
			/>
			<div className="flex items-center">
				<NavButton
					title="Cart"
					customFunc={() => {}}
					color="blue"
					icon={<FiShoppingCart />}
				/>
				<NavButton
					title="Chat"
					customFunc={() => {}}
					color="blue"
					icon={<BsChatLeft />}
				/>
				<NavButton
					title="Notifications"
					customFunc={() => {}}
					color="blue"
					icon={<RiNotification3Line />}
				/>
				<TooltipComponent content="Profile" position="BottomCenter">
					<button className="flex items-center gap-3 hover:bg-light-gray p-1 rounded-md">
						<img src={avatar} alt="" className="w-8 rounded-full" />
						<div className="text-gray-400 flex items-center gap-1 ">
							<p className="text-xs">
								Hi, <span className="font-bold">Mohanad</span>
							</p>
							<MdKeyboardArrowDown />
						</div>
					</button>
				</TooltipComponent>
			</div>
		</div>
	)
}

export default Navbar
