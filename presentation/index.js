import Promise from 'bluebird';
import React from 'react';
import {Deck, Slide} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
require('normalize.css');
require('prismjs/themes/prism-funky.css');

import 'prismjs'
import 'prismjs/components/prism-kotlin';
import '../assets/prism-overrides/elm';
import '../assets/prism-overrides/clojure';
import '../assets/prism-overrides/fsharp';
import '../assets/prism-overrides/reason';
import '../assets/prism-overrides/rust';

console.log(Prism);

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
    import('./slides/clojurescript-why'),
    import('./slides/clojurescript'),
    import('./slides/clojurescript-reagent'),
    // import('./slides/clojurescript-figwheel'),
    // import('./slides/elm'),
    // import('./slides/fsharp'),
    // import('./slides/kotlin'),
    // import('./slides/rust'),
    // import('./slides/dart'),
    // import('./slides/coffeescript-and-typescript'),
    // import('./slides/gradual-addition'),
    // import('./slides/live-demo')
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
        return (
            <Deck transition={[]} transitionDuration={0} theme={theme}>
                {
                    slides.map((slide, index) => React.cloneElement(slide, {key: index}))
                }
            </Deck>
        );
    }
}
