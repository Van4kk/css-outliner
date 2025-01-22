import { createPopper } from '@popperjs/core';

type PopperOptions = {
		container: HTMLElement | null;
		content: any;
		options: any;
}

export default function ({ container = null, content, options = {} }: PopperOptions) {
    if (container === null) throw new Error('container is required');

    return createPopper(container, content, {
        placement: 'top',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [20, 20],
                },
            },
        ],
        ...options,
    });
}
