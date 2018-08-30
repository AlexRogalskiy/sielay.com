---
title: 'No, wait, it is not a bug – it is unknown'
createdDate: '2014-12-16'
updatedDate: '2014-12-16'
author: sielay
tags: [linkedin, imported]
draft: false
source: https://www.linkedin.com/pulse/wait-its-bug-unknown-%C5%82ukasz-marek-sielski/
sourceType: linkedin
---

Have you ever asked your developers to do some project for you? You spent vast amount of time on describing your goals, making mockups, explaining needs. Then you get something that looks ok, but once you start to use it it falls apart. You click something and result is not as expected. You ask about it and you get an answer „it was not defined“ or „it conflicts with other thing“. You keep asking „why you haven’t said it back then?“. Answer is „well, we didn’t know you will go that way“ and again „you haven’t told us about it“. Constant blaming starts to make your furious, team furious and your project goes nowhere. Well. In fact I am not going to make you help any better. Your developers were likely right. Good for you, is that they are also one to blame.

There are a lot of magic words describing ways to help you improve expectation management in your project. A lot comes to methodology and understanding processes. But what does really tells you that we do „unit testing“ or other „test driven development“ tools? You will ask „so all will work now?“. Well, no. Even, if your team will prepare loads of wireframes, UML diagrams etc., you won’t cover everything.

So should I live in unknown? Well no. You have to accept it, yes, but you can still control it. Best, if way of control is same useful for your and the geeks on the other side.

Across many methodologies I started to appreciate one over the other. It’s called Behaviour Driven Development. You can find at least two branches of tools delivering that solution. One called gherkin (cucumber for Ruby, cucumber.js for Node, behat for PHP) and other called jasmine (very popular in JavaScript). But what it does?

Well. It creates way to describe behaviour (things you want to do) in way that is understandable for you (assuming you are not a nerd) and your developers in the same time. Also it create FIXED and definitive documentation. Referring to the title of this article: anything not defined in there doesn’t count. You may not agree with that, but it’s up to you if you want progress or not.

Gherkin is a bit more descriptive and clear to the business. Anyhow benefit of both is to translate your natural language assumptions to code tests. And what’s more important you can do it in steps.

I will show you just one example how it works, but I strongly encourage to spend some time of yours and your developers to adapt it in your company. By meaning that I mean encourage them in working hours, with good attitude as one of best investments in your business and them.

So. Imagine you want to have commenting functionality on your site. Test for that may look like:

> **Scenario:** Only logged in user can add comment
> **Given** Visitor is logged in
> **When** Visitor submits comment
> **Then** comment is visible under article


Great things about this tests are:

 * it gives full integration – behaviour test
 * it tests from user perspective
 * it also can be covered by test on backend
 * it created precise, complete feature documentation
 * developers focus only on implementing that specific feature at the time

In next steps you will add scenario, when you will define what will happen, when visitor is not logged in. They iterate code keeping compatibility to previous tests. Iterating that:

 * speeds up coding
 * remove need for extra documentation
 * gives feel of progress (measurable)
 * gives quality control
 * gives focus control
 * delivers

You see now benefits, don’t you? But what happens, if you developers say „I don’t do test driven development. I don’t like it“... Well. It’s topic for the next story.

Read more:

 * Cucumber official page http://cukes.info/
 * Jasmine official page http://jasmine.github.io/2.1/introduction.html
 * Behat (PHP) http://docs.behat.org/en/v2.5/
 * Cucumber.js https://github.com/cucumber/cucumber-js
