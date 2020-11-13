---
title: Added dark mode
tags:
    - css
    - javascript
    - darkmode
    - tailwind
    - tailwindcss
    - sass
    - scss
    - disqus
categories: ["Software Development & Management"]
---

Added dark mode. Simple small tweak with Tailwind CSS. You you like it? Disqus aligns itself as long you set the theme to `auto` in admin.

```sass
.dark {
  background: black;
  color: white;
  .bg-white {
    background: #333;
  }
  .bg-gray-200 {
    background: black;
  }
  .limited {    
    &:after {
      background: linear-gradient(180deg, rgba(33,33,33,0) 0%, #333 100%);
    }
  }
  .text-gray-900 {
    color: white;
  }
  .blog, .text-gray-700 {
    color: #AAA;
  }
  .text-gray-600 {
    color: #999;
  }
}
```