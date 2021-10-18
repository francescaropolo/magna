const theme = {
    colors: {
        white: '#FAFAFA',
        background: '#FFFCF8',
        black: '#333333',
        red: '#F94144',
        orange: '#F3722C',
        yellowOrange: '#F8961E',
        mango: '#F9844A',
        lightYellow: '#F9C74F',
        green: '#90BE6D',
        acquaGreen: '#43AA8B',
        darkAcquaGreen: '#4D908E',
        blueGrey: '#577590',
        blue: '#277DA1'
    },
    smQuery: "576px",
    mdQuery: "768px",
    lgQuery: "992px",
    xlQuery: "1200px",
    spacing: (value) => {
        return `${value * 10}px`
    },
    typography: {
        primaryFont: "'Merriweather', serif",
        secondaryFont: "'Montserrat', sans-serif",
    }
}

export default theme;
