export function copyToClipboard() {

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