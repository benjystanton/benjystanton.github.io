---
layout: layouts/post
permalink: "blog/{{ title | slug }}/"
title: Crafting animation on the web
date: 2013-05-14 00:53:00
categories: design animation conferences speaking
---

Notes from my talk at Port80 2013, covering animation principles, CSS and workflow plus a link to my infamous Mario Part animation.

  * [My slides on Slideshare][1]

## About Me

### Mario Paint

I grew up on a diet of Disney and Nintendo and ever since I first played Mario Land on my Gameboy I became fascinated by digital things. I think the first ever digital animation that I created was actually on Mario Paint for SNES.

[The Nativity (by me, aged 10) animated using Mario Paint on the SNES][4]

### University

So believe it or not, I actually ended up studying animation at University. I became became pretty handy at 3D Studio Max, Macromedia Flash and Adobe After Effects. Back then, I dreamt of becoming an animator and working for Pixar or Aardman, but after Uni, a friend of mine was starting a web design agency and offered me a job, and I’ve been a web designer ever since.

The only piece of software I still use these days is Adobe After Effects. But the time I spent learning animation has stuck with me and often comes in useful when designing sites.

### James Good

These days I work at James Good. James Good is a Corporate Branding & Communications Consultancy and we are made up of a team of designers, developers, photographers and copy writers. Whatever we do, we always try to focus on delivering strong conceptual designs, I think this is what makes our work successful.

Things are going well, we have 2 offices (one in Swansea and one in London), 10 members of staff and a dog called Bailey (who is our HR and finance manager, so be sure to pay your invoices on time).

My main role as a designer is producing mock-ups for the websites that we create. I like to get involved early on to help plan content, structure and the overall user experience, I'll then work closely with the developers to get our sites built. Even though I'm not a front-end developer, I like to think that I know my way around CSS and I use this skill mainly to annoy the developers at James Good.

## Crafting Animation on the Web

So I'm hear today to talk about 'Crafting Animation on the Web' and just in case your worried, I'm not going to be talking about making cartoons or even rotating home page banners. I'm interested in how animation can support and enhance our designs – how we can use it to improve navigation, registration processes and contact forms, animating between breakpoints and for progressively loading content.

### F\***h

So, firstly a little disclaimer: when I first contacted Joel to propose this talk I promised him that I wouldn't mention the F-word. But I'm afraid, that was a bit of a white lie, I am probably going to mention it a couple times. Flash *was* a big part of animation on the web, but, luckily we all know that it’s days are numbered.

### Animation is Immature

Partly due to Flash, animation on the web still feels like a bit of a dirty phrase. It's associated with annoying and down-right evil design patterns, like take-over adverts. Saying that, there are plenty of great examples of site's out there that use animation really well, but as a community I don't think we talk about it enough.

As a sub-discipline of web design, animation still quite immature. Even though there are plenty of great articles explaining the technical specs or examples that show off experimental ideas, I don't feel there are enough resources out there to help people like us understand why, how and when we should be using animation.

### Animation as a Design Material

I love this idea, that animation is a design material (like typography or colour). Not a type of content, that sits on our homepage, where users just click play, sit back and watch. But as something that can be used throughout our sites to improve the way we interact with them.

[Read more about this idea in another blog post][5].

### Clean *and* Simple

Movement can help keep our interfaces looking clean and simple. We can reveal things with animation, so we don't need to show everything all at once. We can also communicate and feedback to users, without having to add extra elements. (e.g. the way that the OSX Lion sign-in form shakes from side to side when the password is wrong. This is just like somebody shaking their head from side-to-side to say no. It's less cluttered and probably more universally understood than a bright red 'error' message box.

### The Time is Right

There are a few factors which make me think that the time is right to take animation more seriously. With relatively recent advances in web design like responsive design, mobile first design and touch interfaces, there are new patterns emerging on the web and many of them include movement. We've also got native apps which are raising the bar on what user's expect from their devices. And lastly we have CSS animation, which is gaining support and allowing us to do more without javascript. A major benefit of CSS animation is that it can take advantage of hardware acceleration.

## Animation Principles

I'm going to run through some important animation principles and also a brief history of the medium.

According to Wikipedia, the definition of animation is:

> 'Animation is the rapid display of a sequence of images to create an illusion of movement.'

The origin of the word has a deeper meaning though, and it means to bestow life. And that's what animation is all about really: bringing inanimate things to life. I think anything that we can do to make our stuff seem more alive, more human is definitely worth our effort.

> ':a bestowing of life.'

Human beings have been have long been trying to convey motion in their artwork. To bring them to life and to tell a story. Some cave paintings are known to depict animals with  multiple legs, giving them the feeling of movement. Ancient Egyptians and Greeks decorated pots and temples with figures in various states of movement.

I like to think of these as the pre-cursor to animated gifs.

### Gertie the Dinosaur and Winsor McCay

Gertie the Dinosaur was animated by Winsor McCay who used to perform live in front the film, pretending to interact with Gertie. This special effect really astounding audiences back in 1914. McCay pioneered many animation techniques that later became standard at Disney and elsewhere. Many of the rules of classical animation were forged during this time, and are still relevant today.

### Timing and Spacing

Timing and spacing in animation is incredibly important. Movement should have a beat or a rhythm. When a bouncing ball hits the floor, that’s our timing, we can think of these beats as keyframes. The bits in between, that’s our spacing.

### Easing

In 'real life' spacing is rarely is uniform, so in order to express believable movement we need to speed things up and slow them down.

### Ease Out

‘Ease out’ means the animation will have a slow finish. The frames will bunch up at the end, cushioning the movement before stopping. So the animation will appear to slow down over time.

### Ease In

‘Ease in’ is the opposite. The animation will have a slow start before speeding up.

Even though these ideas are just the basics, it’s worth getting your head around what each one feels like so you can communicate and describe animations to your team.

### Anticipation and Reaction

Anticipation is another important part of animation. If the movement is going to the right, then we can start off by moving to the left slightly. For example if Bugs Bunny is about to do a runner, his body will ‘coil up’ (in the opposite direction to his imminent escape). It gives the audience an idea of what's coming next. It it also creates contrast between the stages of the movement for greater impact.

Reactions are the like the follow through from anticipation. When Bugs Bunny runs away, perhaps he leaves a puff of smoke or some dust. This kind of visual gag is used in cartoons all the time for comedic effect, but it’s basically a natural form of movement. If I jump up, I need to bend my knees first and crouch down. I move down before moving up.

There's a great little quote in one of my animation books and apparently it's from Charlie Chaplin…

  1. Tell them what you’re going to do.
  2. Do it.
  3. Tell them that you’ve done it.

### Testing

Test, preview, iterate. It's a familiar mantra for web designers and it's the same for animators. I find when I'm animating that I'll keep watching the same half-second clip over and over again tweaking and refining until it just feels right. It's pretty difficult to get an animation right first time.

### Animade Lernz

[Watch Animade Lernz on Vimeo][6] (01:46)

Animade are a London based Animation studio. This short clip is a great example of how animation, when done properly, can communicate so much. It shows a series of brief scenes, each animated twice, the first animated poorly, the second animated very well. It shows how mastering the art of animation can make all the difference.

I highly recommend that you check out [Animade’s website][7] for more examples of their work. Another personal favourite of mine is [30 Ways to Kill a Cowboy][8] which is, as you’d expect, an animation of a cowboy being killed 30 ways, it’s not graphically violent though just pretty hysterical.

## CSS Animation

So I’m not going to go into a huge amount of detail with this, but I’ll run through the basics and point out a few areas which I feel are important or maybe difficult to get you’re head around initially.

CSS Animations are made up of 2 main parts; the @Keyframe Rule and the Animation Property.

### @Keyframes Rule

The @Keyframe Rule is basically a list a frames that show what properties that you want to animate and in what order. I don't recommend that you try the following example out by the way, it will not look pretty.

```
0%   {color: crimson;}  
25%  {color: sandybrown;}  
50%  {color: gold;}  
75%  {color: lawngreen;}  
100% {color: steelblue;}
```

### Animation Property

Then we have the Animation Property. I like to think if this as the controls for the playhead. How long will it takes to move along our list of keyframes. Is there a delay at the start? Does the animation repeat? That sort of stuff.

name:  
duration:  
timing-function:  
delay:  
iteration-count:  
direction:

### timing-function:

I think timing-function is the really important one here. This feature is more commonly referred to as easing, and it's a really important property that can have a massive effect the feel of your animation, so I urge you to take some time here. Although you can use some pre-defined types of easing, I prefer to create my own using the mysterious cubic-bézier function.

Luckily, there are some really great tools on the web that we can use to draw cubic-bézier curves and then preview how they move. You don't need to be good at drawing, maths or French to have a go either. Just have a play, then when you are happy, grab the values it gives you and stick them into your CSS.

  * [matthewlein.com/ceaser/][9]
  * [cubic-bezier.com][10]

These tools are brilliant as they let you quickly test and revise timing and duration, plus you can create custom curves then copy and paste cubic-bezier values. They really take a lot of the pain and guess work out of animating, and I use them regularly.

> Easing is one of those things that web designers don’t talk about enough.
> <footer>Val Head</footer>

I think lumping for a default ease-in or ease-out value is like choosing CSS’s default red or blue for your design’s colours. You just wouldn’t do it, any designer worth their salt would spend ages picking the absolute right colour then copying and pasting that value into the CSS. We should be doing the same with easing.

### timing-function: steps(10);

Another important part of the timing-function property (that is kind of hidden away) is ‘steps’ (no, it has nothing to do with the pop group Steps). Instead of our animation timing moving along a smooth cubic bezier curve, using steps will cause the animation to jump between a number of predefined steps with no in-betweens.

This could be used, for example, to artificially drop the frame rate, giving the animation a quirky, retro feel.

Or, some clever folks have figured out that we can use steps to control animated sprites. Simply lay out all the frames of an animation into one sprite sheet, and animate the image’s position using steps and hey presto, we have animated gifs 2.0. The advantage being we can control things like the speed and repetition using CSS.

### [Minimal Monkey][11]

Minimal Monkey is one of my favourite sites at the moment. It’s a personal blog for Stephen Burgess who is a developer at Fantasy Interactive. It has a great minimal design with really strong use of type and colour. It’s also noteworthy for the way it uses animation. The page transitions and hover states are simple but beautiful, and every bit of movement feels like it adds to the overall experience. Communicating a little bit about what will happen next.

## Workflow

If you're anything like me, animation is probably something that gets left until the last moments of project. Perhaps by then it’s too late to add anything but light touches and small improvements. But to use animation in a really meaningful way, I think it needs to be thought about and planned early on in the design process.

### Animation Identity

When you are planning out a project, give it an animation identity. Write down a list of words that reflect the brand or personality of your project, e.g. quick, happy, vintage, gamey, professional. Perhaps you could even gather a ‘mood board’ of clips that have right feel to their animation. These words and clips will help to inform the way in which your site moves. You may be doing something similar for other areas of the identity, such as copy, look & feel, photography etc so why not do it to describe animation too?

In Dan Cederholm's book CSS3 For Web Designers, he describes transitions (and animations) as 'butter' that can be used to smooth out the interactions in our site. This is a great idea, but I'd like to add to this by saying that we don't always want things to move like butter, sometimes we want movement to be fluid like water, sticky like marmite, lumpy like porridge, or poppy like Rice Krispies. The breakfast-themed comparisons are potentially endless, but you get the idea: too many buttery animations have the same effect as too many rounded corners.

### Notes

Annotation of your designs to describe desired movement is always a good idea. It’s good to describe the animation in a way that matches up with the CSS properties that will need defining.

  * What property are changing? Colour, Position etc. (Subtle changes may not be obvious when looking at your mock-ups.)
  * How long you want the animation to last (think in milliseconds, as a second is a long time in animation)
  * What sort of easing would you like? (ease-in, ease-out, elastic bounce back?)
  * Should there be a delay before it starts?
  * How many times should it repeat?

Don't worry, you won't think of everything, and it will almost certainly need to be tweaked in the browser.

### Show and Tell

Notes are fine for simple animations, but what about more complicated things? The whole point of animation is that it communicates a lot in a short space of time. Sometimes, the best way to communicate an animated idea is to show it.

Act things out! Either with your body, or use props and sketches on pieces of paper. If you’ve ever watched a Pixar documentary you’ll know that they act out movements using props and pull faces in front of mirrors. They even present their storyboards as if they were actors in the plot. The ability to act is very important for an animator.

### Storyboards

Storyboards are very similar to sketched wireframes. They consist of rough thumbnail sketches, with notes about the action and timing. We can also use arrows and other elements to show how objects, users and even the device viewport will react in certain scenarios. They certainly don’t need to look beautiful, they should be quick and dirty.

### Animatics (Moving Storyboards)

Animatics are like moving storyboards. To create one, you could scan in your storyboards, then use a basic video editing tool like iMovie to stitch them together. You will begin to get a feeling for the timing and duration of your animation. Sometimes I even separate out the background and foreground objects, so that I can move them independently of each other and create more detailed scenes.

### Keynote

There have been a few people recently promoting keynote as an alternative, yet basic design package and it certainly has some merits, not least because it’s able to produce simple animated and interactive prototypes.

### Photoshop

Photoshop has a timeline view of course, it’s handy for testing out frame-by-frame animations And a good tool for creating sprite sheets ready for animation.

### Edge Animate

I guess the jury is still out on Edge Animate. It’s kind of Flash reborn isn’t it, but using web technologies. You may not want to use it for production ready code, but as a tool for creating mock-ups it’s definitely worth considering.

### After Effects

Dan Mall has said that he uses Adobe After Effects to 'mock-up' his animations. So that he can can get the timing and feeling right, before handing them over to a developer.

Although After Effects is a pretty expensive bit of kit by itself, these days Adobe's pricing structure is so that if you need 2 or 3 of their programs for 12 months, you may as well buy them all.

So if any of you have access to After Effects, I recommend you give it a try. It's kind of like Illustrator with a time line, and if you're at all familiar with Flash you'll probably feel right at home.

### The Dream App

So what would the The Dream app be like? When working on the web, we’re used to using a range of apps and services in order to get the job done, but I still would like something created specifically for animation. I guess this is what Adobe Edge Animate wants to be, but I’m thinking more along the lines of a Typecast for animation. Hopefully one day, somebody clever will make this for me!

## Conclusion

  * Think of animation as a design material, not a piece of content.
  * Use it to communicate more, without adding clutter to your designs.
  * Use animation to give each project a unique personality.
  * Animation is distracting, be mindful of people's attention.

<div id="further-reading">
  <h2>
    Further Reading
  </h2>

  <p>
    If you'd like to learn a bit more from some designers who know a lot more than me, I recommend the following articles (and book).
  </p>
<ul>
  <li>
    <a title="Transitional Interfaces (on Medium)" href="https://medium.com/design-ux/926eb80d64e3">Transitional Interfaces by Pasquale D’Silva</a>
  </li>

  <li>
    <a title="Flashless Animation (on 24 Ways)" href="http://24ways.org/2012/flashless-animation/">Flashless Animation by Rachel Nabors</a>
  </li>

  <li>
    <a title="Better Navigation Through Proprioception (on A List Apart)" href="http://alistapart.com/column/better-navigation-through-proprioception">Better Navigation Through Proprioception by Cennydd Bowles</a>
  </li>

  <li>
    <a title="The Animator's Survival Kit (on Wikipedia)" href="http://en.wikipedia.org/wiki/The_Animator's_Survival_Kit">The Animator's Survival Kit by Richard Williams</a>
  </li>
  </ul>
</div>

 [1]: http://www.slideshare.net/benjystanton/crafting-animation-on-the-web "My slides on Slideshare"
 [3]: http://port80events.co.uk/port80-2013-round-up/ "Links to all the speaker's slides and the official photos"
 [4]: https://vimeo.com/66002457 "The Nativity (on Vimeo)"
 [5]: {{ site.url }}/blog/animation-as-a-design-material/ "Animation as a Design Material"
 [6]: http://vimeo.com/41558459 "The Complete Animade Lernz"
 [7]: http://animade.tv/ "Animade’s Website"
 [8]: http://vimeo.com/28505330 "Ready Steady Bang"
 [9]: http://matthewlein.com/ceaser/ "Ceaser CSS Easing Animation Tool"
 [10]: http://cubic-bezier.com/ "Cubic-bezier Tool"
 [11]: http://minimalmonkey.com/ "Stephen Burgess"
