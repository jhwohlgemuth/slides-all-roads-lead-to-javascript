import React from 'react';
import {Appear, Heading, List, ListItem, Slide, Text} from 'spectacle';

export default (
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
        <Heading size={5} textColor="secondary" caps fit>What to look for in a language?</Heading>
        <List>
            <Appear><ListItem>Targeted platform(s)</ListItem></Appear>
            <Appear><ListItem>Interoperability</ListItem></Appear>
            <Appear><ListItem>Community (interest, idioms, etc...)</ListItem></Appear>
            <Appear><ListItem>Community (code sharing)</ListItem></Appear>
            <Appear><ListItem>Documentation</ListItem></Appear>
            <Appear><ListItem>Tooling ecosystem</ListItem></Appear>
            <Appear><ListItem>Testing story</ListItem></Appear>
            <Appear><ListItem>Language features (syntax, typing, etc...)</ListItem></Appear>
            <Appear><ListItem>Libraries and Frameworks</ListItem></Appear>
        </List>
    </Slide>
);
