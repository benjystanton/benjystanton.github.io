---
layout: post
title: "Checking for visual changes with BackstopJS"
categories: release-notes
--- 

With my site deployed to Netlify, but still living on a preview URL, I wanted to do a quick visual regression test against the old GitHub Pages build, to make sure nothing had broken.

As I mentioned in the last post, this was more about practising this kind of testing technique, rather than any real expectation that anything would be wrong. Visual testing will likely be more useful later when I do some serious changes to the CSS.

I've been playing around with [Percy.io](https://percy.io/) at [Swirrl](https://www.swirrl.com/), but for personal use, I decided to use the open source [Backstop.JS](https://garris.github.io/BackstopJS/), which I'm pretty sure I first heard about via [Stuart Robson](https://twitter.com/StuRobson) (thanks Stu!).

After a little while digging around the [BackstopJS README](https://github.com/garris/BackstopJS) I found the commands that I needed.

## Setting up BackstopJS

- Open Terminal
- Install BackstopJS globally `$ npm install -g backstopjs`
- Move to the project directory `$ cd your/project/folder`
- Initialize the project `$ backstop init`
- Open the project in Visual Studio Code
- Open the `backstop.json` file
- Update the breakpoints to match my site's
	- 460px
	- 660px
	- 900px
	- 1400px
- Populate the [list of pages to test](https://www.benjystanton.co.uk/blog/create-a-list-of-sample-pages-for-testing/), each page needs the new preview URL and the current/old reference URL to test against
- Create the reference images against `$ backstop reference` (this bit took a while to find as it's buried in the README, but it's an important first step before you can go any further)
- Run the test `$ backstop test`
- This command will generate a test report in HTML which you can open in a browser to compare the images

There's a lot more possible with these kinds of tools, but this was enough for me to get started. Testing just 7 pages times 4 breakpoints gives me 28 tests, so doing this manually would become difficult pretty quickly.

## Example report

Here's a [copy of my report](https://friendly-fermi-9e5984.netlify.app/backstop_data/html_report/), as you can see everything passed, so there isn't much to see.
