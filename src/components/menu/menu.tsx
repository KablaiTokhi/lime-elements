import { ListItem, ListSeparator } from '@limetech/lime-elements';
import { Corner, MDCMenu } from '@limetech/mdc-menu';
import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Prop,
    Watch,
} from '@stencil/core';
import { ListRenderer } from '../list/list-renderer';
import { ListRendererConfig } from '../list/list-renderer-config';

/**
 * @slot trigger - Element to use as a trigger for the menu
 */
@Component({
    tag: 'limel-menu',
    shadow: true,
    styleUrl: 'menu.scss',
})
export class Menu {
    /**
     * Is displayed on the default trigger button.
     */
    @Prop({ reflectToAttr: true })
    public label = '';

    /**
     * A list of items and separators to show in the menu.
     */
    @Prop()
    public items: Array<ListItem | ListSeparator> = [];

    /**
     * Sets the disabled state of the menu.
     */
    @Prop({ reflectToAttr: true })
    public disabled = false;

    /**
     * Sets the open state of the menu.
     */
    @Prop({ mutable: true, reflectToAttr: true })
    public open = false;

    /**
     * Defines whether the menu should show badges.
     */
    @Prop({ mutable: true, reflectToAttr: true })
    public badgeIcons = false;

    /**
     * Is emitted when the menu is cancelled.
     */
    @Event()
    private cancel: EventEmitter<void>;

    /**
     * Is emitted when a menu item is selected.
     */
    @Event()
    private select: EventEmitter<ListItem>;

    @Element()
    private element: HTMLElement;

    private menu: MDCMenu;
    private listRenderer = new ListRenderer();

    constructor() {
        this.handleMdcSelected = this.handleMdcSelected.bind(this);
        this.handleMdcClosed = this.handleMdcClosed.bind(this);
    }

    public componentDidLoad() {
        const menuElement = this.element.shadowRoot.querySelector('.mdc-menu');
        this.menu = new MDCMenu(menuElement);
        this.menu.listen('MDCMenu:selected', this.handleMdcSelected);
        this.menu.listen('MDCMenuSurface:closed', this.handleMdcClosed);

        this.menu.setAnchorCorner(Corner.TOP_START);
        this.menu.quickOpen = true;
    }

    public componentDidUnload() {
        this.menu.unlisten('MDCMenu:selected', this.handleMdcSelected);
        this.menu.unlisten('MDCMenuSurface:closed', this.handleMdcClosed);
        this.menu.destroy();
    }

    public render() {
        const config: ListRendererConfig = {
            isMenu: true,
            iconSize: 'small',
            isOpen: this.open,
            badgeIcons: this.badgeIcons,
            type: 'selectable',
        };
        return (
            <div class="mdc-menu-surface--anchor">
                <slot name="trigger">{this.renderTrigger()}</slot>
                <div class="mdc-menu mdc-menu-surface" tabindex="-1">
                    {this.listRenderer.render(this.items, config)}
                </div>
                {this.disabled ? <div class="menu-disabled" /> : null}
            </div>
        );
    }

    @Watch('open')
    protected openWatcher(newValue: boolean) {
        if (newValue !== this.menu.open) {
            this.menu.open = newValue;
        }
    }

    private renderTrigger() {
        return (
            <button
                class={`
                    menu__trigger
                    ${this.disabled ? '' : 'menu__trigger-enabled'}
                `}
                disabled={this.disabled}
                onClick={this.onTriggerClick}
            >
                <span>{this.label}</span>
            </button>
        );
    }

    private handleMdcSelected(event: CustomEvent) {
        this.select.emit(
            this.items[
                parseInt(event.detail.item.dataset.index, 10)
            ] as ListItem
        );
        this.open = false;
    }

    private handleMdcClosed() {
        this.cancel.emit();
        this.open = false;
    }

    private onTriggerClick = () => {
        this.open = !this.open;
    };
}
