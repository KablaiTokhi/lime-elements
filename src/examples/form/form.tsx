import { Component, h, State } from '@stencil/core';

const schema = {
    title: "My form",
    description: "Lorem ipsum dolor sit amet",
    type: "object",
    required: ["title"],
    properties: {
        title: {type: "string", title: "Title", default: "A new task", description: 'Lorem ipsum dolor sit amet'},
        done: {type: "boolean", title: "Done?", default: false},
        rate: {
            "title": "Success rate",
            "type": "integer",
            "minimum": 50,
            "maximum": 100,
            "multipleOf": 1
        },
        color: {type: "string", title: "Color", enum: ["red", "green", "blue"]},
        colorMask: {
            type: "array",
            title: "Color mask",
            uniqueItems: true,
            items: {
                title: "Color",
                type: "string",
                anyOf: [{
                    type: "string",
                    enum: ["#ff0000"],
                    title: "Red"
                }, {
                    type: "string",
                    enum: ["#00ff00"],
                    title: "Green"
                }, {
                    type: "string",
                    enum: ["#0000ff"],
                    title: "Blue"
                }]
            }
        },
        nested: {
            type: "object",
            title: "My nested properties",
            description: "Another description",
            properties: {
                name: {type: "string", title: "Name", description: "Please enter your name"},
                language: {type: "string", title: "Language", description: "Do you speak?"}
            }
        },
        friends: {
            type: "array",
            title: "My best friends",
            items: {
                type: "string",
                title: "Name",
                description: "Taz'dingo",
                default: 'New item'
            }
        }
    }
};

@Component({
    tag: 'limel-example-form',
    shadow: true,
})
export class FormExample {

    @State()
    private formData: object = {
        title: 'Test'
    };

    public render() {
        return [
            <limel-form
                onChange={(event) => this.formData = event.detail}
                value={this.formData}
                schema={schema}
            />,
            <br/>,
            <br/>,
            'Value: ',
            <pre>{JSON.stringify(this.formData, null, '    ')}</pre>
        ];
    }
}
