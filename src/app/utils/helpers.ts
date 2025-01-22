/**
 * Initialize the DOMRect object with the given values.
 * @param x
 * @param y
 */
export const generateGetBoundingClientRect = (x = 0, y = 0) => (): DOMRect => ({
	width: 0,
	height: 0,
	top: y,
	right: x,
	bottom: y,
	left: x,
	x,
	y,
	toJSON: () => ({})
});

export interface BoxModelStyles {
	marginTop?: string | number;
	marginRight?: string | number;
	marginBottom?: string | number;
	marginLeft?: string | number;
	paddingTop?: string | number;
	paddingRight?: string | number;
	paddingBottom?: string | number;
	paddingLeft?: string | number;
}

/**
 * Generate the box model classes.
 * @param name
 */
export function generateBoxModels(name: string): BoxModelStyles {
	const directions: string[] = ['top', 'right', 'bottom', 'left'];
	
	// Return properties in camelCase, e.g., 'margin-top', 'padding-right', etc.
	// return directions.map((direction: string): string => `${name}-${direction}`);
	
	// Return properties in camelCase, e.g., 'marginTop', 'paddingRight', etc.
	// return directions.map((direction: string): string => `${name}${direction.charAt(0).toUpperCase() + direction.slice(1)}`) as (keyof BoxModelStyles)[];
	const boxModel: BoxModelStyles = {} as BoxModelStyles;
	
	directions.forEach((direction: string): void => {
		const key: keyof BoxModelStyles = `${name}${direction.charAt(0).toUpperCase() + direction.slice(1)}` as keyof BoxModelStyles;
		
		boxModel[key] = '';
	});
	
	return boxModel;
}

/**
 * Removes the px from the string.
 * @param str
 */
export function removePx(str: string): string | number {
	if (str === "fontFamily") return "";
	
	const value = str.replace("px", "");

	return +value === 0 ? "-" : Math.floor(+value);
}

/**
 * Filters the classes.
 * @param classes
 */
export function filterClasses(classes: string[]): string {
	const blackListClasses: string[] = ['hover-element', 'active-element'];
	const filtered: string[] = classes.filter((name: string) => !blackListClasses.includes(name));
	
	return filtered.length !== 0 ? `.${filtered.join('.')}` : '';
}

export interface CSSResult {
	css: string;
	hover: string;
}

/**
 * Extracts the CSS from the rules.
 * @param rules
 * @returns {{hover: string, css: string}}
 */
export function extractCSS(rules: CSSRule[]): CSSResult {
	const result: CSSResult = {css: '', hover: ''};
	
	rules.forEach((rule: CSSRule): void => {
		const styleRule: CSSStyleRule = rule as CSSStyleRule;

		// Skip the pseudo-elements
		if (/\:\:before|\:\:after|\*/g.test(styleRule.selectorText)) return;

		// Check if the rule is a hover rule
		if (/\:hover/g.test(styleRule.selectorText)) {
			result.hover += styleRule.style.cssText;
			
			return;
		}
		
		result.css += styleRule.style.cssText;
	});
	
	return result;
}

/**
 * Removes the duplicate CSS properties.
 * @param css
 * @returns {*}
 */
export function removeDuplicateCSS(css: string): string {
	const seen = new Set<string>();
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

/**
 * Gets the number from the string.
 * @param text
 */
export function getNumber(text: string): number {
	return +text.replace(/\D/g, '');
}

/**
 * Filters the rules.
 * @param element
 * @param rules
 */
export function filterRules(element: Element, rules: CSSRule[]): CSSRule[] {
	return Array.from(rules).filter((rule: CSSRule): boolean =>
		(rule as CSSStyleRule).selectorText ? element.matches((rule as CSSStyleRule).selectorText) : false
	);
	// return rules.filter(({selectorText}) => element.matches(selectorText));
}

/**
 * Sets the attributes to the given element.
 * @param element
 * @param object
 */
export function setAttributes(element: HTMLElement, object: Record<string, string | number | boolean>): void {
	// for (let prop in obj) {
	// 	if (obj.hasOwnProperty(prop)) {
	// 		elem[prop] = obj[prop];
	// 	}
	// }
	for (const prop in object) {
		if (Object.prototype.hasOwnProperty.call(object, prop)) {
			(element as any)[prop] = object[prop];
		}
	}
}

/**
 * Calculates the property value.
 * @param propName
 * @param originalValue
 * @param modificator
 */
export function calculatePropertyValue(propName: string, originalValue: string, modificator: number): Record<string, string> {
	const timeQuantityOuter: number = parseFloat(originalValue.match(/^\d*\.?\d+/)?.[0] || "0");
	const timeUnit: string = originalValue.match(/s|ms$/)?.[0] || "";
	const timeQuantityInner: number = Math.round(timeQuantityOuter * 1000 * modificator) / 1000;
	
	return {[propName]: timeQuantityInner + timeUnit};
}

/**
 * Validates the duration.
 * @param duration
 */
export function validateDuration(duration: string): boolean {
	const re: RegExp = /^\d*\.?\d+(s|ms)$/;
	return re.test(duration);
}

/**
 * Injects the CSS to the document.
 * @param contentCss
 */
export function addAppCss(contentCss: string): () => void {
	const appStyles: HTMLStyleElement = document.createElement('style');
	appStyles.innerText = contentCss;
	
	document.body.appendChild(appStyles);
	
	return (): void => {
		document.body.removeChild(appStyles);
	};
}

/**
 * Verifies if an identical element exists.
 * @param element
 */
export function isIdenticalExisting(element: string): Element | null {
	return document.querySelector(element);
}

/**
 * Prepares the string.
 * @param string
 */
export function prepareString(string: string): string {
	let formattedString: string = string.replace(/[^\w\s-]/g, '');
	
	formattedString = formattedString.replace(/\b\w/g, (match: string) => match.toUpperCase());
	formattedString = formattedString.replace(/-/g, ' ');
	
	return formattedString;
}

/**
 * Gets the element's attributes.
 * @param element
 * @param avoidAttributes
 */
export function getFilteredAttributes(element: HTMLElement, avoidAttributes: string[]): Record<string, string> {
	const attributes: Record<string, string> = {};
	
	Array.from(element.attributes).forEach((attr: Attr): void => {
		const {name, value} = attr;
		
		if (!avoidAttributes.includes(name)) {
			attributes[name] = value;
		}
	});
	
	return attributes;
}

/**
 * Optimizes the text color based on the background color.
 * @param background
 */
export function optimizeTextColor(background: string): string {
	const rgb: number[] = background
		.replace(/[^\d,]/g, '')
		.split(',')
		.map(Number);
	
	const [
		red,
		green,
		blue
	] = rgb;
	
	const luminance: number = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
	
	const threshold = 0.5;
	
	return luminance > threshold ? '#000000' : 'rgba(188, 201, 219, 1)';
}

/**
 * Converts the color to hex format.
 * @param color
 */
export function convertToHex(color: string): string {
	// Check if the color is in RGB format
	if (color.startsWith('rgb')) {
		const rgb = color.match(/\d+/g)?.map(Number);
		
		if (!rgb || rgb.length < 3) return color;
		
		const [r, g, b] = rgb;
		
		const hex = [r, g, b]
			.map((num) => num.toString(16).padStart(2, '0'))
			.join('');
		
		return `#${hex}`;
	}
	
	// Check if the color is in RGBA format
	if (color.startsWith('rgba')) {
		const rgba = color.match(/\d+/g)?.map(Number);
		
		if (!rgba || rgba.length < 4) return color;
		
		const [r, g, b] = rgba.slice(0, 3);
		const alpha = Math.round(rgba[3] * 255);
		const hex = [r, g, b].map((num) => num.toString(16).padStart(2, '0')).join('');
		
		return `#${hex}${alpha.toString(16).padStart(2, '0')}`;
	}
	
	// Check if the color is in HSLA format
	if (color.startsWith('hsla')) {
		const hsla = color.match(/\d+/g)?.map(Number);
		
		if (!hsla || hsla.length < 4) return color;
		
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

/**
 * Converts the HSL color to RGB format.
 * @param hue
 * @param saturation
 * @param lightness
 */
export function hslToRgb(hue: number, saturation: number, lightness: number): number[] {
	let red: number, green: number, blue: number;
	
	if (saturation === 0) {
		red = green = blue = lightness; // achromatic
	} else {
		const hue2rgb = (p: number, q: number, t: number): number => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			
			if (t < 1 / 2) return q;
			
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			
			return p;
		};
		
		const q: number = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
		const p: number = 2 * lightness - q;
		
		red = hue2rgb(p, q, hue + 1 / 3);
		green = hue2rgb(p, q, hue);
		blue = hue2rgb(p, q, hue - 1 / 3);
	}
	
	return [Math.round(red * 255), Math.round(green * 255), Math.round(blue * 255)];
}
