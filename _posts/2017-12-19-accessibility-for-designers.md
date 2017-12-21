---
layout: post  
title: Accessibility for designers
date: 2017-12-19 23:20:00  
categories: accessibility design
excerpt: A guide to web accessibility for graphic, visual and UI (user interface) designers.
---

A guide to web accessibility best practices for graphic, visual and UI (user interface) designers.

## Images

### Images of text
Avoid having images of text, especially when it makes up part of the interface. If possible, recreate images using HTML and CSS.

In some cases, images that contain text are appropriate. For example a photo of a building or a screenshot of an app might contain some text. If the text is important to the meaning of the image, be sure to include it as alt text somewhere.

[The big problem with sharing text in images](https://blog.ghost.org/text-images/)

### Images should have alternative text
Alt text is one of those web jobs that falls through the cracks. Whose responsibility is it? Designers? Developers? Content editors? I suggest that you do everyone a favour and write alt text for any image that you create or supply.

Images that add meaning to the content need to have alternative text. Imagine you are explaining the image down the phone to someone who can’t see it.

[Writing effective ALT text for images](http://www.webcredible.com/blog/writing-effective-alt-text-images/)

## Typography

### Measure
Long lines of text are hard to read. So are very short lines. As a rule of thumb, I try to keep line length within 45 to 75 characters per line. This is extra tricky when it comes to responsive web design.

Luckily Trent Walton has a [neat trick for managing fluid type](http://trentwalton.com/2012/06/19/fluid-type/).

### Justified text
Don’t use fully justified text. Having ragged lines on the right edge helps our eyes to read. Fully justified text is harder to read, and these effects can be exaggerated for users who have visual or cognitive access needs.

[Never Justify Type on the Web](http://designforhackers.com/blog/never-justify-type-on-the-web/)

### Line spacing
Make sure the vertical white space between lines of text is enough so that the taller letters don’t bump into each other. It’s also possible to have too much space. If you’re eye is more drawn the gaps than the text then you probably need to reduce your line spacing a little.

[Line Spacing](http://practicaltypography.com/line-spacing.html)

## Colour

### Don’t use colour alone to give meaning
Users who are colour blind can miss out on important information if you don’t consider their needs when designing. For example if you highlight a required form field with a red outline, this could be invisible to them.

[Colour accessibility](https://24ways.org/2012/colour-accessibility/)

### Colour contrast
Text must have contrast ratio of at least 4.5:1. Larger text doesn’t need as much contrast. A contrast ratio of at least 3:1 is enough for anything over 18 point.

Watch out: good displays like those on Macbook Pros have much higher contrast than most monitors. Test your design on an average, low-res PC display, whilst squinting. That should give you a better idea of how some users struggle to read low contrast interface text.

Very light text is overused by designers. We rely on it, because contrast can balance a design. But, if you have to add very light text to a design in order for it to feel balanced then you probably have too much stuff on the page.

[Colour Contrast Checker](http://webaim.org/resources/contrastchecker/)

## Interaction

### Design a style for keyboard focus
Some users will navigate a website using only a keyboard. But often it’s impossible to tell which elements are currently in focus. Be sure to to give links, buttons and form elements a high contrast focus style.

[Tip: go to GOV.UK](https://www.gov.uk/) and press the tab key a few times to see a good example of this in practice.

## Forms

### Labels
Form elements should always have labels. It’s not enough to use placeholder text as it’s usually very light. It also disappears when users select the form field.

### Help text
Add useful instructions to help users to complete the form. If a certain date format or password length is required, let users know. If a field is optional consider removing it, if that’s not possible, mark it as optional.

### Validation errors
Design errors that are easily understood (this includes writing good content too). Make sure they allow users to navigate to the problem and fix it easily.

[The 10 Commandments of Good Form Design on the Web](http://mono.company/journal/design-practice/the-10-commandments-of-good-form-design-on-the-web/)

## Content

### Avoid technical terms, abbreviations and jargon
Technical terms, abbreviations and jargon can be off putting to all sorts of users:

- users who don’t speak English as a first language (English is a second language for British Sign Language users)
- users who have a low reading age
- newcomers to the topic you are writing about

You can help everyone understand your content better if you use common and simple words.

If you absolutely have to use these words then explain them by using the `<abbr>` element or by adding a glossary.

[Stop your team using technical terms and jargon](http://www.disambiguity.com/stop-your-team-using-technical-terms-and-jargon/)

### Readable page titles and hackable urls
Page titles should be descriptive and should match the `<h1>` (main heading) on the page. This helps users to orientate themselves.

URLs should be designed so that users could navigate their way through a site by editing the website url in the browser address bar.

[Web accessibility & URLs](http://simplyaccessible.com/article/web-accessibility-and-urls/)

### Buttons and links should have descriptive labels
Users often scan pages quickly to look for links on a page. This can be done visually or by using screen readers. Don’t use repetitive or vague link labels like “read more” or “click here”. They don’t offer any information to the user when taken out of context.

Make sure link and button labels describe what will happen when someone selects them. For example, if they link to a download tell the user the file type and file size.

[Writing content for everyone](https://gds.blog.gov.uk/2016/02/23/writing-content-for-everyone/)

## Conclusion
Everyone benefits from good accessible design. Think about it all of the time. It’s not a separate thing that can be added at the end of a project.

Designers often put up barriers to users with access needs without really meaning to. Don’t be one of those designers.

## Further reading on accessibility
- [Government Digital Service Accessibility](https://accessibility.blog.gov.uk/)
- [WebAIM's WCAG 2.0 Checklist](http://webaim.org/standards/wcag/checklist)
- [Vox Media’s Accessibility Guidelines](http://accessibility.voxmedia.com/)
- [7 Things Every Designer Needs to Know about Accessibility](https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b#.tu5t4zg4m)
