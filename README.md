# Entrega 2.1: Funció debounce - Andrea Réthy

## Introduction

What is a debounce function? Debounce is used to defer actions after an input to avoid multiple actions. For example if a user double clicks on a button it should still execute only once.

Debounce time does depend on use-case. Humans don't notice the delay if it is less than 50ms, but debounce could be up to 500ms.

How to test debounce: The idea is to test that a rapidly executed function only returns once. Also test that debounce is not accumulating (if a second debounce is started, cancel the remaining time from the first.
