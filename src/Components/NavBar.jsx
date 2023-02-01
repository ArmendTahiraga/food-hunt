import React from "react";
import { Link } from "react-router-dom";
import albania from "../pictures/albania-flag-waving-icon-32.png";
import unitedKingdom from "../pictures/united-kingdom-flag-waving-icon-32.png";
import { useStateContext } from "../ContextProvider";

function NavBar() {
	const { language, updateLanguage } = useStateContext();

	return (
		<div className="nav-container">
			<div className="nav">
				<div className="left">
					<Link to={"/"}>
						<h2 className="logo">Food Hunt</h2>
					</Link>
					<Link to={"/"}>
						<h2 className="nav-item">Home</h2>
					</Link>
					<h2 className="nav-item">Diets</h2>
				</div>
				<div className="right">
					<button className="login">Login</button>
					<button className="sign-up">Sign Up</button>
					<div className="language-section">
						<img
							src={albania}
							alt=""
							value={"Albanian"}
							onClick={(e) => updateLanguage(e)}
							style={{
								transform: language === "Albanian" ? "scale(1.2)" : "scale(0.8)",
							}}
						/>
						<h3 className="image-deviser">/</h3>
						<img
							src={unitedKingdom}
							alt=""
							value={"English"}
							onClick={(e) => updateLanguage(e)}
							style={{
								transform: language === "English" ? "scale(1.2)" : "scale(0.8)",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
