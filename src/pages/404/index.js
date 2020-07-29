import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../src/assets/img/agfflix-404.svg";

function Page404() {
	return (
		<div
			style={{
				padding: "50px",
				justifyContent: "center",
				alignSelf: "center",
				textAlign: "center",
				background: "black",
				width: "100%",
				height: "100%",
				body: "black",
			}}
		>
			<Link to='/'>
				<img
					src={Logo}
					width='40%'
					height='50%'
					alt='Clique para voltar para Home!'
				/>
			</Link>
		</div>
	);
}

export default Page404;
