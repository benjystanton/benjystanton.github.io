---
layout: layouts/post
title: "Weeknotes – series 06 episode 12"
tags:
- post
- Weeknotes
- Made Tech
excerpt: "A look at the accessibility best practices and exclusion mapping guides I've been working on."
image: "exclusion-mapping.png"
image-alt: "A yellow square with a blue bounding box. Black text inside the square says: Exclusion mapping."
---

## Accessibility best practices

Leaning heavily on the [GOV.UK Service Manual](https://www.gov.uk/service-manual), and the work that the inclusive design team did whilst I was at UKHSA (UK Health Security Agency), I've been iterating on a list of accessibilty best practices to share with my current team.

1. Everyone understands how they can help
    - [Guidance for your job role – Department for Work and Pensions Accessibility Manual](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role)
2. Do [regular user research with disabled people](https://www.gov.uk/service-manual/user-research/running-research-sessions-with-people-with-disabilities)
3. Consider accessibility in the design phase
    - [Stef Walter](https://twitter.com/WalterStephanie) has a great [guide for designers on documenting accessiblity requirements](https://stephaniewalter.design/blog/a-designers-guide-to-documenting-accessibility-user-interactions/)
4. Review barriers and excluded groups
    - see [exclusion mapping](#exclusion-mapping) later in the post
5. Run regular accessibility testing
    - [Flutter's guide to accessibility testing for native apps](https://docs.flutter.dev/development/accessibility-and-localization/accessibility)
6. [Get an accessibility audit](https://www.gov.uk/service-manual/helping-people-to-use-your-service/getting-an-accessibility-audit)
7. [Publish an accessibility statement](https://www.gov.uk/guidance/make-your-website-or-app-accessible-and-publish-an-accessibility-statement#publish-your-accessibility-statement )

<h2 id="exclusion-mapping">Exclusion mapping</h2>

![A yellow square with a blue bounding box. Black text inside the square says: Exclusion mapping.](/images/exclusion-mapping.png)

I also ran a lightweight exclusion mapping exercise, again inspired by work done at UKHSA (UK Health Security Agency).

The idea was to try and identify…

- groups who might be excluded by a service
- barriers that they might face
- groups who might be at greater risk from the problems you are trying to solve

The result was a list of people to include in our user research plans and barriers to focus on as we design.

It's useful to have some design concepts and user journeys to hand, to review against.

### Step 1 – Excluded groups

Reflect on the different types of people who may be excluded from any service (or policy or system).

As I mentioned in my weeknotes last week, [Clara Greo](https://twitter.com/claragt) and [Sonia Turcotte](https://twitter.com/sonia_turcotte) have an excellent list of people and groups: [oppressed and systematically disadvantaged people and communities in the UK](https://twitter.com/claragt/status/1503644184737112066?s=46&t=EM4Ii8beHE6caF53d6QcCg).

### Step 2 – Accessibility barriers

Go through the Home Office's [accessibility posters](https://ukhomeoffice.github.io/accessibility-posters/). They have posters for the following groups…

- Anxiety
- Autistic spectrum
- Deaf or hard of hearing
- Dyslexia
- Low vision
- Physical or motor disabilities
- Screenreaders

Identify which barriers from each group could appear as a result of poor design in your service.

For example, some barriers that might affect users with physical or motor disabilities are…

- High precision or dexterity required
- Dynamic content that requires a lot of mouse movement
- Lots of scrolling and tabbing
- Lots of typing
- Things time out without much warning
- Interactive elements are bunched together
- Bits of the page don't work a keyboard
- Can't interact with or close pop-ups

### Step 3 – [Universal barriers](https://gds.blog.gov.uk/2019/03/26/understanding-all-the-barriers-service-users-might-face/)

The universal barriers framework is a good way to focus on the barriers that can affect anyone.

For example…

1. Awareness
2. Enthusiasm
3. Access
4. Time
5. Finance
6. Evidence
7. Interface and interaction skills
8. Comprehension skills
9. Self confidence
10. Emotional state
11. Trust

Identify which statements from each group could happen as a result of poor design in your service.

For example, when thinking about time, people may feel…

1. I don't have time to use this service
2. The waiting times are too long
3. It takes too long to travel to do this
4. Download speeds take too long
5. The information took too long to arrive

### Step 4 – [Protected characteristics](https://www.citizensadvice.org.uk/law-and-courts/discrimination/about-discrimination/equality-act-2010-discrimination-and-your-rights/)

Finally, thinking about protected characteristics, are there any groups which are more at risk from being excluded from, or being harmed when, using your service?

- age
- gender reassignment
- being married or in a civil partnership
- being pregnant or on maternity leave
- disability
- race including colour, nationality, ethnic or national origin
- religion or belief
- sex
- sexual orientation

### Step 5 – Wrap up

You should be left with a list of people and groups to focus user research on. And a list of barriers to consider when designing and building the service.

***

Phew that was a lot to go through, if you find this useful, or can see any areas for improvement, please let me know!

## Other things

- Intuit have a great content design guide called [Abolish racist language](https://contentdesign.intuit.com/accessibility-and-inclusion/abolish-racist-language/)
- I was reminded of something that [Lou Downe says: "Service design is 10% design… 90% creating the conditions for design to happen"](https://twitter.com/LouDowne/status/1544223825193213952)
- It was [Inclusive Design 24](https://inclusivedesign24.org/2022/schedule/) this week, a free 24-hour online event full of inclusive design and accessibility talks  