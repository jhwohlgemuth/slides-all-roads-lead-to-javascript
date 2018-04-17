import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
    <CodeSlide
        bgColor="secondary"
        transition={[]}
        lang="reason"
        showLineNumbers={false}
        code={`let component = ReasonReact.statelessComponent("Greeting");
let make = (~name, _children) => {
  ...component,
  render: _self =>
    <button>
      {ReasonReact.stringToElement("Hello!")}
    </button>
};`
        }
        ranges={[
            {loc: [0, 8], title: 'ReasonReact'},
            {loc: [0, 1], title: 'ReasonReact'},
            {loc: [1, 7], title: 'ReasonReact'},
            {loc: [1, 2], title: 'ReasonReact'},
            {loc: [2, 3], title: 'ReasonReact'},
            {loc: [3, 7], title: 'ReasonReact'},
            {loc: [4, 7], title: 'ReasonReact'},
            {loc: [4, 7], title: 'ReasonReact', note: 'Reason has built-in support for JSX'},
            {loc: [0, 7], title: 'ReasonReact'}
        ]}/>
);
