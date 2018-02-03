---
layout: page 
title: Notes on creating Twitter, Google+ and Facebook profile page images
date: 2014-04-22 14:09:05
categories: design
---

I&#8217;ve been creating a lot of images for Twitter, Google+ and Facebook profile pages recently. Here are my notes on how to create and upload those images for good results. (Pssst, these things change all the time, so this may be out of date already.)

<!--more-->

Update: this is a great article on the Rackspace blog about creating [one post image that works across social media][1].

## Twitter

### Profile Photo: 512 x 512, PNG

A 24 bit PNG does the trick here (even though it appears Twitter’s servers do save it as a JPEG on upload for you). 512 pixels seems to be the biggest that it’s ever displayed (when a user clicks on your Profile Photo is gets enlarged).

### Header Photo: 1500 x 500, PNG

Again, I’ve used a large 24 bit PNG (JPEGs suffer from some ugly compression artefacts when they get uploaded to Twitter’s servers). 1500 x 500 pixels seems to be the magic number, but as the new Twitter profile pages are responsive, the ratio of the image changes quite a lot (sometimes it is wider, sometimes it is taller) so make sure you leave a generous ‘safe zone’ around the edges.

## Google+

### Profile Photo: 869 x 869, PNG

When a user clicks your Profile Photo, a large version is loaded up in a modal, the size seems to be capped at 869 x 869 pixels. Note that Google+ crops Profile Photos into circles, so bear that in mind if you don’t have a face/logo that fits neatly into a circle.

### Cover Photo: 1177 x 661, PNG

Similarly to the Profile Photos, Cover Photos seem to be capped at 1177 x 661 pixels when viewed in the Google+ modal. But this size is more than big enough when viewing the Profile page, it’s the ratio which is more important here. On larger viewports The Cover Photo is duplicated and blurred and then used as a background for your Profile Photo, this can have strange effects, so it’s worth testing out. Note that on smaller viewports the layout changes, the Profile Photo appears centrally aligned at the bottom of the Cover Photo, obscuring part of it.

## Facebook

### Profile Picture: 520 x 520, PNG

I found that uploading a 24 bit PNG at a larger resolution than the recommended 180 x 180 pixels gave better results. I upped it to 520 x 520 pixels, so that when a user clicks your Profile Picture, it fills the modal window (smaller photos have big black borders).

### Cover Photo: 851 x 520, JPEG (will require cropping on upload)

[Facebook’s own tips][2] were actually pretty good for this one. If you can save out your image as a JPEG (with sRGB ticked) and keep the file size below 100KB you should get a good quality image that loads quickly. I saved out my image at 520 pixels in height (which is taller than recommended) so that when a user clicks it, it will fill the modal window. Alternatively, Facebook suggest that PNGs will probably look better if you have text in the image.

## General Notes

  * More often than not, creating a 24 bit PNG that is bigger than required will offer you the best results.
  * The uploaders seem to like files with their filename extension (eg .png or .jpg) so make sure you add one on if it’s missing.
  * Profile page layouts are updated regularly and they are designed to be viewed on multiple devices, so keep things simple.

 [1]: http://www.rackspace.com/content/2015/02/20/one-image-to-rule-them-all-size-specs-to-work-across-social-media/
 [2]: https://www.facebook.com/help/www/125379114252045 "Cover Photo tips"