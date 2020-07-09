---
title: TypeScript as a defense
createdDate: '2018-01-28'
date: '2018-03-28'
author: sielay
tags:
  - typescript
  - tdd
  - project
draft: false
categories: ["Software Development & Management"]
---

**TLDR** If you have no time for TDD, you should at least use types.

I do enjoy test-driven development. Not on its own, but as one of the approaches that help to ship fast good quality code. It’s easy to say it’s developer responsibility to use it. And it’s quite fair that it’s developer responsibility to include it in the estimation of work. Anyhow there are few factors when it just can’t be done in the first place.

It applies not only to TDD, but BDD and DDD, or any \*DD, just name it. The basic requirement is goal/expectation definition. If you can’t enforce processes around it and your decision source is all over the place, you won’t be able to use it because following reasons (taken from life):

-   you can’t define the structure of the data/project/application
-   you can’t define expected behaviour and it varies all across the app
-   you can’t predict changes to any element of your application as they may happen at any time
-   you can’t use an argument that one element affects another, as recipient simply DGAF

Anyhow there are things you can do. Best is learning from platforms that are more resilient to such instability (like Java). The language itself can be your strongest ally here, and if you reach for TypeScript its main feature (types) is your strongest line of defence.

Let me show you an example of simple React component:

```typescript
interface IMyComponentState {
    visible: boolean;
}

interface IMyComponentProps {
    x: number;
    y: number;
}

export class MyComponent extends React.Component {

    public state: IMyComponentState = {
        visible: false
    }

    public props: Readonly<{ children?: ReactNode }> & Readonly<IMyComponentProps>;

    constructor(props: IMyComponentProps) {        
        super(props);

    }

    private toggleVisibility() {
        this.setState((previous: IMyComponentState) => {
            visible: !previous.viisble
        });
    }
}
```

You may see that I used two interfaces: one for the state and second for properties. Some may argue that it’s overkill when PropTypes could be used. Well, yes and no. First PropTypes are sometimes intentionally dropped (like in Preact). Second PropTypes limit you to some quite basic types when the interface can reflect business logic and complex model of your application. I don’t mind using both, but TypeScript “compiler” is far better in finding mismatched properties when the interface is used than with PropTypes. More important here is the state, which hardly ever is check typed and for most it just objects with some set of random fields.

How does it help? Imagine you rush through the project. Worse, it’s not only you but few other developers. Forget nice scenario when TDD is appreciated and you have time for it. Imagine living in agency when you cut corners because client gives a bad budget.

An interface is a contract, same as a test. TypeScript checks them on compilation level. Using them, especially using very specific, business-oriented ones (reflecting data entities in your database layer) you naturally build semi-test that notifies you immediately about all typos, type mismatches and wrong data use.

Also, it massively saves your time, if you have to refactor (proven on my own experience) or add tests retrospectively (proven on my team experience).
