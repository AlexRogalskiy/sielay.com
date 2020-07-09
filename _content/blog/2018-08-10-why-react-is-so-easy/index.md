---
title: Why react is so easy?
createdDate: '2018-08-10'
date: '2018-08-10'
author: sielay
tags:
  - javascript
  - react
  - reactjs
draft: false
categories: ["Software Development & Management"]
---

Don't get me wrong. To be a JavaScript developer you need to focus on understanding the language and mastering it. Then on specifics of the runtime ("place" where you code runs) environment, which most commonly will be either browser or node (which in many cases will mean "backend").

But before you jump on the big project and spend days/month learning complex concepts, frameworks, tools I strongly suggest you start with React. Is React only good choice? No. Is it best for everything? No. Does it allow you to get productive fast? Yes. Does it defer learning complex stuff? Indeed.

> It does not aim of this article to teach you React. It's to show why it's the best place to start.

So many tutorials will try to explain you quite abstract concepts that shape the architecture of applications like MVC. Don't worry about them. You don't need that. You need only one simple concept to start with: a function.

You may remember from match some functions, in the example such as:

```javascript
// horizontal line
y = 2
// lineral - draws line
y = x * 2
// exponential - draws parabole
y = x^2

// or in other notation

f(x) = 2
f(x) = x * 2
f(x) = x^2
```

The main concept is that for some given input (x) you get some specific (y) which is the same no matter how many times you try to recalculate the function. Well. In functional programming (a concept used heavily in React) that is exactly base of all, you will do. Take an example:

```jsx
// one way of writing functions
const horizontal = () => (<span>2</span>);
const lineral = (props) => (<span>{props.x * 2}<span>);
const exponential = (props) => (<span>{Math.pow(props.x, 2)}</span>);
// other way of writing the same thing
function horizontal() {
  return (<span>2</span>);
}
function lineral(props) {
  return (<span>{props.x * 2}<span>);
}
function exponential(props) {
  return (<span>{Math.pow(props.x, 2)}</span>);
}
```

You will have many chances to understand the difference between the two variants. It does not matter at the moment. What does matter is we repeat a simple concept. Something goes in and goes out in an expected way. This is exactly way how React works. It does a lot of magic to determine when to calculate the function and how to translate it results to HTML that should be updated on your page.

React is responsible for just that. Updating HTML (V in MVC). It has a capacity for other things like handling data (M in MVC) or binding both with some logic (C in MVC), but it's not opinionated and doesn't require you to know those very deeply. Functions are used in React to describe what HTML is expected for some given data. So result of those functions would be HTML or other functions that return HTML or "nothing" in the end.

```jsx
// function that for given prop will reutrn h1 tag with prop.title as
// its' value.
//
// Example:
// title = "Hello world"
// <h1>Hello world</h1>
const Header = (props) => (<h1>{props.title}</h1>});

// function that for given prop will return array of paragraphs containg each line
// in given props.text
//
// Example
// text = "One line text"
// <p>One line texts"
//
// props.text.split is string method that splits string into array of strings
// using given divider, in that case \n means end of line
//
// map is method of array method that translates each element of the array
// using given function, here each paragraph is wrapped in <p> tag

const Text = (props) => props.text.split("\n").map(paragraph => (<p>{paragraph}</p>));

// we tell React to render in document.body <div> tag that contains Header React
// component and Text react component
//
// Result will be:
// <div>
//   <h1>Hello world</h1>
//   <p>First paragraph</p>
//   <p>Second paragraph</p>
// </div>
//
// React will complain about not defining keys but you will learn about it later
ReactDOM.render(
  <div>
    <Header title="Hello world"/>
    <Text text={`First paragraph
Second paragraph`}>
  </div>, document.body);
```

As you see you can divide each element of what you do into a simple function. This makes it easy to maintain, reuse and test. And it doesn't end here. It will follow in far more complex example (which you may understand now, or come back after finishing some [official tutorial](https://reactjs.org/tutorial/tutorial.html)).

> Method in simple words is function attached to some variable which can refer to it. In example
> string (text) method `replace` knows value of string it's used against so can return modified
> value of it: `"abc".replace("a", "d")` equals `dbc`

```jsx
// You will learn about classes and React Components, but for now imagine
// that functions we used previously never remembered any values made while
// it's calculation. Each time you did all from the begining. Class (template)
// over here allows you to keep some values (data/state) that can be used
// each next time you need to run it (using render method in this case)
class App extends React.Component {

  // this is again function, triggered first time when we need to create
  // instance of that class, so we put this element in our React app in example
  // is sets some initial values and is given props like functions we discused
  // before
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    };
    // you can ignore that line to moment you'd learn about optimisation
    this.increment = this.increment.bind(this);
  }

  // and again a funciton, you'd see later it's connected to button and triggered
  // each time we click it
  increment() {
    this.setState({
      increment: this.state.increment + 1
    });
  }

  // This method is actual equivalent of functions we used before
  // it uses over here state `this.state` as input, which is reference
  // to values (data/state) kept in instance of this class (component)
  render() {
      return (
        <div>
          <span>{this.state.value}</span>
          <button onClick={this.increment}>Increment</button>
        </div>
      )
  }

}
```

It may not be easy to follow this article after the first read. Especially if you miss some understanding of javascript or HTML or programming at all. But it's to set your expectations. Look for functions. Look for this pattern of getting output for input. For going always one way (input that gives output). You'd see it repeating and should make your learning of both React and development much easier. You will see that each step you do in the end it's just simple in/out.
