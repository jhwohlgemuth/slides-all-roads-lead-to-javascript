import React from 'react';
import {Heading, Slide, Text} from 'spectacle';

export default (
    <Slide transition={['zoom']} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        All Roads Lead to JS
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        JavaScript as a build target
        </Text>
    </Slide>
);
