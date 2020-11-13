---
title: Real use cases with rebase
tags:
    - javascript
    - patterns
    - array
    - arrays
    - rebase
    - map
    - filter
categories: ["Software Development & Management"]
---

I see many people learning to code struggle with understanding some concepts, which prove to be essential in daily work. When I run interviews I always talk about arrays (be prepared) and their methods. I do that as they open discussion to many possible situations and problems. They also allow debating complexity, optimisation, abstraction, mutation, and many many more. Without spending too much on introduction, I'd like to simply move to real-life examples. Yep! Real from code we recently wrote! 

## Aggregate

I have a list of some segments and each of them has some audience size (`reach`). I want
simply to display a total number of people.

**Important** This is a simple sum, for similar cases you need to decide if you care about audiences overlapping. Best to check with your stakeholder what is required first as it may be better to calculate it in your database.

```javascript
const estimatedReach = segments
    .reduce((sum, segment) => sum + segment.reach, 0);
```

## Find uniques

Ensuring array contains unique values in JavaScript became [very easy nowadays](https://stackoverflow.com/a/14438954). Anyhow, I had a bit more complex case. I had items in
array `data` that could be all different instances, but I needed to ensure I have only
those who have unique values of field `url`. That solution itself has many flaws, as I had
to assume that I don't care about the repeated ones and I don't judge which is
more relevant. I simply take the first with given URL and ignore any further.

```javascript
const uniqueURL = (data) => {
  try {
    const urls = []; // I store all urls I found unique here
    return data
      .reduce((previous, current) => {
        current.forEach((item) => {
          if (!urls.includes(item.url)) { // I check if already added
            urls.push(item.url); // I store urls here
            previous.push(item);
          }
        });
        return previous;
      }, [])
      .sort(byUrl); // not relevant here
  } catch (error) {
    log(red(error));
    return null;
  }
};
```

The reason I store found URL values in separate arrays is to avoid the need to iterate on all found objects each time I do the check. Native method `includes` by default is more
efficient and the `urls` array is being disposed of once the closure is done.

## Generate hash

This is a simplified code from an 11ty plugin used to build this blog. This one gets from each page some list of values. In our case that are tags (or other taxonomies) in a blog post. The logic simply creates hash where keys are those values and part of the value contains all pages containing this value. This is one of the ways to group items by values.

```javascript
const hash = collectionArray.reduce((previous, page) => {    
    const values = doSomethingWith(page);

    values.forEach((value) => {
      const slug = getMeSomeSlug(value);
      previous[slug] = previous[slug] || {
        slug,
        title: value,
        pages: [],
      };
      previous[slug].pages.push(page);
    });
    return previous;
  }, {});
```

### Collect

This is a very simple way to collect (concatenate) nested arrays. This arrow function is used in a number of places to extract some nested ids (used to correlate to other data). It can be easily executed inline or passed to map function. It assumes that the input object has field mappings which are a hash of arrays. This method simply concatenates all those arrays. It doesn't care if values are unique, nor about keys of that hash.

```javascript
const getIds = ({mappings}) =>
    Object
        .values(mappings)
        .reduce((collected, list) => [...collected, ...list], []);
```

### Group

A very simple example of grouping items from an array. You don't have to destruct the result, in the same way, I did here. I did that as I don't care about invalid types. But you can take the whole result and use Object.keys or Object.entries to iterate over them.

```javascript
 const {
    groupA,
    groupB,
    groupC
} = selection.reduce((prev, {type, data}) => {
    prev[`group${type.toUpperCase()}`].push(data);
    return prev;
}, {
    groupA: [],
    groupB: [],
    groupC: []
});
```

### Translate/join

I had some dictionary array (someOtherCollection) and wanted to translate my input to get matching labels. Input is an array of objects that have an id field. someOtherCollection is an array of objects that contain a label and may contain an array of matching ids (one to many relation).

In my case, someOtherCollection was segments dictionary and input were some used segments known my ids.

```javascript
const getLabels = (input) => input.reduce((collected, {id}) => {
    someOtherCollection
        .forEach(({label, ids}) => {
            if (Array.isArray(ids)) {
                if (ids.includes(id) && !collected.includes(label)) {
                    collected.push(label);
                }
            }
        });
    return collected;
}, []);
```