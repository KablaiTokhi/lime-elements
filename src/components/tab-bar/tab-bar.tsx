import { Component, h, Prop, Element, State } from '@stencil/core';
import {
    MDCTabBar,
    MDCTabBarActivatedEvent
} from '@limetech/mdc-tab-bar';
import { strings } from '@limetech/mdc-tab-bar/constants';
import { Tab } from './tab.types';
const { TAB_ACTIVATED_EVENT } = strings;

@Component({
    tag: 'limel-tab-bar',
    styleUrl: 'tab-bar.scss',
    shadow: true
})
export class TabBar {

    @Element()
    private element: HTMLElement;

    /**
     * List of tabs to display
     */
    @Prop()
    public tabs: Tab[];

    private mdcTabBar: MDCTabBar;

    @State()
    private selectedTab = this.tabs[0];

    constructor() {
        this.handleAction = this.handleAction.bind(this);

    }

    public componentDidLoad() {
        this.element.focus();
        this.setup();
    }

    private setup() {
        this.element.focus();
        const element = this.element.shadowRoot.querySelector('.mdc-tab-bar');
        if (!element) {
            return;
        }
        
        this.mdcTabBar = new MDCTabBar(element);

        this.setupListeners();
    }

    private setupListeners() {
        this.mdcTabBar.listen(TAB_ACTIVATED_EVENT, this.handleAction);
    }

    private handleAction(event: MDCTabBarActivatedEvent) {
        const index = event.detail.index;
        const selectedTab = this.tabs[index];
        this.selectedTab = selectedTab;
    }

    render() {
        return (
            <div class="mdc-tab-bar" role="tablist">
                <div class="mdc-tab-scroller">
                    <div class="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll">
                        <div class="mdc-tab-scroller__scroll-content">
                            {this.renderTabs()}
                        </div>
                    </div>
                </div>

                <div class="content">
                    <slot>{this.selectedTab && this.selectedTab.content}</slot>
                </div>
            </div>
        );
    }

    private renderIcon(tab: Tab) {
        const style = {};
        if (tab.iconColor) {
            style['background-color'] = tab.iconColor;
            style['color'] = 'white';
        }

        return (
            <limel-icon
                class="mdc-text-field__icon"
                name={tab.icon}
                badge={true}
                style={style}
                size="small"
            />
        )
    }

    private renderTabs() {
        return (
            this.tabs.map((tab, index) => {
                return (
                    <button class={`
                        mdc-tab
                        ${tab.selected ? 'mdc-tab--active' : ''}
                    `}
                        role="tab"
                        aria-selected="true" tabindex={index}
                    >
                        <span class="mdc-tab__content">
                            {this.renderIcon(tab)}
                            <span class="mdc-tab__text-label">{tab.name}</span>
                        </span>
                        <span class={`
                              mdc-tab-indicator 
                              ${tab.selected ? 'mdc-tab-indicator--active' : ''}
                          `}

                        >
                            <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                        </span>
                        <span class="mdc-tab__ripple"></span>
                    </button>

                )
            })

        )
    }
}
