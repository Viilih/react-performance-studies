# React Performance

This repository contains notes from my studies on React performance.

Before you start using memoization and useCallback everywhere, first identify why your application is slow.
Doing this will help you avoid a lot of unnecessary work.
Once you find the cause, try to isolate the state of your components — that's usually a good first move!

Ideally, to prevent future performance issues, you should isolate state and logic as much as possible into small, lightweight components.
