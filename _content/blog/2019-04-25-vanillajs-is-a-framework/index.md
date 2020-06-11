---
title: 'VanillaJS is a framework!'
createdDate: '2019-04-25'
date: '2019-04-25'
author: sielay
tags: [javascript,programming,react,angular,dojo,yui,development,typescript,es6,goodparts]
draft: false
---

In my experience as a developer, I made a few big mistakes. One of them was being late with taking building custom code instead of using ready, community driver frameworks. To be specific I missed the moment when with a seismic shit that autoloading and composer introduced to PHP frameworks like Symfony or Codeigniter allowed faster application scaffolding and testing.
I tried to not repeat the mistake later and in the JavaScript world, I made custom code only once as after experience in Nokia Ovi team I failed to find good toolkit (dojo and YUI were there, but... were missing something). Once Angular appeared I used it, then NG2, then React and it stayed this way for a long time.

I still had to spend some time setting up or at least use zero config boilerplates, but development moving forward was seamless. I never had good reason to not use off out the shelf solution. Well. Until a few weeks ago.
It's very edge case but really with timeline, setup, the legacy it was difficult to use any new tools and old tools were also a massive black box. I had to jump on the deep water and make a patch using Vanilla flavour only. And you know what? I did enjoy it.

I had to build small popup that will work on top of the number of legacy projects. Each in a different stack, different library versions, massive window pollution. Vanilla was the safest way. And last but not least important flow and model were small and simple so I could keep YUI/Angular OOP principles rather than functional (like in React). That is what I found:

## 1. If you cater to internal user, force them to use Chrome.

Let's face it. You have Chrome, so you have all ES6 features out of the box. Done. No webpack, gulp, browserify, polyfills. You can align to any build process is already there. It just works.

## 2. If you understand class functions, prototypal inheritance and keep good patterns OOP is easy.

If you think about it to build simple UI with simple components you often need only to build a few classes, handle destroy/dispose of (mostly to avoid dangling event listeners to DOM), follow EventEmitter pattern for event/data propagation. It just works.

## 3. If you don't care too much about memory, arrow functions make binding context easy.

You could be a purist and assign methods to prototype. But with arrow functions, you can just assign them in the constructor and never worry about the binding. It keeps your code neat and simple. The only downside is a new instance of each method per instance of your object.

## 4. String templates and querySelector are almost as good as JSX.

You just create container DOM element and pass rest of the template as InnerHTML. Conditional formatting works exactly like in JSX. You don't create VirtualDOM so changes you have to make manually, but you can use querySelector and data-* attributes even while your component isn't yet attached to the document.

## 5. It will still be only the last resort solution.

You still produce more code and you need still to force yourself to follow patterns and be consistent. You can't really use functional principles as you'd need to implement some diffing renderer - so like rewrite React (which is pointless). As long you build something simple and as OOP it will be fine. Anything bigger - use a bloody framework!
