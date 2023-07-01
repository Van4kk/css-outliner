export const generateGetBoundingClientRect = (x = 0, y = 0) => () => ({
    width: 0,
    height: 0,
    top: y,
    right: x,
    bottom: y,
    left: x,
});

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

/**
 * @author https://github.com/Kholid060/inspect-css/blob/master/src/utils/getAppliedCSS.js
 * @param rules
 * @returns {{hover: string, css: string}}
 */
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

/**
 * @author https://github.com/Kholid060/inspect-css/blob/master
 * @param css
 * @returns {*}
 */
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
 * @author https://github.com/JoshK2/vue-spinners-css/blob/master/src/helpers/calcPropertyValue.js
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
 * @author https://github.com/JoshK2/vue-spinners-css/blob/master/src/helpers/validateDuration.js
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

export function optimizeTextColor(background) {

    const rgb = background.replace(/[^\d,]/g, '').split(',').map(Number);

    const [r, g, b] = rgb;

    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

    const threshold = 0.5;

    return luminance > threshold ? '#000000' : 'rgba(188, 201, 219, 1)';
}

export function convertToHex(color) {

    // Check if the color is in RGB format
    if (color.startsWith('rgb')) {
        // Process as RGB format
        const rgb = color.match(/\d+/g).map(Number);
        const [r, g, b] = rgb;

        const hex = [r, g, b]
            .map((num) => num.toString(16).padStart(2, '0'))
            .join('');

        return `#${hex}`;
    }

    // Check if the color is in RGBA format
    if (color.startsWith('rgba')) {
        const rgba = color.match(/\d+/g).map(Number);
        const [r, g, b] = rgba.slice(0, 3);
        const alpha = Math.round(rgba[3] * 255);
        const hex = [r, g, b].map((num) => num.toString(16).padStart(2, '0')).join('');

        return `#${hex}${alpha.toString(16).padStart(2, '0')}`;
    }

    // Check if the color is in HSLA format
    if (color.startsWith('hsla')) {
        const hsla = color.match(/\d+/g).map(Number);
        const [h, s, l] = hsla.slice(0, 3);
        const alpha = Math.round(hsla[3] * 255);
        const rgb = hslToRgb(h / 360, s / 100, l / 100);
        const hex = rgb.map((num) => num.toString(16).padStart(2, '0')).join('');

        return `#${hex}${alpha.toString(16).padStart(2, '0')}`;
    }

    // Check if the color is in hexadecimal format
    if (color.startsWith('#')) {
        const hex = color.replace('#', '');

        // Convert short hex format to full hex format
        if (hex.length === 3) {
            const fullHex = hex
                .split('')
                .map((char) => char.repeat(2))
                .join('');

            return `#${fullHex}`;
        }

        return color;
    }

    return color;
}

export function hslToRgb(h, s, l) {
    let r, g, b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
