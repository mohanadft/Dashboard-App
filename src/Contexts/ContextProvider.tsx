import React, { createContext, useState, useContext } from 'react'

export interface AppContextInterface {
	activeMenu: boolean
	setActiveMenu: (activeMenu: boolean) => void
}

interface ContextProviderProps {
	children: React.ReactElement
}

const initialState: AppContextInterface = {
	activeMenu: true,
	setActiveMenu: () => {}
}

const StateContext = createContext<AppContextInterface>(initialState)

export const useGlobalContext = () => useContext(StateContext)

export const ContextProvider: React.FC<ContextProviderProps> = ({
	children
}) => {
	const [activeMenu, setActiveMenu] = useState(true)
	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu
			}}
		>
			{children}
		</StateContext.Provider>
	)
}
