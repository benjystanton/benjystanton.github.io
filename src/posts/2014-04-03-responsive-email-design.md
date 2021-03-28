---
layout: layouts/post 
permalink: "blog/{{ title | slug | url_encode }}/"
title: Responsive email design
date: 2014-04-03 12:26:27
categories: design email
---

Email design a tricky beast. Patchy support for web standards means that we still need to use tables for layout, and strange bugs in mobile, desktop and web email clients means that we can’t rely on having the same support for CSS that we have come to expect from web browsers.

Making sure that your email looks good in Outlook is still a huge part of the task at hand. The good news is [mobile email has taken the lead][1], so it is certainly time to start playing with responsive layouts.

## Progressive enhancement

Emails, just like websites, won’t look the same in every client. By using progressive enhancement we can make sure that the design is solid, usable and accessible in all clients, and then sprinkle in newer features like responsive layouts, background images and rounded corners for users with more capable devices.

## Keeping things simple

Remember that people are bombarded with many emails a day, and reading them isn’t high on their priority list. Add cluttered interfaces to the mix (I’m looking at you Outlook) and we are left with a less than ideal reading experience.

So (like with most types of design) I think it’s best to keep things simple. The recommended maximum width for an email is 600px, so even when viewed on a desktop email client, this doesn’t give us much room for complex multi-column layouts. For mobile email clients, the design will need to work at around 300px wide.

Either way, the design should have a clear hierarchy and structure, with headings used to help guide users.

## Testing on devices

I test my designs in as many email clients and real devices as possible (iPhone, iPad, Android, Mac and PC). I also test my designs using a screen reader. For everything else, I use [Litmus][2] to get screenshots of how the email will look across a range email clients and devices.

## Accessibility

### A good reading experience

I like using big font sizes. The browser default of 16px is a good starting point for a comfortable paragraph size. Line length should be monitored too, with 45–75 characters per line being considered a good rule of thumb.

### Plain text email

It’s good practice when sending HTML emails to send a plain text version too, a good Email Service Provider will create and send these automatically for you.

### Images off by default

Many email clients turn off images by default, so you need to make sure that the email still makes sense and looks okay when this happens. Including alt-text for images can help here.

### Colours

It’s important to use a colour palette with enough contrast to make reading easy. I also test my designs using a colour-blindness simulator, which can help me to avoid unsuitable colour palettes.

## Further reading

  * [Campaign Monitor][4]
  * [Litmus][5]
  * [MailChimp][6]
  * [Email Market Share][7]
  * [Really Good Emails][8]

 [1]: http://emailclientmarketshare.com/ "The top ten email clients"
 [2]: https://litmus.com/ "Litmus – Test and track your emails"
 [3]: http://zurb.com/ink/ "A framework for creating responsive email designs"
 [4]: http://www.campaignmonitor.com/resources/ "Campaign Monitor’s email design resources"
 [5]: https://litmus.com/blog/ "Litmus email design blog"
 [6]: http://mailchimp.com/ "MailChimp have a great blog and resources section"
 [7]: http://emailclientmarketshare.com/ "Top 10 email clients (from Litmus)"
 [8]: http://reallygoodemails.com/ "A collection of inspiring email designs "