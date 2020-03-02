export interface Tab {
    /**
     * Name of the tab.
     */
    name: string;

    /**
     * Name of the icon to use.
     */
    icon?: string;

    /**
     * True if the tab should be selected.
     */
    selected?: boolean;

    /**
     * A text shown when a tab is selected.
     */
    content?: string;

    /**
     *  Color of the icon.
     */
    iconColor: string,
}
