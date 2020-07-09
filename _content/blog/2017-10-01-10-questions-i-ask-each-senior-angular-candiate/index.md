---
title: '10 questions I ask each senior Angular candiate'
createdDate: '2017-10-01'
date: '2017-10-01'
author: sielay
tags: [linkedin, imported, angular, hiring, interview]
draft: false
source: https://www.linkedin.com/pulse/10-questions-i-ask-each-senior-angular-candiate-%C5%82ukasz-marek-sielski/
sourceType: linkedin
image: office.jpeg
categories: ["Software Development & Management"]
---

Times when many recruiters mistaken JavaScript for Java are long passed (except some rare awkward situations). Anyhow there is still very low understanding of specific technologies on JavaScript scene. It's nothing surprising as the market is very fast, tools change and new methods emerge almost every day.

One of the biggest problems I faced while hiring JavaScript seniors for Angular based project was the definition of being a senior. In most cases, it's promoted by years spent on commercial work. It has to be right, yes? Wrong!

Let's make it simple. JavaScript is a language. And as it's only a language - you could use it to describe kids games and advanced physics. So, first of all, you would need to determine what kind of problem/solution specific candidate have been solving in the past - and to be honest - the framework is good hint over here.

I will oversimplify it: divide frontend JavaScript developer to two groups (backend is a bit simpler to gauge as Node require some knowledge, almost). There are "jQuery developers" and "Software developers". Naming is a bit unfair, but it's overdrawn for the reason.

Most of the work done using JavaScript to the date is around making websites interactive. That requires attention to detail, understanding user experience and visuals. That is amazing ground to grow for "jQuery developers". They don't need to be experts in language, as jQuery (even React plays well here) will solve many of their problems. They work fast, they use some plastering, some painting and put magic in front of our eyes. They will sometimes do things more complex, but most of the issues would be held by backend and page refreshing. There are often very experienced but are not even close to what we need for a proper Angular developer.

As a Software developer, I would name those, who actually would be able to work in fast more advanced (doesn't mean easier) environment like mobile development? Because they have to understand their surrounding and its limitations (memory, concurrency) and be able to use established practices and patterns. JavaScript is amazing as it requires very little to start but to carry the name of Software Developer you have to be able to use and understand classes and inheritance, SOLID. Also, you need to understand the value of testing and thinking ahead. As thinking ahead I mean also forcing your team/boss to build specification that allows building predictable software.

That all comes to set of questions I use always to evaluate possible candidates for Angular2/4 related role. It proved to be powerful as: I was able to reject people who wouldn't be able to pick up the product; I found amazing candidates who had very little commercial experience, but almost from day 1 were fully productive team members in complex projects.

 1. *What is dependency injection and/or inversion of control and how it's used by Angular* Most of "senior" candidates thought I ask about `import` and `require`
 2. *Events, callbacks, promises and observables - how they differ, what are each pros/cons?* It's literally impossible to work in Angular and not use at least 2 of them
 3. *From array [0, 1, 2, ... j] how to get in one operation array of first 4 elements - [0, 1, 2, 3]?* 90% candidates wanted to use jQuery or `for` loop. Understanding array interface is required to be able to work with reactive model layer in Angular - Observables; this question was followed by asking about `filter` and `map`
 4. *How to present an image using just CSS and HTML?* it's so simple that most of the candidates failed to mention more than 2
 5. *What's the difference between setTimeout and setInterval and usage of which can cause performance problems?* This question is a great opening to the discussion about concurrency, race conditions, but also scope and closures as most of the developers don't know the scope of setTimeout callbacks.
 6. *What features of functions are not available in arrow functions?* It's scary that so many people started using ES6 features, without understanding consequences. Biggest here is the difference in scope behaviour that can cause serious issues.
 7. *If API is in domain google.com and frontend is in domain facebook.com. What has to be exposed by API server so frontend can communicate with it?* This question is my ultimate filter also for backend developers. It shows if a person has really worked on projects using 3rd party or distributed APIs.
 8. *What CSS3 features help with building responsive websites?* It's not a must-have but allows to see, if a person who would work on frontend part of your project (which may be a mobile-first single-page application) understands responsive design or just uses Bootstrap of Foundation.
 9. *In Angular2 how bind in the template ngModel of input to a Subject?* It's cherry on the cake question and shows that person has worked with Angular2/4 and tried to use the power of reactive models to improve the app.
 10. *What would have to happen, to make you leave the company?* That is last, but not least important question. I just want to know the motivation behind the person, so I know I would choose a candidate who would hand with me for longer.

Those questions never failed me and helped to build a strong team. I didn't leave the answers as I hope you'd dig to find them. Also, because for some there is no one best answer.

Hope it brought some light to the specifics and helped you understand how unique Angular developers could be.
