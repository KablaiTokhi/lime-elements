const { React } = window as any;

export class CheckboxWidget extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    public componentDidMount() {
        const element: HTMLLimelCheckboxElement = this['refs'].ref;
        element.addEventListener('change', this.handleChange);
    }

    public componentWillUnmount() {
        const element: HTMLLimelCheckboxElement = this['refs'].ref;
        element.removeEventListener('change', this.handleChange);
    }

    private handleChange(event: CustomEvent<boolean>) {
        const props = this['props'];
        event.stopPropagation();
        props.onChange(event.detail);
    }

    public render() {
        const props = this['props'];

        return React.createElement('limel-checkbox', {
            checked: !!props.value,
            label: props.label,
            disabled: props.disabled,
            ref: 'ref'
        });
    }
}
