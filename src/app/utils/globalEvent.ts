export class GlobalEvent {
	/**
	 * Callback function
	 * @private
	 */
	private static callback: () => void;
	
	/**
	 * Mouse event handlers
	 * @private
	 */
	private static bindMouseEvent: (event: MouseEvent) => void;
	
	/**
	 * Keyboard event handlers
	 * @private
	 */
	private static bindKeyupEvent: (event: KeyboardEvent) => void;
	
	/**
	 * Initialize the class
	 * @param callback
	 */
	static init(callback: () => void): void {
		this.callback = callback;
		this.bindMouseEvent = this.clickHandler.bind(this);
		this.bindKeyupEvent = this.keyupHandler.bind(this);
		
		this.addListener();
	}
	
	/**
	 * Add all event listeners
	 */
	static addListener(): void {
		window.addEventListener('click', this.bindMouseEvent);
		document.addEventListener('keyup', this.bindKeyupEvent);
	}
	
	/**
	 * Remove all event listeners
	 */
	static removeListeners(): void {
		window.removeEventListener('click', this.bindMouseEvent);
		document.removeEventListener('keyup', this.bindKeyupEvent);
	}
	
	/**
	 * Keyup event handler
	 * @param event
	 * @private
	 */
	private static keyupHandler(event: KeyboardEvent): void {
		const {code, ctrlKey} = event;

		if (ctrlKey && code === 'Space') {
			const target: Element | null = document.querySelector('.css-outliner-hovered-element');
			
			this.eventHandler(target);
		}
	}
	
	/**
	 * Click event handler
	 * @param event
	 * @private
	 */
	private static clickHandler(event: MouseEvent): void {
		const target = event.target as Element;

		this.eventHandler(target);
	}
	
	/**
	 * General event handler
	 * @param target
	 * @private
	 */
	private static eventHandler(target: Element | null): void {
		if (!target) return;

		const isPaused: boolean = document.body.classList.contains('css-outliner-display-pause');
		const isMatchExtensionElement: boolean = target.matches('#css-outliner,[css-outliner-selected-element],html');
		
		if (isMatchExtensionElement || isPaused) return;
		
		const activeElement: Element | null = document.querySelector('[css-outliner-selected-element]');
		activeElement?.removeAttribute('css-outliner-selected-element');
		
		target.setAttribute('css-outliner-selected-element', '');
		target.classList.remove('css-outliner-hovered-element');
		
		this.callback();
	}
}
