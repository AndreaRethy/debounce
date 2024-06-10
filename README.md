# Entrega 2.1: Funció debounce - Andrea Réthy

## Introduction

What is a debounce function? Debounce is used to defer actions after an input to avoid multiple actions. For example if a user double clicks on a button it should still execute only once.

Debounce time does depend on use-case. Humans don't notice the delay if it is less than 50ms, but debounce could be up to 500ms.

How to test debounce: The idea is to test that a rapidly executed function only returns once. Also test that debounce is not accumulating (if a second debounce is started, cancel the remaining time from the first.

## Compiling to js

```
tsc src/cli-app.ts --outDir dist
```

## Execute in CLI

`<item>` should be the word you want to add to the list (string, without "")

```
node dist/cli-app.js add <item>
```

## Execute in Browser

To test the debounce function, type something in the text field and rapidly double click on the Submit button. It should only add the item once, after 300ms.

### Chrome

You can simply open the index.html file with Chrome.

### Safari

You will need to open the index.html file with a local server or with the liver server extension of vs code.
