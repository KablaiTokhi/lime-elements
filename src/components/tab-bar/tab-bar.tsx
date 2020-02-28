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

    @Prop()
    public tabs: Tab[];

    private mdcTabBar: MDCTabBar;

    @State()
    private selectedTab = this.tabs[0];

    constructor() {
        this.handleAction = this.handleAction.bind(this);

    }

    public componentDidLoad() {
        this.setup();
    }

    private setup() {
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
                    <div class="mdc-tab-scroller__scroll-area">
                        <div class="mdc-tab-scroller__scroll-content">
                            {this.renderTabs()}
                        </div>
                    </div>
                    <slot>{this.selectedTab && this.selectedTab.content}</slot>
                </div>
            </div>
        );
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
                        onChange={this.handleAction}
                    >
                        <span class="mdc-tab__content">
                            <i class="mdc-text-field__icon">
                                <limel-icon name={tab.icon} />
                            </i>
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
