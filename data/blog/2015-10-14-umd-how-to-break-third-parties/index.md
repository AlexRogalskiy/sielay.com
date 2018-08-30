---
title: 'UMD, how to break third parties'
createdDate: '2015-10-14'
updatedDate: '2015-10-14'
author: sielay
tags: [linkedin, imported, javascript, umd, npm]
draft: false
source: https://www.linkedin.com/pulse/umd-how-break-third-parties-%C5%82ukasz-marek-sielski/
sourceType: linkedin
---

I do enjoy good practices in coding. I love the direction that many environments take to organise code and make it maintainable. But very often we think about our code and forget about whole world around it.

It's ok, when you have small page just for yourself. But when you have site that works, implement zillions of third parties to earn money, squeeze every penny out - you have to be careful.

I would like to highlight one good practice that ends in pain - UMD. Imagine you build cool new site, and decided to use Require.js to organise your code. It is quite good choice in the end. But then some third party you use loads some open library, like EventEmitter2 (again good choice) to not reinvent the wheel. All should be fine, but third party team decided that they don't do AMD, but depend on library registering their code in the window (worse, but still popular choice). What happens then? Their lib is being hijacked by your code.

Consider snippet below. It is from EventEmitter project. It expects that, if you use RequireJS nothing will be populated to the window. Your code delivers RequireJS and third party library can't asses it anymore. It crashes.

Lesson from this one? If your code lands on unknown environment - don't trust UMD. Maybe you would have to patch all libraries you use. Be as close to VanillaJS - so understand language. You never know what version of jQuery, Angular, React, Dojo, YUI or Prototype (sic!) your host will use.

Hope it helps.

Snippet:

```javascript
if (typeof define === 'function' && define.amd) {
// AMD. Register as an anonymous module.
          define(function() {
                   return EventEmitter;
          });
} else if (typeof exports === 'object') {
// CommonJS
          exports.EventEmitter2 = EventEmitter;
} else {
// Browser global.
          window.EventEmitter2 = EventEmitter;
}
```

