import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
    <CodeSlide
        bgColor="secondary"
        transition={[]}
        lang="kotlin"
        showLineNumbers={false}
        code={`
typealias Predicate = (Int) -> Boolean
typealias Morphism = (Int) -> Int
typealias Callback = (Int) -> Unit

val isEven: Predicate = {it % 2 == 0}
val timesTen: Morphism = {it * 10}
val log: Callback = {println(it)}

(1..100)
    .filter(isEven)
    .map(timesTen)
    .forEach(log);
`
        }
        ranges={[
            {loc: [0, 1], title: 'Kotlin'},
            {loc: [1, 4], title: 'Kotlin'},
            {loc: [4, 9], title: 'Kotlin'},
            {loc: [9, 13], title: 'Kotlin'},
            {loc: [0, 13], title: 'Kotlin'},
            {loc: [0, 13], title: 'Kotlin', note: 'No lawyer required!'}
        ]}/>
);
