# htmlearn
Scaffolded HTML creation scenarios with a live-preview IDE.

Play with the deployed version on [TeCanal](https://tecanal.org/htmlearn).

Created by [Rees Draminski](https://github.com/reesdraminski).

## Stages
1. Meme Maker: Learn basic tags and styling.
2. Comic Creator: Learn CSS classes and inline styling.
3. Blog Publisher: Learn more tags and advanced styling.

## Code
* [js/editor.js](js/editor.js): UI controls and functionality (CodeMirror setup, code execution, etc).

## Dependencies
* [CodeMirror](https://codemirror.net/): This is used to create the editor environment.
* [LZMA-JS](https://github.com/LZMA-JS/LZMA-JS): This is used to use LZMA compression on code content for the Share Code link feature.
* [jQuery](https://jquery.com/): This is only for jQuery-resizable, hopefully I can find a vanilla implementation or write my own in the future.
* [jQuery-resizable](https://github.com/RickStrahl/jquery-resizable): This is used to make the resizable split panel view in the application.