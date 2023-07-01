/**
 * @author https://github.com/Kholid060/inspect-css/blob/master/src/utils/globalEvent.js
 */
export default class GlobalEvent {

    static init(callback) {
        this.callback = callback;
        this.bindMouseEvent = this.clickHandler.bind(this);
        this.bindKeyupEvent = this.keyupHandler.bind(this);

        this.addListener();
    }

    static addListener() {
        window.addEventListener('click', this.bindMouseEvent);
        document.addEventListener('keyup', this.bindKeyupEvent);
    }

    static removeListeners() {
        window.removeEventListener('click', this.bindMouseEvent);
        document.removeEventListener('keyup', this.bindKeyupEvent);
    }

    static keyupHandler({ code, ctrlKey }) {
        if (ctrlKey && code === 'Space') {
            const target = document.querySelector('.css-outliner-hovered-element');

            this.eventHandler(target);
        }
    }

    static clickHandler({ target }) {
        this.eventHandler(target);
    }

    static eventHandler(target) {
        const isPaused = document.body.classList.contains('css-outliner-display-pause');
        const isMatchExtensionElement = target.matches('#css-outliner,[css-outliner-selected-element],html');

        if (isMatchExtensionElement || isPaused) return;

        const activeElement = document.querySelector('[css-outliner-selected-element]');
        activeElement?.removeAttribute('css-outliner-selected-element');

        target.setAttribute('css-outliner-selected-element', '');
        target.classList.remove('css-outliner-hovered-element');

        this.callback();
    }
}