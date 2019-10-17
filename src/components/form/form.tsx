import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Prop,
} from '@stencil/core';
import { widgets } from './widgets';
import { FieldTemplate, ObjectFieldTemplate, ArrayFieldTemplate } from './fields';
import React from "react";
import { render } from "react-dom";
import JSONSchemaForm from 'react-jsonschema-form'

@Component({
    tag: 'limel-form',
    shadow: true,
    styleUrl: 'form.scss',
})
export class Form {

    @Prop()
    public schema: object;

    @Prop()
    public value: object;

    @Event()
    public change: EventEmitter<object>;

    @Element()
    private host: HTMLElement;

    protected componentDidLoad() {
        const rootElement = this.host.shadowRoot.querySelector('.root');

        render(React.createElement(JSONSchemaForm, {
            schema: this.schema,
            formData: this.value,
            widgets,
            onChange: ({formData}) => this.change.emit(formData),
            FieldTemplate,
            ObjectFieldTemplate,
            ArrayFieldTemplate
        }), rootElement);
    }

    public render() {
        return <div class="root" />
    }
}
