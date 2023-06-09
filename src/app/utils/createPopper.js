import { createPopper } from '@popperjs/core';

export default function ({ container = null, content, options = {} }) {
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