import { getGlobalClassNames } from "office-ui-fabric-react/lib/Styling";
import { ITermItemSuggestionStyleProps, ITermItemSuggestionStyles } from "./TermItemSuggestion.types";

const GlobalClassNames = {
	suggestionTextOverflow: "ms-TermItem-TextOverflow"
};

export function getStyles(props: ITermItemSuggestionStyleProps): ITermItemSuggestionStyles {
	const { className, theme } = props;

	const classNames = getGlobalClassNames(GlobalClassNames, theme);

	return {
		suggestionTextOverflow: [
			classNames.suggestionTextOverflow,
			{
				overflow: "hidden",
				textOverflow: "ellipsis",
				maxWidth: "60vw",
				padding: "6px 12px 7px",
				whiteSpace: "nowrap"
			},
			className
		]
	};
}
