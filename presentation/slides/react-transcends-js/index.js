import React from 'react';
import {BlockQuote, Cite, Quote, Slide} from 'spectacle';

export default (
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <BlockQuote>
            <Quote>If you know React.js, you are halfway to being productive with ClojureScript, ReasonML, F#, and/or Elm</Quote>
            <Cite>Me</Cite>
        </BlockQuote>
    </Slide>
);
