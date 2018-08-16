---
title: Why so complicated
createdDate: '2018-03-29'
updatedDate: '2018-03-29'
author: sielay
tags:
  - javascript
  - typescript
  - architecture
  - project
  - mvp
draft: false
---

Sometimes it's worth to share an opinion. But as I decided to go more [with the facts](https://sielay.com/blog/2018/01/21/hello-again/) I'm going to base it on some recent experiences.

If you observe JavaScript scene you can see that there is not only fight between frameworks but also between old state of art and language moving forward. I sympathise with both sides, to some point. JavaScript is a strange language, but it does have [Good Parts](https://www.amazon.co.uk/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742). We can "fix" them using some dialects transcripted to JavaScript or using frameworks. Both help us a lot but can cause more problems. Let me list you situations where complicating things, which could be done simply in old JavaScript and without frameworks for me worked better and worse. Sometimes I'd compare older tools and frameworks to new rather than language.

What went blazingly fast:

-   Introducing TypeScript added an extra layer of [stability to the code](http://sielay.com/blog/2018/01/28/type-script-as-a-defense/) with little overheads.
-   Angular (1, 2 and 4) allowed to fast build admin panels and business kind SPAs.
-   React helped to build in the blink of the eye more complex apps keeping big code readability.
-   Redux just by the use of it reduced most of memory and update issues in the apps.

What went terribly:

-   WebPack in commercial and OS projects ate massive time to be configured. Used gulp instead.
-   Gatsby, as grate it is because webpack and webpack-ish config starts to be bit unpredictable and breaks almost every time I move on to new thing (Jekyll was dull, but worked).
-   Angular because it's made for SPAs made it almost impossible to build a widget based app that used something lighter to build the grid.

Outside of JS:

-   Docker removed 80% of configuration and migration issues.
-   Docker sucks (if starts) on Windows

Theory:

> For fun and learning it's good to take new stuff, but if they don't save time keep old for work

What are your thoughts?
