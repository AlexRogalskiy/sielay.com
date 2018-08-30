---
title: 'Is technology sharing good or wrong on AirBnB case'
createdDate: '2014-07-25'
updatedDate: '2014-07-25'
author: sielay
source: https://www.linkedin.com/pulse/20140725205042-16801416-is-technology-sharing-good-or-wrong-on-airbnb-case/
sourceType: linkedin
tags: [linkedin, imported]
draft: false
---

I started to code in primary school in early 90ties. At that times the only sources of code were boring books about Turbo Pascal or C++. Bit later also magazines with a few bits of "how to write" on the last pages. Later internet came and created the whole spectrum of tutorials, but start of GitHub (and of course couple of his precursors) started tsunami of technology evolution. At the moment speed of improvements made impossible to follow. Thankfully we have amazing continuous integration tools and package managers like composer, bower, npm and global knowledge social bases like StackOverflow or Google Groups. That all combined allows you to build your solutions fast and easy without inventing the wheel. More, using cutting edge technologies like cloud computing, extreme scaling etc. comes with minimal cost. All out of the box.

But is that all just repository of good will fighters who publish their hard work to the public domain? Funny enough technology companies aren't hesitating to share their products. Yes, as publicly available, free licensed (most MIT) libraries you can use in your project. Why do they do it? What do they share? Let's check.

I base my case study on AirBnB which is both a leader in their niche and a technology leader. If you check their public [github](https://github.com/airbnb) repository you can find very interesting out of the box features:

 * mesos - Fault tolerant job scheduler for Mesos which handles dependencies and ISO8601 based schedules
 * optica - A tool for keeping track of nodes in your infrastructure
 * stemcell - Airbnb's EC2 instance creation and bootstrapping tool (WOW!)
 * synapse - A transparent service discovery framework for connecting an SOA
 * polyglot.js - Give your JavaScript the ability to speak many languages.
 * backpack - A pack of UI components for Backbone projects. Grab your backpack and enjoy the Views.
 * collapstring - Collapse quoted strings in strings
 * zonify - tool allows one to create DNS entries for all instances, tags and load balancers in EC2 and synchronize a Route 53 zone with these entries
 * plog - Fire-and-forget UDP logging service with custom Netty pipelines & extensive monitoring
 * billow - Query AWS data without API credentials. Don't wait for a response.
 * nerve - A service registration daemon that performs health checks; companion to airbnb/synapse
 * hammerspace - Off-heap large object storage
 * infinity - UITableViews for the web.

So let's face it. AirBnB shares with whole world CRITICAL elements of their DEPLOYMENT ARCHITECTURE and service MAINTENANCE. Are they crazy? Not really. That is my opinion why not:

 * AirBnB business is holiday rental - that isn't shared - company value is based on product, not on technology
 * Another AirBnB value is platform, meaning: network and network effect, benefits for the user, business flows, inventory
 * Closing those libraries doesn't bring huge value to the business (they are only solution to some elemental technology challenge which devalue fast). In other words keeping those libraries has no benefit for the company.
 * Sharing those libraries allows others to benefit, validate against their business, raise issue and contribute in improvements (sounds like free outsourcing, doesn't it?)
 * Sharing those libraries shows company deals with big player issues
 * Sharing those libraries allows to validate potential candidates against them or even choose such who already used them

Even having that you may ask yourself: I am doing technology startup. Can I afford playing like big AirBnB? I would answer with another question: are you technology startup or you create startup on top of technology?

If you create libraries, software components, hardware, etc. then sure, you should keep your work as your asset. If you do SaaS, PaaS you should consider playing AirBnB game. Review what is your PRODUCT and what is VALUE of it. Asses what is not a part of it and detach from your proprietary licence, but keep copyright and ownership:

 * your company keeps credit to library but not block of outer use, contribution and improvements (by others and by you in other companies)
 * your company gets support of the third party developers
 * your team improve their portfolio that works for you and their career development
 * you play today industry rules
 * your code builds trust in your technology (try to publish a good code)
 * you will resolve potential conflict between company and your experienced workers who might be afraid to lock their

More important by publishing your code under MIT licence:

> you still keep ownership and copyrights to software as a result of your company work

Last and not least - you will be likely hiring talents. Many of them will come with experience and knowledge. You have to be aware that by hiring an engineer you pay for his work on specific product and on specific terms. You are not buying ownership of his knowledge and former experience. Neither you gain ownership of his work out off work. Only situation when you can defend your ownership (which still can cause more conflicts) is when this work directly violate your patents or you can prove that it is unique and designed while delivering work service. Working always on proprietary licensed can make your talents use only available solutions and never challenge technological status quo. Work is about delivering best possible labour within at least 100% of requirements, if we expect more, we need to stop thinking about that as work, but as a partnership. Always it's better to partner in public domain, than share ownership of hard to valuate a piece of code.

Hope I managed to convince you to be more open.
