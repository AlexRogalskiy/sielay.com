---
title: I moved to Eleventy
tags:
    - javascript
    - gatsby
    - technology
    - blog
    - development
    - vanity
    - gatsbyjs
categories: ["Software Development & Management"]
---

There are two things I'd like to mention in this blog post. First - how much fun is to play with various 
static page generators, including both [Gatsby](https://www.gatsbyjs.org/) and [Eleventy](https://www.11ty.dev/). 
Second - how senseless it may be. Let's start with the second.

My blog is known to come and go. Some time ago I even dug into web archive to retrieve the oldest entries which you can find tagged as [#imported](/blog/tag/imported). In early times it was pure PHP with not database, laster
with MySQL, then as Flash. Few times it was a Wordpress, even Wordpress Multisite. Once I wanted to revive it I
decided to use Gatsby. Why? Because I was able to host it on S3 without the need to maintain and pay for a proper server.
Couldn't I just use Wordpress.com? Of course, I could, but why?

When I started playing with Gatsby it was fun. It missed a few main features, so [I played with it](/blog/2018-08-26-calendar-for-gatsby) 
and for a short period, it was ok. But then I wanted to update my dependencies, maybe upgrade it and everything went to
dust. I've spent the evening after evening trying to fix the build just to publish a new post. Each time I left it unfinished.
And this way I wasted about 6 months.

Then I was told to try 11ty and I tried. And even as massive GatsbyJS and React fan I found it very enjoyable. Of course,
soon I started to play with it too and [demand some changes](https://github.com/11ty/eleventy/pull/1255) or 
[extend it](https://www.npmjs.com/package/eleventy-plugin-blog) to match my need. All of that just to have everything I have
out of Wordpress. Then I saw that tweet:


{% tweet "1273525861128470528" %}

So to be honest I had to say:

{% tweet "1273580391962750976" %}

And sum it up with:

{% tweet "1273584604415438848" %}

Now I deploy my new blog in a state I'm not fully happy with. I still need to sanitize blog plugin before publishing
the newest version to NPM. I'm still not having all features. Possibly I have simplified the blog. Maybe. But at least I'm doing.
I have spent so much time to gain so little. And for what?

And here comes the first aspect. It's fun, it's rewarding, it's another kind of content. I am not A blogger. I do have a blog, but mostly I'm a developer. That is what I do. And this blog is just a platform to try new things. To express my thoughts too, but
mainly it's showing what I do. I code. I analyze. I take apart and try to assemble again. My blog posts are rather on GitHub as pull
requests than here or on Twitter. And I'm fine with it.

Few of my friends rediscovered blogging. Many base on an amazing example from [PawLean](https://www.youtube.com/watch?v=OcJtNEYVbAY). Also my
dear [Kat](https://katcodes.home.blog/) started to tell her story with code and it took off. It grows! I'm happy and not jealous.
Each of us has a different thing to say, to a different audience and with a different medium.

In short. If you want to do content - use Wordpress. If you want to tell a story by code - hack status quo.

And... I promised fun with Eleventy so:

 - very fast
 - not too opinionated
 - works as zero-config
 - does the job
 - a very good library of ready plugins
 - not over-engineered
 - creator [Zach Leathermann](https://twitter.com/zachleat) is sort of badass that talks what he thinks and I like it
