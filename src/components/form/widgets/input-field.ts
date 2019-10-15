const { React } = window as any;

export class InputFieldWidget extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    public componentDidMount() {
        const element: HTMLLimelInputFieldElement = this['refs'].ref;
        element.addEventListener('change', this.handleChange);
    }

    public componentWillUnmount() {
        const element: HTMLLimelInputFieldElement = this['refs'].ref;
        element.removeEventListener('change', this.handleChange);
    }

    private handleChange(event: CustomEvent<string>) {
        const props = this['props'];
        event.stopPropagation();
        props.onChange(event.detail);
    }

    public render() {
        const props = this['props'];

        return React.createElement('limel-input-field', {
            value: props.value,
            label: props.label,
            description: props.schema.description,
            disabled: props.disabled,
            required: props.required,
            ref: 'ref'
        });
    }
}
