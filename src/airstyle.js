const style = (element, style) => {
    element = document.querySelector(element.toString());

    if (typeof style === 'string') {
        element.setAttribute('style', style);
    }

    if (typeof style === 'object') {
        let stringified = '';

        for (let declaration in style) {
            const value = style[declaration];
            stringified += `${declaration}:${value};`;
        }
        element.setAttribute('style', stringified);
    }
}
export default style;
