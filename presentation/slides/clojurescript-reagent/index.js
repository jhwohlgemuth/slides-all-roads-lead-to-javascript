import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
    <CodeSlide
        bgColor="secondary"
        transition={[]}
        lang="clojure"
        showLineNumbers={false}
        code={`
(ns example
  (:require [reagent.core :as r]))

(defn greeting []
  [:button "Hello!"])

(r/render-component [greeting]
  (.-body js/document)))`
        }
        ranges={[
            {loc: [0, 11], title: 'Reagent'},
            {loc: [1, 3], title: 'Reagent'},
            {loc: [4, 7], title: 'Reagent'},
            {loc: [7, 11], title: 'Reagent'}
        ]}/>
);
