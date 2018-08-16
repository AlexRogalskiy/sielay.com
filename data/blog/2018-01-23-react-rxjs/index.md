---
title: React with RxJS
createdDate: '2018-01-23'
updatedDate: '2018-04-11'
author: sielay
tags:
  - redux
  - redux-observable
  - case study
draft: false
---

When we started the migration to React we faced an interesting problem. Most of the resources explained data structures in React on very simple examples. Our data model was far more complex. Also, we had to combine React with other stacks, like GridLayout (based on jQuery) and leave the ability to shift to any other codebase in the future.

Like explained in [previous article](https://sielay.com/blog/2018/01/21/dot2doc/) we decided to extract our data layer from the actual app and maintain in the form of SDK. Using observables together with Redux made all more powerful, yet easier to maintain on that scale. Still, we encountered issues with implementation as React (as it was the bottleneck here) fits perfectly to Redux and quite simple stores. Adding reactive patterns to it wasn’t as obvious and as we found it was very easy to overcomplicate it.

React components are basically lifecycle wrappers around render functions. Those functions should take props and state without any side influences. Without it React just don’t work, but with it, it’s bloody effective.

We had to subscribe our components to reactive data sources, without a need to do too many re-renders or keeping too many subscriptions handing.

Receipt tuned out to be:

1.  Subscriptions are created just before mounting and removed before unmounting.
2.  Subscriptions update state, react decide if re-render is needed.
3.  Component manages own sub-state, that should contain only latest known version data that is essential for this specific component. Any additional information should be ignored/discarded, so never stored in the component.
4.  Props should be kept only for injecting initial configuration (like telling which observable to watch) and not used to push new values.

To reiterate: render is always a function of `state` and/or `props`.

The component is given some observable (that can come via `props`, `import` or `global`) depending what you want to achieve.

Also, I use interfaces to enforce types in the state.

```typescript
import { Subscription } from "rxjs";
import * as React from "react";

interface IState {
    fieldA: string;
    fieldB: string;
}

/**
 * @class Exaple Component
 */
class MyComponent extends React.Component {

    /**
     * Subscriptions used by the instance
     */
    private subscriptions: Subscription[] = [];

    /**
     * Registering subscriptions before component
     * being mounted. As Observables are synchronous
     * by default that will allow pre-populate state
     * without need of re-rendering
     */
    public componentWillMount() {

        this.subscriptions.push(SOMEOBSERVABLE
            .subscribe(someData => this
                .setState((prev: IState) => ({
                    fieldA : prev.fieldA,
                    fieldB : someData
                })));
        ...
    }

    /**
     * Cleaning up subscriptions
     */
    public componentWillUnmount() {

        this.subscriptions
            .forEach(subscription => subscription
                .unsubscribe());

        this.subscriptions = [];
    }

    public render() {
        return (
            <ul>
                <li>{this.state.fieldA}</li>
                <li>{this.state.fieldB}</li>
            </ul>
        )
    }
}
```

## What did not work

[react-observable-subscribe](https://github.com/jayphelps/react-observable-subscribe) did not work because it didn’t use
 full `rxjs` and when used with `BehaviourSubject` is came with unexpected side effects (issue [#9](https://github.com/jayphelps/react-observable-subscribe/issues/9))

Hope it helps. We did some trials and fails before finding it all out.
