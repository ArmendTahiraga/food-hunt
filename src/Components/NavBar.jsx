import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../ContextProvider";

function NavBar() {
	const { language, updateLanguage } = useStateContext();
	const location = useLocation();

	return (
		<div className="nav-container">
			<div className="nav">
				<div className="left">
					<Link to={"/"}>
						<h2 className="logo">Food Hunt</h2>
					</Link>
				</div>
				<div className="right">
					<Link to={"/"}>
						<h2
							className="nav-item"
							style={{
								borderBottom: location.pathname === "/" ? "1px solid #fff" : "0",
							}}
						>
							{language === "EN" ? "Home" : "Shtëpi"}
						</h2>
					</Link>
					<h2 className="nav-item">{language === "EN" ? "Diets" : "Dietat"}</h2>
					<button className="login">{language === "EN" ? "Login" : "Hyr"}</button>
					<button className="sign-up">{language === "EN" ? "Sign Up" : "Regjistrohu"}</button>
					{/* <div className="language-section">
						<img
							src={albania}
							alt=""
							value={"Albanian"}
							onClick={(e) => updateLanguage(e)}
							style={{
								transform: language === "Albanian" ? "scale(1.1)" : "scale(0.8)",
							}}
						/>
						<h3 className="image-deviser">/</h3>
						<img
							src={unitedKingdom}
							alt=""
							value={"English"}
							onClick={(e) => updateLanguage(e)}
							style={{
								transform: language === "English" ? "scale(1.1)" : "scale(0.8)",
							}}
						/> 
					</div> */}
					<h4
						className="language"
						onClick={() => updateLanguage()}
						style={{
							marginRight: language === "AL" ? "2px" : 0,
						}}
					>
						{language}
					</h4>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
