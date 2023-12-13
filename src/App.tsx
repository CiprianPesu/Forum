import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TreeItem, TreeView } from "@mui/x-tree-view";
import { ChevronRight, ExpandMore } from "@mui/icons-material";
import CommentsTreeView from "./CommentsTreeView";

function App() {
	return (
		<div className="App">
			<CommentsTreeView></CommentsTreeView>
		</div>
	);
}

export default App;
