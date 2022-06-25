import React, { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Sidebar } from './Components'
import {
	Area,
	Bar,
	Calendar,
	ColorMapping,
	ColorPicker,
	Customers,
	Ecommerce,
	Editor,
	Employees,
	Financial,
	Kanban,
	Line,
	Orders,
	Pyramid,
	Stacked
} from './Pages'

import './App.css'
import { useGlobalContext } from './Contexts/ContextProvider'

const App: React.FC = () => {
	const { activeMenu, setActiveMenu } = useGlobalContext()

	return (
		<div>
			<HashRouter>
				<div className="flex relative dark:bg-main-dark-bg">
					<div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
						<TooltipComponent content="Settings" position="TopCenter">
							<button
								type="button"
								className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
								onClick={() => setActiveMenu(!activeMenu)}
							>
								<FiSettings className="p-1 bg-amber-400 rounded-full" />
							</button>
						</TooltipComponent>
					</div>
					{activeMenu && (
						<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
							<Sidebar />
						</div>
					)}
					<div
						className={`ease-linear duration-150 dark:bg-main-bg bg-main bg min-h-screen w-full ${
							activeMenu ? 'md:ml-72' : 'flex-2'
						}`}
					>
						<div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
							<Navbar />
						</div>
					</div>
					<div>
						<Routes>
							{/* Dashboard */}
							<Route path="/" element="A" />
							<Route path="/ecommerce" element={<Ecommerce />} />

							{/* Pages */}
							<Route path="/orders" element={<Orders />} />
							<Route path="/employees" element={<Employees />} />
							<Route path="/customers" element={<Customers />} />

							{/* Apps */}
							<Route path="/kanban" element={<Kanban />} />
							<Route path="/editor" element={<Editor />} />
							<Route path="/calendar" element={<Calendar />} />
							<Route path="/color-picker" element={<ColorPicker />} />

							{/* Charts */}
							<Route path="/line" element={<Line />} />
							<Route path="/area" element={<Area />} />
							<Route path="/bar" element={<Bar />} />
							<Route path="/pie" element="Pie" />
							<Route path="/financial" element={<Financial />} />
							<Route path="/color-mapping" element={<ColorMapping />} />
							<Route path="/pyramid" element={<Pyramid />} />
							<Route path="/stacked" element={<Stacked />} />

							{/* Not Found */}
							<Route path="*" element="Error 404, Not Found" />
						</Routes>
					</div>
				</div>
			</HashRouter>
		</div>
	)
}

export default App
