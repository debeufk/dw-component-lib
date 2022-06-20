import { IStyle, ITheme } from "office-ui-fabric-react/lib/Styling";
import { IStyleFunctionOrObject } from "office-ui-fabric-react/lib/Utilities";
import * as React from "react";

export interface ITreeItemContentProps {
	/**
	 * The label to show for the tree node
	 */
	label?: string;

	/**
	 * The nodeId of the tree node
	 */
	nodeId: string;

	/**
	 * Callback fired when a the content is clicked
	 *
	 * @param {object} event The event source of the callback.
	 */
	onClick?: (event: React.SyntheticEvent) => void;

	/**
	 * Callback fired when the mouse button is pressed down on the content
	 *
	 * @param {object} event The event source of the callback.
	 */
	onMouseDown?: (event: React.SyntheticEvent) => void;

	/**
	 * Optional class for the root TreeItemContent element
	 */
	className?: string;

	/**
	 * Call to apply custom styling on the TreeItemContent element
	 */
	styles?: IStyleFunctionOrObject<ITreeItemContentStyleProps, ITreeItemContentStyles>;

	/**
	 * The current theme applied to the control
	 */
	theme?: ITheme;
}

export interface ITreeItemContentStyleProps {
	className?: string;
	focused?: boolean;
	selected?: boolean;
	theme: ITheme;
}

export interface ITreeItemContentStyles {
	root?: IStyle;
	expandIcon?: IStyle;
}
