export const generateGetBoundingClientRect = (x = 0, y = 0) => () => ({
    width: 0,
    height: 0,
    top: y,
    right: x,
    bottom: y,
    left: x,
});

export function copyToClipboard(text = '') {
    const textarea = document.createElement('textarea');

    textarea.value = text;
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.style.opacity = 0;
    textarea.style.position = 'fixed';

    document.body.appendChild(textarea);

    textarea.focus();
    textarea.select();

    document.execCommand('Copy');

    textarea.remove();

    return true;
}

export function debounce(func, wait, immediate) {
    let timeout;

    return function () {
        const context = this;
        const args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}

export function generateBoxModels(name) {
    const directions = ['top', 'right', 'bottom', 'left'];

    return directions.map((direction) => `${name}-${direction}`);
}

export function removePx(str) {
    if (str === 'fontFamily') return '';

    const value = str.replace('px', '');

    return +value === 0 ? '-' : Math.floor(value);
}

export function filterClasses(classes) {
    const blackListClasses = ['hover-element', 'active-element'];
    const filtered = classes.filter((name) => !blackListClasses.includes(name));

    return filtered.length !== 0 ? `.${filtered.join('.')}` : '';
}

export function extractCSS(rules) {
    const result = { css: '', hover: '' };

    rules.forEach(({ selectorText, style }) => {
        if (/\:\:before|\:\:after|\*/g.test(selectorText)) return;
        if (/\:hover/g.test(selectorText)) {
            result.hover += style.cssText;

            return;
        }

        result.css += style.cssText;
    });

    return result;
}

export function removeDuplicateCSS(css) {
    const seen = new Set();
    const cssArray = css.split(';');
    const filteredCssArray = cssArray.filter((property) => {
        if (property === '') return;

        const [key] = property.split(':');
        const duplicate = seen.has(key.trim());

        seen.add(key.trim());

        return !duplicate;
    });

    return filteredCssArray.map((cssStr) => cssStr.trim()).join(';\n');
}

export function getNumber(text) {
    return +text.replace(/\D/g, '');
}

export function filterRules(element, rules) {
    return rules.filter(({selectorText}) => element.matches(selectorText));
}

export function setAttributes(elem, obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            elem[prop] = obj[prop];
        }
    }
}

export function addAppCss(contentCss) {
    const appStyles = document.createElement('style');
    appStyles.innerText = contentCss;

    document.body.appendChild(appStyles);

    return function () {
        document.body.removeChild(appStyles);
    };
}

export function isIdenticalExisting(element){
    return document.querySelector(element);
}
