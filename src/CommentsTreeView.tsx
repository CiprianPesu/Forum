import * as React from "react";
import Box from "@mui/material/Box";
import { useSpring, animated } from "@react-spring/web";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { TransitionProps } from "@mui/material/transitions";
import Collapse from "@mui/material/Collapse";
import { alpha, styled } from "@mui/material/styles";
import { TreeView } from "@mui/x-tree-view/TreeView";
import {
	TreeItem,
	TreeItemProps,
	treeItemClasses,
} from "@mui/x-tree-view/TreeItem";
import {
	ChevronRight,
	Download,
	ExpandMore,
	Upload,
} from "@mui/icons-material";
import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	IconButton,
	Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";

function TransitionComponent(props: TransitionProps) {
	const style = useSpring({
		to: {
			opacity: props.in ? 1 : 0,
			transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
		},
	});

	return (
		<animated.div style={style}>
			<Collapse {...props} />
		</animated.div>
	);
}

interface CostumeTableItemProps extends TreeItemProps {
	text: string;
	name: string;
}

const CustomTreeItem = React.forwardRef(
	(props: CostumeTableItemProps, ref: React.Ref<HTMLLIElement>) => (
		<div style={{ margin: "2vh" }}>
			<Divider sx={{ margin: "1vh" }} />
			<Grid container wrap="nowrap" spacing={2}>
				<Grid item>
					<Avatar alt="Remy Sharp" />
				</Grid>
				<Grid justifyContent="left" item xs zeroMinWidth>
					<h4 style={{ margin: 0, textAlign: "left" }}>
						{props.name}
					</h4>
					<p style={{ textAlign: "left" }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Aenean luctus ut est sed faucibus. Duis bibendum ac ex
						vehicula laoreet. Suspendisse congue vulputate lobortis.
						Pellentesque at interdum tortor. Quisque arcu quam,
						malesuada vel mauris et, posuere sagittis ipsum. Aliquam
						ultricies a ligula nec faucibus. In elit metus,
						efficitur lobortis nisi quis, molestie porttitor metus.
						Pellentesque et neque risus. Aliquam vulputate, mauris
						vitae tincidunt interdum, mauris mi vehicula urna, nec
						feugiat quam lectus vitae ex.{" "}
					</p>
				</Grid>
			</Grid>
			<Grid item>
				<div
					style={{
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					<h4
						style={{ margin: 0, textAlign: "left", color: "green" }}
					>
						100
					</h4>
					<IconButton color="primary">
						<Upload />
					</IconButton>
					<IconButton color="primary">
						<Download />
					</IconButton>
				</div>
			</Grid>

			<Grid item>
				<TreeItem
					{...props}
					nodeId={props.nodeId}
					label={props.label}
					TransitionComponent={TransitionComponent}
					ref={ref}
				></TreeItem>
			</Grid>
		</div>
	)
);

const StyledTreeItem = styled(CustomTreeItem)(({ theme }) => ({
	[`& .${treeItemClasses.iconContainer}`]: {
		"& .close": {
			opacity: 0.3,
		},
	},
	[`& .${treeItemClasses.group}`]: {
		marginLeft: 15,
		paddingLeft: 18,
		borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
	},
}));

export default function CommentsTreeView() {
	return (
		<Box sx={{ minHeight: 270, flexGrow: 1, padding: "5%" }}>
			<TreeView
				aria-label="customized"
				defaultExpanded={["1"]}
				defaultCollapseIcon={<ExpandMore />}
				defaultExpandIcon={<ChevronRight />}
				sx={{ overflowX: "hidden" }}
			>
				<StyledTreeItem nodeId="1" text="Text" name="Test">
					<StyledTreeItem nodeId="2" text="Text" name="Test" />
					<StyledTreeItem nodeId="3" text="Text" name="Test">
						<StyledTreeItem nodeId="6" text="Text" name="Test" />
						<StyledTreeItem nodeId="7" text="Text" name="Test">
							<StyledTreeItem
								nodeId="9"
								text="Text"
								name="Test"
							/>
							<StyledTreeItem
								nodeId="10"
								text="Text"
								name="Test"
							/>
							<StyledTreeItem
								nodeId="11"
								text="Text"
								name="Test"
							/>
						</StyledTreeItem>
						<StyledTreeItem nodeId="8" text="Text" name="Test" />
					</StyledTreeItem>
					<StyledTreeItem nodeId="4" text="Text" name="Test" />
					<StyledTreeItem nodeId="5" text="Text" name="Test" />
				</StyledTreeItem>
			</TreeView>
		</Box>
	);
}
