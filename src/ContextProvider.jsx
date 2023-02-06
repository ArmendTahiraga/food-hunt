import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();

export function ContextProvider({ children }) {
	const [language, setLanguage] = useState("EN");

	function updateLanguage() {
		if (language === "EN") {
			setLanguage("AL");
		} else if (language === "AL") {
			setLanguage("EN");
		}
	}

	return <StateContext.Provider value={{ language, updateLanguage }}>{children}</StateContext.Provider>;
}

export const useStateContext = () => useContext(StateContext);
