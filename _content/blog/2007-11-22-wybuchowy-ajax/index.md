---
title: 'Wybuchowy AJAX'
createdDate: '2007-11-22'
date: '2007-11-22'
author: sielay
tags: [recovered, kod, bug, rotfl, javascript, ajax]
draft: false
---

Jak przechwycić dane otrzymane za pośrednictwem AJAXa w prototype.js? Wydawało mi się, iż jest do dość proste. Byłem w błędzie. Pewien programista znalazł wyjątkowo błyskotliwe rozwiązanie tego problemu:

```javascript
xmlRequest = new Ajax.Request (
  url,
  {
  method : 'GET',
  onSuccess : function ( resp ) {
  	$('someDiv').innerHTML = resp.responseText;
  }
);

setTimeout(function() {
  // do something with $('someDiv')
  }
},1000);
```

Z kodu wynika, iż chciał wykorzystać dane w divie someDiv na podstawie otrzymanej odpowiedzi. Piękne. Ale zapomniał, że AJAX działa asynchronicznie, czyż nie? Więc co by się stało, gdyby odpowiedź przybyła później niż w ciągu 1000ms?
