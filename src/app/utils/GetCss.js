import { extractCSS, filterRules, getNumber, removeDuplicateCSS } from "./helpers";

/**
 * @author https://github.com/Kholid060/inspect-css/blob/master/src/utils/getAppliedCSS.js
 */
export default class GetCSS {
    constructor(el) {
        this.element = el;
    }

    get rules() {
        const slice = Function.call.bind(Array.prototype.slice);
        return Array.from(document.styleSheets).reduce((rulesArr, sheet) => {
            try {
                if (sheet?.cssRules) {
                    return rulesArr.concat(slice(sheet.cssRules));
                }
            } catch {
                return rulesArr;
            }
        }, []);
    }

    all() {
        const { css: mediaCSS, hover: mediaHover } = this.mediaQueryCSS();
        const { css: styleCSS, hover: styleHover } = this.css();
        const inlineCSS = this.inlineCSS();

        const css = removeDuplicateCSS(inlineCSS + mediaCSS + styleCSS);
        const hover = removeDuplicateCSS(mediaHover + styleHover);

        return { css, hover };
    }

    inlineCSS() {
        const styleAttribute = this.element.getAttribute('style');

        if (!styleAttribute) return '';

        return styleAttribute.endsWith(';') ? styleAttribute : `${styleAttribute};`;
    }

    mediaQueryCSS() {
        const mediaQueries = this.rules.filter(({ conditionText, media }) => media && window.matchMedia(conditionText).matches && getNumber(conditionText));
        const mediaQueriesSorted = mediaQueries.sort((a, b) => {
            const aMedia = getNumber(a.conditionText);
            const bMedia = getNumber(b.conditionText);

            if (aMedia > bMedia) return -1;
            if (bMedia > aMedia) return 1;

            return 0;
        });

        return mediaQueriesSorted.reduce(
            (result, media) => {
                if (media.cssRules) {
                    const filteredRules = filterRules(this.element, Array.from(media.cssRules));
                    const {css, hover} = extractCSS(filteredRules);

                    result.css += css;
                    result.hover += hover;

                    return result;
                }

                return result;
            },
            {css: '', hover: ''},
        );
    }

    css() {
        const filteredRules = filterRules(this.element, this.rules);

        return extractCSS(filteredRules);
    }
}