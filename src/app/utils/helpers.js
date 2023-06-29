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

/**
 * @source https://github.com/JoshK2/vue-spinners-css/blob/master/src/helpers/calcPropertyValue.js
 */
export function calculatePropertyValue(propName, originalValue, modificator) {
    const computedStyle = {}
    const timeQuantityOuter = originalValue.match(/^\d*\.?\d+/)[0]
    const timeUnit = originalValue.match(/s|(ms)$/)[0]
    const timeQuantityInner = Math.round(timeQuantityOuter * 1000 * modificator) / 1000

    computedStyle[propName] = timeQuantityInner + timeUnit
    return computedStyle
}

/**
 * @source https://github.com/JoshK2/vue-spinners-css/blob/master/src/helpers/validateDuration.js
 */
export function validateDuration(duration) {
    const re = new RegExp(/^\d*\.?\d+(s|ms)$/)
    return re.test(duration)
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

export function prepareString(string) {
    let formattedString = string.replace(/[^\w\s-]/g, '');

    formattedString = formattedString.replace(/\b\w/g, function(match) {
        return match.toUpperCase();
    });

    formattedString = formattedString.replace(/-/g, ' ');

    return formattedString;
}

export function getFilteredAttributes(element, avoidAttributes) {
    const attributes = {};

    for (let i = 0; i < element.attributes.length; i++) {
        const attr = element.attributes[i];
        const { name, value } = attr;

        if (!avoidAttributes.includes(name)) {
            attributes[name] = value;
        }
    }

    return attributes;
}
