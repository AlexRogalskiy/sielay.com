---
title: SIELAY.com
---
<ul>
{%- set blog = collections.blog | blog_top(5)  -%}
{%- for post in blog -%}
  <li>
    {%- include 'tile.njk' -%}
  </li>
{%- endfor -%}
</ul>
<a href="/blog" class="w-full font-navigation lg:max-w-full text-center bg-green-200 lg:flex shadow-lg mb-5 bg-white w-full rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
More
</a>
{%- include 'years.njk' -%}
{%- include 'months.njk' -%}
{%- include 'tagcloud.njk' -%}