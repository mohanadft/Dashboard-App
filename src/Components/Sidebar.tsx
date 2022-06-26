import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { links } from '../Data/dummy'
import { useGlobalContext } from './../Contexts/ContextProvider'

const Sidebar: React.FC = () => {
	const { setActiveMenu, activeMenu } = useGlobalContext()

	return (
		<div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 pt-3">
			<Link
				to="/"
				className="flex gap-2 items-center pl-2 w-fit text-md font-black dark:text-white text-slate-900"
				onClick={() => setActiveMenu(false)}
			>
				<SiShopware />
				<span>Shoppy</span>
			</Link>
			<div className="ml-2 mt-7 flex flex-col gap-3">
				{links.map(({ links, title }, index) => {
					return (
						<div key={index}>
							<h3 className="text-gray-400 mb-2 text-sm uppercase">{title}</h3>
							<ul className="flex flex-col gap-2">
								{links.map(({ name, icon }, index) => {
									return (
										<li key={index}>
											<NavLink
												to={`/${name}`}
												onClick={() => setActiveMenu(false)}
												className={({ isActive }) => {
													return isActive
														? `flex gap-4 items-center text-xs pl-4 py-3 rounded-md w-60 bg-amber-300 capitalize`
														: `flex gap-4 items-center text-xs pl-4 py-3 rounded-md w-60 hover:bg-gray-100 capitalize`
												}}
											>
												{icon}
												{name}
											</NavLink>
										</li>
									)
								})}
							</ul>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Sidebar
