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
        const props: any = this['props'];

        if (this.isRange(props.schema)) {
            return this.renderRangeWidget();
        }

        return React.createElement('limel-input-field', {
            value: props.value,
            label: props.label,
            description: props.schema.description,
            disabled: props.disabled,
            required: props.required,
            ref: 'ref'
        });
    }

    private isRange(schema: any) {
        if (!['integer', 'number'].includes(schema.type)) {
            return false;
        }

        if (!('maximum' in schema)) {
            return false;
        }

        if (!('minimum' in schema)) {
            return false;
        }

        return true;
    }

    private renderRangeWidget() {
        const props: any = this['props'];
        const schema = props.schema;

        return React.createElement('limel-slider', {
            value: props.value,
            valuemax: schema.maximum,
            valuemin: schema.minimum,
            label: props.label,
            disabled: props.disabled,
            ref: 'ref'
        });
    }

}
