import { filterClasses, generateBoxModels, removePx } from "./helpers";

/**
 * @author https://github.com/Kholid060/inspect-css/blob/master/src/utils/getElementProperties.js
 */
export default class HtmlElement {

    constructor(reference) {
        this.reference = reference;
        this.computedStyleKeys = [
            ...generateBoxModels('margin'),
            ...generateBoxModels('padding'),
            'fontFamily',
            'color',
            'fill',
            'backgroundColor',
        ];
    }

    getSelector() {
        return {
            tag: this.reference.tagName.toLowerCase(),
            id: this.reference.id ? `#${this.reference.id}` : '',
            classes: filterClasses(Array.from(this.reference.classList)),
        };
    }

    getSize() {
        const { height, width } = this.reference.getBoundingClientRect();

        return { height, width };
    }

    getComputedStyles() {
        return this.computedStyleKeys.reduce((styles, key) => {
            const value = getComputedStyle(this.reference)[key];

            styles[key] = key === 'fontFamily' ? value.split(',')[0].replace(/"/g, '') : removePx(value);

            return styles;
        }, {});
    }

    getColor() {
        return getComputedStyle(this.reference).color;
    }

    /**
     * @author https://github.com/Van4kk
     * @returns {string}
     */
    getFillColor() {
        return getComputedStyle(this.reference).fill;
    }

    /**
     * @author https://github.com/Van4kk
     * @returns {string}
     */
    getBackgroundColor() {
        return getComputedStyle(this.reference).backgroundColor;
    }

    /**
     * @author https://github.com/Van4kk
     * @returns {{fillColor: string, backgroundColor: string, color: string}}
     */
    getAllColors() {
        return {
            color: this.getColor(),
            fillColor: this.getFillColor(),
            backgroundColor: this.getBackgroundColor(),
        }
    }

    getAll() {
        return {
            selector: this.getSelector(),
            size: this.getSize(),
            computedStyles: this.getComputedStyles(),
            allColors: this.getAllColors(),
        };
    }
}