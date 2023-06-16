
export const navigation = [
    {
        id: 'element-properties',
        name: 'Element Properties',
        icon: 'cursor',
        active: true
    },
    {
        id: 'page-assets',
        name: 'Page Assets',
        icon: 'document-search',
        active: true
    },
    {
        id: 'page-color-palette',
        name: 'Page Color Palette',
        icon: 'palette',
        active: true
    },
    {
        id: 'tools',
        name: 'Cool Tools',
        icon: 'wrench',
        active: true
    },
    {
        id: 'settings',
        name: 'App Settings',
        icon: 'settings',
        active: true
    },
];

export const shortcutsOptions = [
    {
        label: 'Exit extension',
        value: {
            slug: 'exit-app',
            description: "Turning off the extension work. Fast and simple. You also can customize your hotkeys.",
            buttons: [
                'Esc'
            ]
        },
    },
    {
        label: 'Freeze/Pause app',
        value: {
            slug: 'pause-app',
            description: "Pauses or Freezes the app, it's up to you. It mean that the cursor activity will not be tracked. You also can customize your hotkeys.",
            buttons: [
                'f'
            ]
        },
    },
    {
        label: 'Copy CSS',
        value: {
            slug: 'copy-css',
            description: "Just copying the CSS from the selected element, for faster changes migration! You also can customize your hotkeys.",
            buttons: [
                'c'
            ]
        },
    },
    {
        label: 'Display outline/grid',
        value: {
            slug: 'display-outline',
            description: "Displaying the outline for all elements, as every second extension from Web Store with 'CSS' in it's name. You also can customize your hotkeys.",
            buttons: [
                'g'
            ]
        },
    },
    {
        label: 'Display background',
        value: {
            slug: 'display-background',
            description: "Nothing special! Just displaying background for all elements. You also can customize your hotkeys.",
            buttons: [
                'b'
            ]
        },
    },
    {
        label: 'Move extension to Left',
        value: {
            slug: 'move-extension-left',
            description: "Move extension window to the left, if it makes you uncomfortable on the right side of the screen. You also can customize your hotkeys.",
            buttons: [
                'Ctrl',
                '←',
            ]
        },
    },
    {
        label: 'Move extension to Right',
        value: {
            slug: 'move-extension-right',
            description: "Basically the same thing as above, but backwards. You also can customize your hotkeys.",
            buttons: [
                'Ctrl',
                '→',
            ]
        },
    },
    {
        label: 'Stop/Cancel current work',
        value: {
            slug: 'stop-work',
            description: "Stop or Cancel the app, it's up to you. This one basically brings you to the welcome page. You also can customize your hotkeys.",
            buttons: [
                's',
            ]
        },
    },
    {
        label: 'Start extension work',
        value: {
            slug: 'start-app',
            description: "Yes! You can activate extension by hotkey. This one is not customizable due to a small amount of available combinations.",
            buttons: [
                'Shift',
                'Alt',
                'o',
            ]
        },
    },
];

export const appActiveMenu = [
    {
        id: '',
        name: '',
        icon: '',
    },
];
export const debugDropdown = [
    {
        id: '',
        name: '',
        icon: '',
    },
];

export const ex = [
    {
        id: '',
        name: '',
        icon: '',
    },
];