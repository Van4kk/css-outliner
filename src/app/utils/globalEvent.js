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
            const target = document.querySelector('.hover-element');

            this.eventHandler(target);
        }
    }

    static clickHandler({ target }) {
        this.eventHandler(target);
    }

    static eventHandler(target) {
        const isPaused = document.body.classList.contains('#css-outliner-display-pause');
        const isMatchExtensionElement = target.matches('#css-outliner,[selected-element],html');

        if (isMatchExtensionElement || isPaused) return;

        const activeElement = document.querySelector('[selected-element]');
        activeElement?.removeAttribute('selected-element');

        target.setAttribute('selected-element', '');
        target.classList.remove('hovered-element');

        this.callback();
    }
}