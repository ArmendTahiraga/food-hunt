import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();

export function ContextProvider({ children }) {
	const [language, setLanguage] = useState("English");

	function updateLanguage(event) {
		if (event.target.src === "http://127.0.0.1:5173/src/pictures/albania-flag-waving-icon-32.png") {
			setLanguage("Albanian");
		} else if (event.target.src === "http://127.0.0.1:5173/src/pictures/united-kingdom-flag-waving-icon-32.png") {
			setLanguage("English");
		}
	}

	return <StateContext.Provider value={{ language, updateLanguage }}>{children}</StateContext.Provider>;
}

export const useStateContext = () => useContext(StateContext);
