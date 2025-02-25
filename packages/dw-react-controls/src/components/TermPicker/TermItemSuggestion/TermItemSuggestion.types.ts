import { IStyle, IStyleFunctionOrObject, ITheme } from "@fluentui/react";
import { ITermValue } from "../models";

export interface ITermItemSuggestionProps extends React.AllHTMLAttributes<HTMLElement> {
	term?: ITermValue;

	/**
	 * Optional class for the root TaxonomyPicker element
	 */
	className?: string;

	/**
	 * Call to apply custom styling on the TaxonomyPicker element
	 */
	styles?: IStyleFunctionOrObject<ITermItemSuggestionStyleProps, ITermItemSuggestionStyles>;

	/**
	 * Theme provided by High-Order Component
	 */
	theme?: ITheme;
}

export type ITermItemSuggestionStyleProps = Required<Pick<ITermItemSuggestionProps, "theme">> &
	Pick<ITermItemSuggestionProps, "className"> & {};

export interface ITermItemSuggestionStyles {
	root?: IStyle;
}
