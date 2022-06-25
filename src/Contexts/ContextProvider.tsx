import React, { createContext, useState, useContext } from 'react'

export interface AppContextInterface {
	chat: boolean
	cart: boolean
	userProfile: boolean
	notification: boolean
	activeMenu: boolean
	setActiveMenu: (activeMenu: boolean) => void
}

interface ContextProviderProps {
	children: React.ReactElement
}

const initialState: AppContextInterface = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
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
				chat: false,
				cart: false,
				userProfile: false,
				notification: false,
				activeMenu,
				setActiveMenu
			}}
		>
			{children}
		</StateContext.Provider>
	)
}
