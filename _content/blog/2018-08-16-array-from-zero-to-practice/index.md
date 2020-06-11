---
title: Arrays - from zero to practice
createdDate: '2018-08-16'
date: '2018-08-16'
author: sielay
tags:
  - javascript
  - array
draft: false
---

One of the first obstacles for people just learning about software development is difficult to get real-life examples. Where it comes to learning types `String`, `Number` and `Boolean` are quite clear (tricky still). But when it comes to `Object` and an `Array` it's a different story. The concepts are too abstract for someone who never worked with code.

> This article may require some knowledge of JavaScript or other programming languages. It could be aim to help understand some concepts or validate your knowledge.

But to move forward and be productive you need to master them. Even more, to fully understand strings, for instance, you need to understand arrays (because a `String` is nothing else than an `Array` of characters, which actually are numbers).

But let's dive in and see how we could break the ice. To do that let's only recap few basic concepts in JavaScript:

 * A `String` is a text. We wrap it between apostrophes or quotes (must match) or reverse apostrophes for multiline strings in ES6 (new JavaScript).
  ```javascript
"hello world"
'hell wolrd'
`hello
world`
  ```
 * A `Number`, same as in real-life or mathematics are expressed as decimal characters. They are always double precision numbers, no integers, but at this point, we can ignore it.
   ```javascript
1
12.3434
```
 * A `Boolean` is eithe `true` or `false`

 What is an array? Well. Imagine it as a list of some values. This list is ordered using index starting from zero (0). This index is an integer. So second element of an array will have index 1, third 2 and last will have an index equal to array length minus 1.

 ```javascript
 let myArray = ["hello", "world", 1, 9, 15.0, false ];
 myArray[0] // hello
 myArray[1] // world
 myArray[myArray.length - 1] // false
 ```

But how we can use it? Let's spy on our Twitter! Shall we? Please open your twitter https://twitter.com/ and then open Developer Console (On Windows and Linux: Ctrl + Shift + J. On Mac: Cmd + Option + J for Chrome).

So now I'll show you something that isn't an Array, but behaves like it. In global
`document` object that exists when you see page exists method (function) `querySelectorAll`
that will return you list of all HTML tags matching CSS selector you give to it.
It will return it as a `NodeList` which isn't JavaScript array, but seems so. And there
is magic (which in details you'll learn later) that allows us to transform it into
an Array so we can do all arrayish magic with it. It's called spread operator (tree dots). So let's see how it works. If you take a look on HTML on Twitter you'd see that each post
has CSS class `tweet`. Thanks to that we can do:

```javascript
document.querySelectorAll('.tweet') // returns NodeList of all HTML tags that have stream-item CSS class
[...document.querySelectorAll('.tweet')] // returns the same values but as an Array
[...document.querySelectorAll('.tweet')][0] // return first of found HTML tags
```

So let's assign now our list to variable so it's easier to use it

```javascript
let tweets = [...document.querySelectorAll('.tweet')];
```

So we have an array or HTML elements that represent each tweet on the page. We might
want to extract some information from them. And that's where magic of arrays begins:

## forEach

You may know from other languages or even from your experience with JavaScript concept
of loops. We could use `for` loop to iterate over content of the Array, but in the same
time we have quite powerful method that allows us to do it bit simpler way

```javascript
tweets.forEach(function(tweet) {
  alert(tweet);
});
```

As you see on our array `tweets` we call method `forEach` and pass one argument into it.
This argument is a function that gets called for each item in the array and in this case
show annoying popup with text `[object HTMLDivElement]` which is what you see when you
try to represent DIV HTML tag as a string.

This function we call each time in fact gets three arguments: item, index of this item in the array and array itself.

```javascript
tweets.forEach(function(tweet, index, array) {
```

Of course you can use arrow function which looks nicer (but please read about differences between
arrow functions and normal functions, or just check what would be value of `this` inside both of them).

```javascript
tweets.forEach((tweet, index, array) => {
```

We could also use for testing `console.log` instead of `alert`, but Twitter likes to override it and hide result from you ;) . Still you can use `console.error` tho:

```javascript
tweets.forEach((tweet) => console.error(tweet));
```

When `forEach` would be useful? It's a clean way to iterate over an array in case:

 * you want to iterate over whole array, as it's not easy to stop
 * you just want to read all values in the array, but not transform them
 * OR you want to modify orignal array you iterate over

## map

You may see that each of found elements have plenty of attributes starting with `data-*`.
It seems that `data-screen-name`. What map does it allows us translate one array to new one by defining way how translation will happen for each element.

In this case we could get array of all screen names found:

```javascript
tweets.map((tweet) => tweet.getAttibute('data-screen-name'));
// in my case: (8) ["Adam__Bolton", "Adam__Bolton", "Adam__Bolton", "paulienuh", "dmitrigrabov", "Adam__Bolton", "Adam__Bolton", null]
```

We use `map` which get the same attributes as `forEach` but expect you to return some value
for each element it gives you. As our `tweet` is HTML element we can't just read field
`data-screen-name`, we need to use `getAttribute` method. We return value of it and in result
we get array of strings with user names.

When `map` is useful?

 * you want to extract information from original array
 * you don't want to change original array

## filter

I have few people I follow, let's take `Adam Bolton` as example. If I'd like to get
only tweets that he wrote I could see that each HTML element representing tweet has
`data-screen-name` attribute. We can use method `filter` which works exactly like `map` but
expect truely value for elements that should be copied to the new array (objects of course
are copied by reference).

```javascript
tweets.filter((tweet) => tweet.getAttibute('data-screen-name') === 'Adam_Bolton');
```

Using the same method we could simply filter out tweets that have falsy values like `null`,
`undefined` or empty string. Because how coercion works in JavaScript we can just do:

```javascript
tweets.filter((tweet) => tweet.getAttibute('data-screen-name'));
```

Filter will help us with:

 * removing unwanted values while creating copy of original array
 * searching for desited value

## reduce

Reduce is most complex, but most powerful tool on Array. You should think of it as
aggregation. It takes each element of an array and return on value created in way
you describe in passed function.

You could use it to sum values

```javascript
[1, 3, 5, 8].reduce((value, previous) => value + previous, 0) // 17
// [1, 3, 5, 8] is original array
// (value, previous) => value + previous - is our agreggating function
// value is value of each next element in original array
// previous is result of previous agreggation
// 0 is starting/default value inserted as previous when we run our aggregation
//   function for the first time
```

You can use it to reverse array to hash

```javascript
tweets.reduce((tweet, previous) => previous[tweet.getAttribute('data-tweet-id')] = tweet, {});
// result is object where keys are tweet ids and values are tweet DIV HTML tags
```

Or you can use it to group items

```javascript
tweets.reduce((tweet, previous) => {
  const author = tweet.getAttibute('data-screen-name'); // get author name
  previous[author] = previous[author] || []; // under author name key ensure there is array or create it
  previous[author].push(tweet); // add to this array current tweet
  return previous;
}, {});
// results in object where keys are author user names and values are arrays of all tweets found for this author
```

And of course you can combine it with all previous:

```javascript
let tweets = [...document.querySelectorAll('.tweet')];

tweets
  .filter(tweet => tweet.getAttribute('data-screen-name')) // filter out empty authors
  .map(tweet => {
    return { // map HTML tag to object with two field author and text
      author: tweet.getAttribute('data-screen-name'), // read author from attirbute
      text: tweet.querySelector('.tweet-text').innerText // find element in our DIV that has class .tweet-text and take it text content
    };
  })
  .reduce((tweet, hash) => {
    // agreggate tweets to hash where key is author and values are array of text contents
    hash[tweet.author] = hash[tweet.author] || [];
    hash[tweet.author].push(tweet.text);
    return hash;
  }, {});
```

## Why all of that is important?

Having made many interviews with JavaScript developers from juniors to unicorns I have to sadly say that many don't know basic features of types like arrays and can't use them without frameworks like jQuery. Because of that they can't use all performance and readibility advantages of them. Also that makes them unfamiliar with patterns that are very useful later:

 * Observables heavily uses array patterns (see `rxjs` or `redux-observable`)
 * Some databases like Mongo or tools like Hadoop base on map/reduce concept which is easy to practice on JavaScript arrays
 * Arrays are extremely useful in modern UI frameworks like React or Angular. Wrong usage of them may endup in rendering glitches. By using map in example we can simplify building the templates.
 * Chained array methods allows us to process vast amouts of data, which is very useful in data scrapping.

 Hope you enjoyed this hasted article. Feel free to add your thoughts.

