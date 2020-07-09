---
title: SIELAY.com
topNav: false
fullwidth: true
---
<div class="flex flex-wrap">
{%- for category in collections.category | blog_first -%}
<div class="lg:w-1/2 xl:w-1/3 p-6">
<h3 class="text-gray-900 font-bold text-2xl mb-2 category-{{ category.title | kebab }}">Lastest in {{ category.title }}</h3>
  <ul>
    {%- for post in category | blog_top(1)  -%}
    <li>
      {%- include 'tile.njk' -%}
    </li>
    {%- endfor -%}
  </ul>
  <a href="{{ category.slug }}" class="category-{{ category.title | kebab }} block">More ({{ category.count }})</a>
</div>
{%- endfor -%}
</div>
<div class="flex flex-wrap">
<div class="lg:w-1/2 xl:w-1/2 p-6">
{%- include 'months.njk' -%}
</div>
<div class="lg:w-1/2 xl:w-1/2 p-6">
{%- include 'tagcloud.njk' -%}
</div>
</div>