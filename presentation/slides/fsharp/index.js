import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
    <CodeSlide
        bgColor="secondary"
        transition={[]}
        lang="fsharp"
        showLineNumbers={false}
        code={`
module App
open Fable.Core
open Fable.Import
open Elmish
open Elmish.React
open Fable.Core.JsInterop
open Fable.Helpers.React.Props
module R = Fable.Helpers.React
// MODEL
type Model = int
type Msg =
| Inc
| Dec
let init() : Model = 0
// UPDATE
let update (model:Model) = function
    | Inc -> model + 1
    | Dec -> model - 1
// VIEW (rendered with React)
let view dispatch model =
  R.div []
    [R.button [OnClick (fun _ -> dispatch Dec)] [R.str "-"]
      R.div [] [R.str (sprintf "%A" model)]
      R.button [OnClick (fun _ -> dispatch Inc)] [R.str "+"]]
// App
Program.mkSimple init update view
|> Program.withConsoleTrace
|> Program.withReact "elmish-app"
|> Program.run
`
        }
        ranges={[
            {loc: [0, 1], title: 'Elmish (F#)'},
            {loc: [1, 2]},
            {loc: [2, 9]},
            {loc: [9, 15]},
            {loc: [11, 14]},
            {loc: [15, 19]},
            {loc: [19, 25]},
            {loc: [20, 21]},
            {loc: [22, 25]},
            {loc: [25, 30]}
        ]}/>
);
