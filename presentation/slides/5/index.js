import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
    <CodeSlide
        bgColor="secondary"
        transition={[]}
        lang="javascript"
        showLineNumbers={false}
        code={`const scouter = () => {
    const levels = [9000, 9001, 9002];
    return levels
        .map(level => level - 1)
        .filter(level > 9000)
        .forEach(() => console.log('Over 9000!'));
}`}
        ranges={[
            {loc: [0, 7], title: 'Code'},
            {loc: [0, 1], title: 'More code'},
            {loc: [1, 2]},
            {loc: [1, 2], title: 'Read the note', note: 'Heres a note!'}
        ]}/>
);
