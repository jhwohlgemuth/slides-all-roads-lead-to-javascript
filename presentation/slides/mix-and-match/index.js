import React from 'react';
import {Appear, Fill, Heading, Layout, Link, Slide, Text} from 'spectacle';

export default (
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <Heading textColor="primary">Mix & Match</Heading>
        <Layout>
            <Appear>
                <Fill>
                    <Heading size={5} textColor="tertiary" textAlign="right" margin="0 30px 0 0">This</Heading>
                    <Text textAlign="right" margin="0 30px 0 0" textColor="primary">OCaml</Text>
                    <Text textAlign="right" margin="0 30px 0 0" textColor="primary">Lisp</Text>
                    <Text textAlign="right" margin="0 30px 0 0" textColor="primary">Java</Text>
                    <Text textAlign="right" margin="0 30px 0 0" textColor="primary">.NET</Text>
                    <Text textAlign="right" margin="0 30px 0 0" textColor="primary">FP</Text>
                </Fill>
            </Appear>
            <Appear>
                <Fill padding="0 50px">
                    <Heading size={5} textColor="tertiary" fit> + Platform = </Heading>
                    <Text textColor="primary">Web</Text>
                    <Text textColor="primary">JVM / Web</Text>
                    <Text textColor="primary">JVM / Web</Text>
                    <Text textColor="primary">Web</Text>
                    <Text textColor="primary">Web</Text>
                </Fill>
            </Appear>
            <Appear>
                <Fill>
                    <Heading size={5} textColor="tertiary" textAlign="left" margin="0 0 0 30px">That</Heading>
                    <Link textAlign="left" target="_blank" href="https://reasonml.github.io/"><Text margin="0 0 0 30px" style={{'text-decoration': 'underline'}} textColor="primary">ReasonML</Text></Link>
                    <Link textAlign="left" target="_blank" href="https://clojurescript.org/"><Text margin="0 0 0 30px" style={{'text-decoration': 'underline'}} textColor="primary">Clojure</Text></Link>
                    <Link textAlign="left" target="_blank" href="https://kotlinlang.org/"><Text margin="0 0 0 30px" style={{'text-decoration': 'underline'}} textColor="primary">Kotlin</Text></Link>
                    <Link textAlign="left" target="_blank" href="http://fable.io/"><Text margin="0 0 0 30px" style={{'text-decoration': 'underline'}} textColor="primary">F#</Text></Link>
                    <Link textAlign="left" target="_blank" href="http://elm-lang.org/"><Text margin="0 0 0 30px" style={{'text-decoration': 'underline'}} textColor="primary">Elm</Text></Link>
                </Fill>
            </Appear>
        </Layout>
    </Slide>
);
