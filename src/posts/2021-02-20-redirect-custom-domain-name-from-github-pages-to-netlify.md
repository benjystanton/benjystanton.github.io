---
layout: layouts/post
title: "Redirect custom domain name from GitHub pages to Netlify"
tags:
- post
- Release notes
--- 

This was the worst part of moving my site so far. Fiddling with DNS settings reminded me of when I used to be a freelance web designer, and I would offer hosting services to clients. 

Anyway, after flicking a few switches in somewhat random order, I'd got the sequence correct and the domain switched away from GitHub and over to Netlify pretty quickly. I may have muttered "hold onto your butts" under my breath.

## Netlify

First I had to login to my domain name provider’s website and update the DNS settings for my domain (benjystanton.co.uk) to match the settings given by Netlify. [This page in the Netlify docs](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/#configure-an-apex-domain) helped me figure that out.

## GitHub Pages

I also had to stop GitHub Pages from building my site and publishing it on my custom domain. This all felt a bit hacky, I had to switch the build to a new branch, then delete that branch. This [GitHub docs page](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/unpublishing-a-github-pages-site#unpublishing-a-user-or-organization-site) helped with that bit.

Despite feeling in over my head, the whole thing only took half an hour probably. And now my site is being hosted on Netlify.
