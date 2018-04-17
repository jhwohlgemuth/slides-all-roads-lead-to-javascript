import Promise from 'bluebird';
import React from 'react';
import {Deck, Slide} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import 'prismjs';
require('normalize.css');
require('prismjs/themes/prism-funky.css');

const theme = createTheme({
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE'
}, {
    primary: 'Montserrat',
    secondary: 'Helvetica'
});

const SLIDES = [
    import('./slides/1'),
    import('./slides/2'),
    import('./slides/3'),
    import('./slides/4'),
    import('./slides/5')
];

export default class Presentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: Array(SLIDES.length).fill(<Slide key="loading..." />)
        };
    }
    componentDidMount() {
        Promise.all(SLIDES)
            .then(importedSlides => {
                const slides = importedSlides.map(slide => slide.default);
                this.setState({slides});
                return slides;
            })
            .catch(error => {
                throw error;
            });
    }
    render() {
        const {slides} = this.state;
        const header = document.getElementsByTagName('h1');
        console.log(header);
        return (
            <Deck transition={[]} transitionDuration={0} theme={theme}>
                {
                    slides.map((slide, index) => React.cloneElement(slide, {key: index}))
                }
            </Deck>
        );
    }
}
