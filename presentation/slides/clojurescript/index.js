import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
    <CodeSlide
        bgColor="secondary"
        transition={[]}
        lang="clojure"
        showLineNumbers={false}
        code={`
(+ 1 2)
;; 3
(+ 1 2 3 4)
;; 10
(= 42 42)
;; true
(def condition true)
(if condition
    "This is the true branch"
    "This is the false branch")
(when condition
    (println "This is the true branch")
    "This is the false branch")
(map inc [1 2 3 4])
;; (2 3 4 5)
(reduce + [1 2 3 4])
;; 10
(js/alert "Hello World!")
(js/console.log "Hello World, again!")
(.html (js/jQuery "#myDiv") "Hi!")`
        }
        ranges={[
            {loc: [0, 1], title: 'ClojureScript'},
            {loc: [1, 2]},
            {loc: [3, 4]},
            {loc: [5, 6]},
            {loc: [7, 8]},
            {loc: [8, 11]},
            {loc: [11, 14]},
            {loc: [14, 15]},
            {loc: [16, 17]},
            {loc: [18, 20]},
            {loc: [20, 21]}
        ]}/>
);
