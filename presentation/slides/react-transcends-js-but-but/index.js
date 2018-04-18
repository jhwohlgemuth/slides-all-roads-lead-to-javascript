import React from 'react';
import {BlockQuote, Cite, Quote, S, Slide} from 'spectacle';

export default (
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <BlockQuote>
            <Quote>Being adept at functional programming is not a requirement for ClojureScript, ReasonML, F#, or Elm, <S type="italic">but it helps</S>.</Quote>
            <Cite>Me</Cite>
        </BlockQuote>
    </Slide>
);
