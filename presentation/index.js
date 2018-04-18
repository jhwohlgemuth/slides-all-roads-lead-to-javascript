import Promise from 'bluebird';
import React from 'react';
import {Deck, Slide} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
require('normalize.css');
require('prismjs/themes/prism-funky.css');

import 'prismjs'
import 'prismjs/components/prism-kotlin';
import '../prism-overrides/elm';
import '../prism-overrides/clojure';
import '../prism-overrides/fsharp';
import '../prism-overrides/reason';
import '../prism-overrides/rust';

window.images = {
    roads: require('../assets/roads.gif'),
    iceberg: require('../assets/iceberg.jpg'),
    city: require('../assets/city.jpg')
};

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
    import('./slides/title'),
    import('./slides/agenda'),
    import('./slides/why'),
    import('./slides/what-to-look-for'),
    import('./slides/ffi'),
    import('./slides/mix-and-match'),
    import('./slides/react'),
    import('./slides/react-transcends-js'),
    import('./slides/react-transcends-js-but'),
    import('./slides/react-transcends-js-but-but'),
    import('./slides/reason'),
    import('./slides/reason-react'),
    import('./slides/clojurescript'),
    import('./slides/clojurescript-why'),
    import('./slides/clojurescript-reagent'),
    // import('./slides/clojurescript-figwheel'),
    import('./slides/elm'),
    import('./slides/fsharp'),
    import('./slides/kotlin'),
    import('./slides/dart'),
    // import('./slides/live-demo'),
    import('./slides/iceberg')
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
        console.log(this);
        return (
            <Deck transition={[]} transitionDuration={0} theme={theme}>
                {
                    slides.map((slide, index) => React.cloneElement(slide, {key: index}))
                }
            </Deck>
        );
    }
}
