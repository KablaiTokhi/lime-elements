import { Option } from "../../select/option.types";
import { isMultiple } from "../../../util/multiple";
const { React } = window as any;

export class SelectWidget extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    public componentDidMount() {
        const element: HTMLLimelSelectElement = this['refs'].ref;

        this.setOptions(element);
        this.setValue(element);
        element.addEventListener('change', this.handleChange);
    }

    public componentWillUnmount() {
        const element: HTMLLimelSelectElement = this['refs'].ref;

        element.removeEventListener('change', this.handleChange);
    }

    public componentDidUpdate(prevProps) {
        const props = this['props'];
        const element: HTMLLimelSelectElement = this['refs'].ref;

        if (props.options !== prevProps.options) {
            this.setOptions(element);
        }

        if (props.value !== prevProps.value) {
            this.setValue(element);
        }
    }

    private setOptions(element: HTMLLimelSelectElement) {
        const props = this['props'];

        const options = props.options.enumOptions.map(createOption);
        element.options = options;
    }

    private setValue(element: HTMLLimelSelectElement) {
        const props = this['props'];
        const options = element.options;

        const value = findValue(props.value, options, props.multiple);
        element.value = value;
    }

    private handleChange(event: CustomEvent<Option|Option[]>) {
        const props = this['props'];
        event.stopPropagation();

        if (isMultiple(event.detail)) {
            const value = event.detail.map(option => option.value);
            props.onChange(value);

            return;
        }

        props.onChange(event.detail.value);
    }

    public render() {
        const props = this['props'];

        return React.createElement('limel-select', {
            label: props.label || props.schema.title,
            disabled: props.disabled,
            required: props.required,
            multiple: props.multiple,
            ref: 'ref'
        });
    }
}

function createOption({label, value}): Option {
    return {
        text: label,
        value: value
    };
}

function findValue(value: string | string[], options: Option[], multiple: boolean) {
    if (!multiple) {
        return options.find((option: Option) => option.value === value);
    }

    return options.filter((option: Option) => value.includes(option.value))
}
