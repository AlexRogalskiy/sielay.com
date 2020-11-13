---
title: Programming in an unknown environment
tags:
    - programming
    - maintenance
    - legacy
    - process
    - tip
    - how to
    - coding
    - development
    - programming language
    - debug
    - test
    - stack
    - method
    - function
    - class
    - symbol
categories: ["Software Development & Management"]
---

(I use Mac, so whenever I mean Ctrl+Shift+F I do Cmd+Shift+F)

It would be great that each time we join some company, or project we always work on something we're familiar with, or we build everything from scratch. Often it's not the case.
While working on a book describing our trade, I realised how much of work, in software engineering, we focus on maintaining the legacy, or unknown code. Sometimes in languages, I haven't dealt with or haven't used of ages.
In brief, there is one technique that worked well. I call it "roll up the yarn".

 1. Find familiar unique identifier
 2. Follow methods step by step
 3. Apply the change
 4. Run tests
 5. Repeat

What does it mean?

# Find familiar unique identifier.

It may be a CSS class or element id in the frontend. It may be radio button value. In the worst scenario, it may be log entry or temporarily added code that throws an exception. Its role is to give me an anchor to start. From that moment, Ctrl+Shift+F is my friend. I search for that specific identifier in the whole code. If I need to find the project that uses it and my company uses GitHub, I can search for the term across the organisation. Go to your organisation page on GH and start typing in a search. The first autocomplete will suggest it.

# Find methods step by step.

That is the rolling up the yarn phase. In my regular tasks, I mostly use NodeJs, so JavaScript. But it happens that I have to dig not only into code I don't know but also to other languages I'm not so familiar. That may be Java (which despite big argue has many similarities) or Python (which is different). No matter where I land, the idea is the same. All code consists of some symbols, keywords. The most important would be the function, methods and classes names. By following them, I can either find the whole stack (order of actions) leading to the identifier I used. I can follow them also deeper to search for the results or effects. Some IDEs will allow me to jump between files when following the symbol. Some environments will allow me to debug the code in steps. But in the worst scenario, I still have my magic Ctrl+Shift+F.

# Apply the change.

Often we need to break to make. Once I found the code that seems related to what I want to achieve, I make a singular change and test. Some IDEs or frameworks will run it for me as I edit.

# Run tests.

In a perfect scenario, all the code we work has programmatic tests. I can start them, and some should fail when I applied changes. If tests pass that may mean either test were incomplete or I made my change in a way or place that made no difference. Sometimes I'd have to verify the outcome empirically. Even then, though, I would add new tests before and after my change to see what was the status quo and to ensure one will accidentally break my code in the future.

# Repeat.

Simply that. Software development often looks like a repetition of the process described above.

Do you agree with this approach? Does it work for you? How you approach the code, you don't know.
