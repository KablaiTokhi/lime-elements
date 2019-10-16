const { React } = window as any;

export const ObjectFieldTemplate = (props: any) => {
    const id = props.idSchema.$id;
    if (id === 'root') {
        return renderRootField(props);
    }

    if (isInArray(id)) {
        return renderArrayField(props);
    }

    return React.createElement('limel-collapsible-section', {
        header: props.title
    }, props.properties.map(element => element.content));
}

function renderRootField(props: any) {
    return React.createElement('div', {}, ...[
        React.createElement('h2', {}, props.title),
        React.createElement('p', {}, props.description),
        props.properties.map(element => element.content)
    ]);
}

function renderArrayField(props: any) {
    return props.properties.map(element => element.content);
}

function isInArray(id) {
    return id.match(/_\d+$/);
}
