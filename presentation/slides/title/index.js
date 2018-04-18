import React from 'react';
import {Heading, Slide, Text} from 'spectacle';

export default (
    <Slide transition={['zoom']} bgImage={window.images.roads} bgDarken={0.50}>
        <Heading size={1} fit caps lineHeight={1} textColor="primary">
        All Roads Lead to JS
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        JavaScript as a build target
        </Text>
    </Slide>
);
