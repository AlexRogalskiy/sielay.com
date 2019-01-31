---
title: 'setTimeout tells you much about a candidate'
createdDate: '2018-10-01'
updatedDate: '2018-10-01'
author: sielay
tags: [javascript, programming, computer science, interview, hiring, recruitment, theory, settimeout, setinterval, evenloop]
draft: false
---

For a very long time, I kept using the same set of [questions](/blog/2017-10-01-10-questions-i-ask-each-senior-angular-candiate/) while performing interviews. Even though I created it with Angular in mind, most of them have proven universal. Asking about Arrays became my favourite (as in opens way to discuss so many interesting patterns like Observables) or CORS, which allows discussing how network requests work. Anyhow, recently I started to value more and more one I kept asking about setTimeout and setInterval.

I won't bore you with the theory when it's perfectly explained on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop).

I will just go to a short summary on why it matters:

 * it may be originally about a quirk of setInterval being "frozen" and "accumulating", but it's not the most important part
 * requires understanding how event loop works in JavaScript
 * requires understanding that JavaScript runs in one process and we can't guarantee the time of next frame
 * affects the understanding of how animations and transitions would work and how to manage them being smooth for the user
 * affects how to deal with exceptions in asynchronous operations and work against race conditions
 * opens a field for discussing what's locking and what's not locking in JavaScript (IO)
 * shows if someone ever used core language features around asynchronous behaviour without Promise or async/await syntax sugar
 * shows if a person is capable of optimising UI performance
 * shows if a person is capable of understanding why loop complexity sometimes should be taken into account (many people just says "well, the browser just hands sometimes because something takes a long time" and never try to figurle out "why?")

So what I look for in answers:

 * one process
 * queue
 * a delay argument is the minimum desired delay value
 * serializing operations (or another way to name the same thing)