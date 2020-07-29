import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/404";
import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from "./pages/cadastro/Categoria";

// Desafio master blaster na descrição
// Colocar um jogo nessa página: https://www.youtube.com/watch?v=jOAU81jdi-c :)
ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path='/' component={Home} exact />
			<Route path='/cadastro/categoria' component={CadastroCategoria} />
			<Route path='/cadastro/video' component={CadastroVideo} />
			<Route component={Page404} />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
