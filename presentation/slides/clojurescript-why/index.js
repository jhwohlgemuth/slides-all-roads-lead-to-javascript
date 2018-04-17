import React from 'react';
import {BlockQuote, Cite, Quote, Slide} from 'spectacle';

export default (
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <BlockQuote>
            <Quote>Why are we doing this? Because Clojure rocks, and JavaScript reaches.</Quote>
            <Cite>Rich Hickey (creator of ClojureScript)</Cite>
        </BlockQuote>
    </Slide>
);
