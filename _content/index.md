---
title: SIELAY.com
topNav: false
---
{%- include 'hero.njk' -%}
<div>
  <ul>
    {%- for post in collections.blog[0].items  -%}
    <li>
      {%- include 'tile.njk' -%}
    </li>
    {%- endfor -%}
  </ul>
  <a href="/blog/" class="category-private block">More ({{ collections.blog.total }})</a>
</div>
<div class="flex flex-wrap">
<div class="lg:w-1/2 xl:w-1/2 p-6">
{%- include 'months.njk' -%}
</div>
<div class="lg:w-1/2 xl:w-1/2 p-6">
{%- include 'tagcloud.njk' -%}
</div>
</div>