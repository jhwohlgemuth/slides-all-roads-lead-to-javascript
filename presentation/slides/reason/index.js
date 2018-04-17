import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
    <CodeSlide
        bgColor="secondary"
        transition={[]}
        lang="reason"
        showLineNumbers={false}
        code={`
type person = Teacher | Director | Student(string);

let greeting = stranger =>
    switch (stranger) {
    | Teacher => "Hey professor!"
    | Director => "Hello director."
    | Student("Richard") => "Still here Ricky?"
    | Student(other) => "Hey, " ++ other ++ "."
    };

let log = x => Js.log(x);

[0, 1, 2, 3, 4, 5]
|> List.filter(x => x mod 2 == 0)
|> List.map(x => x * 10)
|> log;

let rec range = (start: int, stop: int) =>
    if (start >= stop) {
        [];
    } else {
        [start, ...range(start + 1, stop)];
    };

let add = (~x=?, ~y=0, ()) => x + y;
`
        }
        ranges={[
            {loc: [0, 1], title: 'ReasonML'},
            {loc: [1, 2]},
            {loc: [2, 11]},
            {loc: [8, 9], note: 'No ad hoc polymorphism (yet)'},
            {loc: [10, 13]},
            {loc: [13, 18]},
            {loc: [14, 16]},
            {loc: [16, 17]},
            {loc: [14, 18], note: 'Note: The pipe operator is a Stage 1 TC39 proposal'},
            {loc: [18, 25]},
            {loc: [18, 19]},
            {loc: [20, 21]},
            {loc: [22, 23]},
            {loc: [25, 26]},
            {loc: [0, 26]},
            {loc: [4, 5], note: 'NOT the same as JS switch'},
        ]}/>
);
