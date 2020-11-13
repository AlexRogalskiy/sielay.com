---
topNav: true
title: About
layout: page.njk
---

Hi, my name is Łukasz (pronounced [ˈwukaʂ]). Originally from Szczecin, Poland. Now living in Wimbledon, London, United Kingdom. I’m a father, husband, software developer, team lead, aspiring enreprenour and amatour cyclist. I started with web early. I kept failing and reinventing myself. Now I start over, simpler, without too much stress.

<div class="flex w-full mt-8 mb-8">
    <div class="flex-1 text-center">
        <a href="https://www.linkedin.com/in/sielay/" target="_blank"><img class="w-12 h-12 inline-block" src="/icons/linkedin.svg"/></a>
    </div>
    <div class="flex-1 text-center">
        <a href="https://github.com/sielay" target="_blank"><img class="w-12 h-12 inline-block" src="/icons/github.svg"/></a>
    </div>
    <div class="flex-1 text-center">
        <a href="https://instagram.com/sielay" target="_blank"><img class="w-12 h-12 inline-block" src="/icons/instagram.svg"/></a>
    </div>
</div>


<div class="flex w-full mt-12 mb-8">
    <div class="flex-1 text-center">        
        <a href="https://twitter.com/CodeRebased" target="_blank">
            <img class="w-12 h-12 inline-block" src="/icons/twitter.svg"/>
            <span class="block text-center text-sm">@CodeRebased</span>
        </a>
        <span class="block text-center text-xs">Software, programming,<br/> management</span>
    </div>
    <div class="flex-1 text-center">       
        <a href="https://twitter.com/sielay" target="_blank">
            <img class="w-12 h-12 inline-block" src="/icons/twitter.svg"/>
            <span class="block text-center text-sm">@sielay</span>
        </a>
         <span class="block text-center text-xs">Politics, Opinions, UK, <br/> Belarus, Poland</span>
    </div>
    <div class="flex-1 text-center">        
        <a href="https://twitter.com/phonekills" target="_blank">
            <img class="w-12 h-12 inline-block" src="/icons/twitter.svg"/>
            <span class="block text-center text-sm">@phonekills</span>
        </a>
        <span class="block text-center text-xs">Cycling, Road Safety,<br/>  Living Streets</span>
    </div>
</div>

<div>{% for tag in about.tags | sort_by('label') %}<a class="text-gray-600 text-sm mr-1 mb-1" href="{{ tag.link }}">{{ tag.label }}</a> {% endfor %}</diuv>
