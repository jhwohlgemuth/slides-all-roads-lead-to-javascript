import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
    <CodeSlide
        bgColor="secondary"
        transition={[]}
        lang="elm"
        showLineNumbers={false}
        code={`
import Html exposing (beginnerProgram)
import Html exposing (div, button, text)
import Html.Events exposing (onClick)
main =
  beginnerProgram {
      model = model,
      view = view,
      update = update
  }
-- MODEL
model = 0
-- UPDATE
type Msg = Inc | Dec
update msg model =
  case msg of
    Inc ->
      model + 1
    Dec ->
      model - 1
-- VIEW
view model =
  div []
    [ button [ onClick Dec ] [ text "-" ]
    , div [] [ text (toString model) ]
    , button [ onClick Inc ] [ text "+" ]
    ]
`
        }
        ranges={[
            {loc: [0, 1], title: 'Elm'},
            {loc: [1, 4]},
            {loc: [4, 10]},
            {loc: [10, 12]},
            {loc: [12, 20]},
            {loc: [13, 14]},
            {loc: [14, 20]},
            {loc: [17, 18]},
            {loc: [19, 20]},
            {loc: [20, 27]},
            {loc: [21, 22]},
            {loc: [22, 27]}
        ]}/>
);
