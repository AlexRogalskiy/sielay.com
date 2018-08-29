---
title: 'Drogi kolego programisto'
createdDate: '2008-04-09'
updatedDate: '2008-04-09'
author: sielay
tags: [recovered, kod, rotfl]
draft: false
---

Śmieszny kawałek kodu znaleziony w źródle:

```php
//blahhhhh should never be like this!
$inlineHtmlLink = “<a class=\”senditlnk\” href=\”someURL”;
$inlineHtmlLink .= $someVar;
$inlineHtmlLink .= “\”>share it</a>”;
/*———,-
Note plz do not place inline html + css + whatever string
concatenation, functions, shit! in strings
css should go to .css files, html to templates; finding simple
link to place took me 0.5h*/
```

