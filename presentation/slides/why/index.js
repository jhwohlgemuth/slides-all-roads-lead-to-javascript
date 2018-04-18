import React from 'react';
import {Appear, Heading, List, ListItem, Slide} from 'spectacle';

export default (
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
        <Heading size={6} textColor="secondary" caps>Why Consider a new language?</Heading>
        <List>
            <Appear><ListItem>Sustainability – moar features!</ListItem></Appear>
            <Appear><ListItem>Performance – idiomatic and fast</ListItem></Appear>
            <Appear><ListItem>Experience – leverage what you have</ListItem></Appear>
            <Appear><ListItem>Experience – learn what you want</ListItem></Appear>
            <Appear><ListItem>Focused developer experience</ListItem></Appear>
            <Appear><ListItem>Low cost of entry</ListItem></Appear>
            <Appear><ListItem>fun :)</ListItem></Appear>
        </List>
    </Slide>
);
