import {BoxModelStyles, filterClasses, generateBoxModels, removePx} from './helpers';

interface ElementCssStyles {
  boxModel?: BoxModelStyles;
  fontFamily?: string;
  color?: string;
  fill?: string;
  backgroundColor?: string;
}

interface ElementColor {
  fillColor: string;
  backgroundColor: string;
  color: string;
}

interface ElementSize {
  height: number;
  width: number;
}

interface ElementSelector {
  tag: string;
  id: string;
  classes: string;
}

interface ElementInfo {
  selector: ElementSelector;
  size: ElementSize;
  computedStyles: ElementCssStyles;
  allColors: ElementColor;
}

export class HtmlElement {
  /**
   * The reference to the element.
   * @private
   */
  private readonly reference: HTMLElement;
  
  /**
   * The computed style keys to get.
   * @private
   */
  private computedStyleKeys: (keyof ElementCssStyles)[];
  
  constructor(reference: HTMLElement) {
    this.reference = reference;
    this.computedStyleKeys = [
      // ...generateBoxModels('margin'),
      // ...generateBoxModels('padding'),
      'fontFamily',
      'color',
      'fill',
      'backgroundColor',
    ];
  }
  
  /**
   * Get the selectors of the element.
   * @returns {ElementSelector}
   */
  getSelector(): ElementSelector {
    return {
      tag: this.reference.tagName.toLowerCase(),
      id: this.reference.id ? `#${this.reference.id}` : '',
      classes: filterClasses(Array.from(this.reference.classList))
    };
  }
  
  /**
   * Get the size of the element.
   * @returns {ElementSize}
   */
  getSize(): ElementSize {
    const {height, width}: ElementSize = this.reference.getBoundingClientRect();
    
    return {height, width};
  }
  
  /**
   * Get the computed styles of the element.
   * @returns {ElementCssStyles}
   */
  getComputedStyles(): ElementCssStyles {
    const boxModel: BoxModelStyles = {
      ...generateBoxModels('margin'),
      ...generateBoxModels('padding')
    };
    
    return this.computedStyleKeys.reduce((styles: ElementCssStyles, key: keyof ElementCssStyles) => {
      const value = getComputedStyle(this.reference)[key];
      
      if (key === 'fontFamily') {
        styles[key] = value.split(',')[0].replace(/"/g, '');
      } else {
        styles[key] = removePx(value);
      }
      
      return styles;
    }, {boxModel} as ElementCssStyles);
  }
  
  // getComputedStyles(): ElementCssStyles {
  //  	return this.computedStyleKeys.reduce((styles: ElementCssStyles, key: keyof ElementCssStyles) => {
  // 		const value = getComputedStyle(this.reference)[key];
  //
  // 		styles[key] = key === 'fontFamily' ? value.split(',')[0].replace(/"/g, '') : removePx(value);
  //
  // 		return styles;
  // 	}, {} as ElementCssStyles);
  // }
  
  /**
   * Get the color of the element.
   */
  getColor(): string {
    return getComputedStyle(this.reference).color;
  }
  
  /**
   * Get the fill color of the element.
   * @returns {string}
   */
  getFillColor(): string {
    return getComputedStyle(this.reference).fill;
  }
  
  /**
   * Get the background color of the element.
   * @returns {string}
   */
  getBackgroundColor(): string {
    return getComputedStyle(this.reference).backgroundColor;
  }
  
  /**
   * Get all colors of the element.
   * @returns {ElementColor}
   */
  getAllColors(): ElementColor {
    return {
      color: this.getColor(),
      fillColor: this.getFillColor(),
      backgroundColor: this.getBackgroundColor()
    };
  }
  
  /**
   * Get all the information of the element.
   * @returns {ElementInfo}
   */
  getAll(): ElementInfo {
    return {
      selector: this.getSelector(),
      size: this.getSize(),
      computedStyles: this.getComputedStyles(),
      allColors: this.getAllColors()
    };
  }
}