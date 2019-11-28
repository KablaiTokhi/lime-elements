import React from "react";

export class ArrayFieldTemplate extends React.Component {

    private removeElement = {};

    constructor() {
        super();
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    public componentDidMount() {
        const addButton: HTMLLimelButtonElement = this['refs'].addButton;
        if (addButton) {
            addButton.addEventListener('click', this.handleAddClick);
        }
    }

    public componentWillUnmount() {
        const addButton: HTMLLimelButtonElement = this['refs'].addButton;
        if (addButton) {
            addButton.removeEventListener('click', this.handleAddClick);
        }
    }

    public componentDidUpdate() {
        Object.keys(this['refs']).forEach(key => {
            if (!key.startsWith('id_')) {
                return;
            }

            const element: HTMLElement = this['refs'][key];
            element.addEventListener('action', this.handleRemoveClick);
        });
    }

    private handleAddClick(event) {
        const props: any = this['props'];
        event.stopPropagation();
        props.onAddClick(event);
    }

    private handleRemoveClick(event) {
        event.stopPropagation();
        this.removeElement[event.target.id]();
    }

    public render() {
        const props: any = this['props'];
        const children = [
            React.createElement('h3', {}, props.title)
        ];

        if (props.canAdd) {
            children.push(React.createElement('limel-button', {
                icon: 'add',
                label: 'Add',
                primary: true,
                ref: 'addButton'
            } as any, props.title));
        }

        Object.keys(this.removeElement).forEach(key => {
            const element: HTMLElement = this['refs'][key];
            element.removeEventListener('action', this.handleRemoveClick)
        });

        this.removeElement = {};
        children.push(props.items.map(this.renderArrayItem(props.formData)))

        return React.createElement('div', {}, children);
    }

    private renderArrayItem = formData => (element, index) => {
        const title = findTitle(formData[index]) || `${index}`;
        const key = `id_${index}`;
        this.removeElement[key] = element.onDropIndexClick(index);

        return (
            React.createElement('limel-collapsible-section', {
                header: title,
                icon: 'trash',
                id: key,
                ref: key
            } as any, element.children)
        );
    }
}

const findTitle = (item: any) => {
    if (!item) {
      return '';
    }

    if (typeof item !== 'object') {
      return item;
    }

    if (item.title) {
      return findTitle(item.title);
    }

    if (item.name) {
      return findTitle(item.name);
    }

    return Object.values(item).filter(value => !!value).map(value => findTitle(value))[0];
}
