import React from 'react';
import {Appear, Heading, List, ListItem, S, Slide, Text} from 'spectacle';

export default (
    <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={4} textColor="primary" caps>Agenda</Heading>
        <List textAlign="left">
            <Appear><ListItem size={6} textColor="secondary">Why look at other languages?</ListItem></Appear>
            <Appear><ListItem size={6} textColor="secondary">What to look for in a language</ListItem></Appear>
            <Appear><ListItem size={6} textColor="secondary">Foreign Function Interfaces (FFI)</ListItem></Appear>
            <Appear><ListItem size={6} textColor="secondary">The joy of "mix and match"</ListItem></Appear>
            <Appear><ListItem size={6} textColor="secondary">Language exploration!</ListItem></Appear>
            <Appear><ListItem size={6} textColor="secondary">The Curious case of Dart</ListItem></Appear>
            <Appear><ListItem size={6} textColor="secondary"><S type="strikethrough">How to gradually add to your JS project</S></ListItem></Appear>
            <Appear><ListItem size={6} textColor="secondary"><S type="strikethrough">Interoperability Demo!</S></ListItem></Appear>
        </List>
    </Slide>
);
