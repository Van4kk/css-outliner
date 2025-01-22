import {CSSResult, extractCSS, filterRules, getNumber, removeDuplicateCSS} from './helpers';

export class GetCss {
	/**
	 * The HTML element to get the CSS from.
	 * @private
	 */
	private readonly element: Element;
	
	constructor(el: Element) {
		this.element = el;
	}
	
	/**
	 * Get all CSS rules from all stylesheets.
	 * @private
	 */
	get rules(): CSSRule[] {
		const slice = Function.call.bind(Array.prototype.slice);
		
		return Array.from(document.styleSheets).reduce<CSSRule[]>((rulesArr, sheet): CSSRule[] => {
			try {
				if (sheet instanceof CSSStyleSheet && sheet.cssRules) {
					return rulesArr.concat(Array.from(sheet.cssRules) as CSSRule[]);
				}
			} catch {
				return rulesArr;
			}
			
			return rulesArr;
		}, []);
	}
	
	/**
	 * Get the CSS of the element.
	 */
	public all(): CSSResult {
		const {css: mediaCSS, hover: mediaHover}: CSSResult = this.mediaQueryCSS();
		const {css: styleCSS, hover: styleHover}: CSSResult = this.css();
		const inlineCSS: string = this.inlineCSS();
		
		const css: string = removeDuplicateCSS(inlineCSS + mediaCSS + styleCSS);
		const hover: string = removeDuplicateCSS(mediaHover + styleHover);
		
		return {css, hover};
	}
	
	/**
	 * Get the inline CSS of the element.
	 * @private
	 */
	private inlineCSS(): string {
		const styleAttribute: string|null = this.element.getAttribute('style');
		
		if (!styleAttribute) return '';
		
		return styleAttribute.endsWith(';') ? styleAttribute : `${styleAttribute};`;
	}
	
	/**
	 * Get the CSS of the element from media queries.
	 * @private
	 */
	private mediaQueryCSS(): CSSResult {
		const mediaQueries: CSSMediaRule[] = this.rules.filter((rule: CSSRule) => {
			if (rule instanceof CSSMediaRule) {
				return (window.matchMedia(rule.conditionText).matches && getNumber(rule.conditionText));
			}
			
			return false;
		}) as CSSMediaRule[];
		
		// const mediaQueries = this.rules.filter(({
		// 																					conditionText,
		// 																					media
		// 																				}) => media && window.matchMedia(conditionText).matches && getNumber(conditionText));
		
		const mediaQueriesSorted: CSSMediaRule[] = mediaQueries.sort((a: CSSMediaRule, b: CSSMediaRule): number => {
			const aMedia: number = getNumber(a.conditionText);
			const bMedia: number = getNumber(b.conditionText);
			
			if (aMedia > bMedia) return -1;
			if (bMedia > aMedia) return 1;
			
			return 0;
		});
		
		return mediaQueriesSorted.reduce<CSSResult>(
			(result: CSSResult, media: CSSMediaRule) => {
				if (media.cssRules) {
					const filteredRules: CSSRule[] = filterRules(this.element, Array.from(media.cssRules));
					const {css, hover}: CSSResult = extractCSS(filteredRules);
					
					result.css += css;
					result.hover += hover;
				}
				
				return result;
			},
			{css: '', hover: ''}
		);
	}
	
	/**
	 * Get the CSS of the element from stylesheets.
	 * @private
	 */
	private css(): CSSResult {
		const filteredRules: CSSRule[] = filterRules(this.element, this.rules);
		
		return extractCSS(filteredRules);
	}
}