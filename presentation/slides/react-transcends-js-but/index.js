import React from 'react';
import {BlockQuote, Cite, Quote, S, Slide} from 'spectacle';

export default (
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <BlockQuote>
            <Quote>Knowing React.js is <S type="italic">not a requirement</S> for ClojureScript, ReasonML, F#, or Elm</Quote>
            <Cite>Me</Cite>
        </BlockQuote>
    </Slide>
);
