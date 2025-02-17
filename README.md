# React 19 useEffect Bug

This repository demonstrates a bug in React 19 where the `useEffect` hook runs after every render, even when a dependency array is specified. This can cause performance problems and lead to unexpected behavior.

## Bug Description

In React 18 and earlier, `useEffect` with a dependency array was only triggered when the values in the dependency array changed. In React 19, in some edge cases, this behavior is not guaranteed, causing unexpected re-renders. The example provided shows an `useEffect` hook that logs a message after every render, even though its only dependency is the `count` state variable.

## Solution

The solution involves using `useRef` to track changes over time, avoiding unnecessary re-renders of the effect.

## How to reproduce the bug

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console output, which shows the log message being printed even though only the `count` changes.

## How to fix the bug

1. Clone the repository.
2. Run `npm install`.
3. Check out the `solution` branch.
4. Run `npm start`.
5. Observe that the console output is as expected.
