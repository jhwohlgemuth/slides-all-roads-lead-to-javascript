import React from 'react';
import {Appear, Fill, Heading, Layout, Slide, Text} from 'spectacle';

export default (
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <Heading textColor="primary">Mix & Match</Heading>
        <Layout>
            <Appear>
                <Fill>
                    <Heading size={5} textColor="tertiary">This</Heading>
                    <Text textColor="primary">OCaml</Text>
                    <Text textColor="primary">Lisp</Text>
                    <Text textColor="primary">Java</Text>
                    <Text textColor="primary">.NET</Text>
                    <Text textColor="primary">FP</Text>
                </Fill>
            </Appear>
            <Appear>
                <Fill>
                    <Heading size={5} textColor="tertiary" fit> + Platform = </Heading>
                    <Text textColor="primary">Browser</Text>
                    <Text textColor="primary">JVM / Browser</Text>
                    <Text textColor="primary">JVM / Browser</Text>
                    <Text textColor="primary">Browser</Text>
                    <Text textColor="primary">Browser</Text>
                </Fill>
            </Appear>
            <Appear>
                <Fill>
                    <Heading size={5} textColor="tertiary">That</Heading>
                    <Text textColor="primary">ReasonML</Text>
                    <Text textColor="primary">ClojureScript</Text>
                    <Text textColor="primary">Kotlin</Text>
                    <Text textColor="primary">F#</Text>
                    <Text textColor="primary">Elm</Text>
                </Fill>
            </Appear>
        </Layout>
    </Slide>
);
