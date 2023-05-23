import ColorThief from "colorthief/dist/color-thief";

export default class Colours{
    getTextColor(rgb) {
        const brightness = Math.round(((parseInt(rgb[0]) * 299)
            + (parseInt(rgb[1]) * 587)
            + (parseInt(rgb[2]) * 114)) / 1000);
        return (brightness > 125) ? 'black' : 'white';
    }

    convertToHex(rgb) {
        const color = rgb.map((num) => {
            const hex = num.toString(16);

            return hex.length === 1 ? `0${hex}` : hex;
        }).join('');

        return `#${color}`;
    }

    async getImagePalette(image) {
        try {
            const colorThief = new ColorThief();
            const palette = await colorThief.getPalette(image);
            const colors = palette.map((rgb) => ({
                hex: this.convertToHex(),
                title: this.getTextColor(rgb),
            }));

            sessionStorage.setItem('color-palettes', JSON.stringify(colors));

            return colors;
        } catch (err) {
            console.error(err);
        }
    }
}

// const imageColorPalette = new ImageColorPalette();
// const image = document.getElementById('my-image');
// const palette = await imageColorPalette.getImagePalette(image);
