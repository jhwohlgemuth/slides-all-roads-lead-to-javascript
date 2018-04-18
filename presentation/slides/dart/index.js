import React from 'react';
import {BlockQuote, Cite, Link, Quote, S, Slide} from 'spectacle';

export default (
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <BlockQuote>
            <Quote>[W]e have decided not to integrate the Dart VM into Chrome.</Quote>
            <Cite><Link textColor="tertiary" target="_blank" href="https://news.dartlang.org/2015/03/dart-for-entire-web.html">The Dart Team Blog (2015)</Link></Cite>
        </BlockQuote>
    </Slide>
);
