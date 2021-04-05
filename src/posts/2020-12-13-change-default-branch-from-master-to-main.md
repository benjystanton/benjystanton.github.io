---
layout: layouts/post
title: "Change default branch from master to main"
categories: release-notes
---

Yesterday [I tweeted that I want to switch this blog](https://twitter.com/benjystanton/status/1337685688259645441) from [Jekyll](https://jekyllrb.com/) to [Eleventy](https://www.11ty.dev/), then blog in the open as I rebuild the site with modern CSS techniques.

There's going to be a few behind the scenes steps to get ready for the changes, including [moving over to Netlify from GitHub pages](https://www.netlify.com/github-pages-vs-netlify/).

Step one is to change the name of my default branch from `master` to `main`. The Black Lives Matter movement of summer 2020 helped to point out the countless microaggressions that exist to perpetuate racism. Renaming branches won't solve racism but as Una said back in the summer…

> If it prevents even a single black person from feeling more isolated in the tech community, feels like a no brainer to me!
<br>— [Una Kravets](https://twitter.com/Una/status/1271181775130279936)

The change is fairly simple to do, and I [followed these steps by Steven Mortimer](https://stevenmortimer.com/5-steps-to-change-github-default-branch-from-master-to-main/). But before deleting `master` (Step 5), I made sure that GitHub Pages was building from the newly created `main` branch. You can do this by going to your repo's Settings in GitHub, selecting Options and scrolling down to the GitHub Pages section.
