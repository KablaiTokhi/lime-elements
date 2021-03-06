import { Option } from '@limetech/lime-elements';
import { Component, h, State } from '@stencil/core';

@Component({
    shadow: true,
    tag: 'limel-example-select-initially-empty',
    styleUrl: 'select.scss',
})
export class SelectExample {
    @State()
    public value: Option;

    private options: Option[] = [
        { text: '', value: '' },
        { text: 'Luke Skywalker', value: 'luke' },
        { text: 'Han Solo', value: 'han' },
        { text: 'Leia Organo', value: 'leia' },
    ];

    constructor() {
        this.onChange = this.onChange.bind(this);
    }

    public render() {
        return (
            <section>
                <limel-select
                    label="Favorite hero"
                    value={this.value}
                    options={this.options}
                    onChange={this.onChange}
                />
                <p>Value: {JSON.stringify(this.value)}</p>
            </section>
        );
    }

    private onChange(event) {
        this.value = event.detail;
    }
}
