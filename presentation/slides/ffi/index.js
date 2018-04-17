import React from 'react';
import {BlockQuote, Cite, Quote, Slide} from 'spectacle';

export default (
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <BlockQuote>
            <Quote>...a mechanism by which a program written in one programming language can call routines or make use of services written in another</Quote>
            <Cite>"Foreign function interface" definition on Wikipedia</Cite>
        </BlockQuote>
    </Slide>
);
