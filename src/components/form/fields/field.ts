const { React } = window as any;

export const FieldTemplate = props => {
    const {classNames, children} = props;
    return React.createElement('div', {
        className: classNames,
    }, children);
}
