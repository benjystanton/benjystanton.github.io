---
title: Setting up an Adobe Illustrator file ready for animating in After Effects
author: benjystanton
layout: post 
permalink: /blog/setting-up-an-adobe-illustrator-file-ready-for-animating-in-after-effects/
categories:
  - Animation
  - Design
---
This is a quick guide to setting up files in Adobe Illustrator, so that they are ready to be animated in After Effects. I won’t go into much detail about actually animating things… this is just to save you the headache of which settings to use.

<!--more-->

## General

### Widescreen (16:9)

  * HD
  * 1920 x 1080px

### Normal (4:3)

  * HD
  * 1440 x 1080px

### FPS

  * 25fps for video
  * 60fps for ui mock-ups

## Preparing Adobe Illustrator File

  * Create an Artboard at 16:9 1920 x 1080px
  * Bear in mind it may need to be cropped down to 4:3 1440 x 1080px
  * Add title safe zone in the centre of 1152px x 864px
  * Separate each independent object into different layers in Adobe Illustrator
  * Give each layer a name, you’ll thank me later

## Importing into After Effects

  * Create a new file at 1920 x 1080px
  * File > Import File >
  * Select file
  * Import as: Composition Retain Layer Sizes
  * Click the sun icon next the layer name, this ensures vector shapes are always smoothed when they are stretched
  * If layers are placed inside compositions, you need to click it on each individual layer AND the parent composition

## Exporting for YouTube

  * Container: .mp4 / .mov
  * Audio Codec: AAC-LC
  * Video Codec: H.264

## Keyboard Shortcuts

| Key                      | Result                                                                                                                                       |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
|                          | Quick Preview (zoom out to 50%, I find its much quick to preview then                                                                        |
| U                        | Open up Keyframes                                                                                                                            |
| T                        | Show opacity keyframes (think of transparency)                                                                                               |
| P                        | Open position keyframes                                                                                                                      |
| CMD + Click              | On a keyframe to toggle easing                                                                                                               |
| ALT + Drag               | On a vertex on the graph to create a curve                                                                                                   |
| CMD + Left/Right         | Move playhead by one frame                                                                                                                   |
| CMD + Shift + Left/Right | Move playhead by 10 frames                                                                                                                   |
| [ or ]                   | Move starting point of ribbon (use ALT + [ or ] to cut not move)                                                                             |
| Y                        | (Pan Behind Tool) To move anchor points, useful for animating limbs for example                                                              |
| Layer > 3D Layer         | Needs to be applied to Composition layer and all child layers. This will allow you to (for example) rotate a group of objects in a 3D space. |
| Command + Shift + Y      | Select a solid and change colour                                                                                                             |

## Avoiding Boomerang Motion

The following is quoted from [Keyframe interpolation][1] on Adobe’s website.

“In some cases, the Auto Bezier spatial interpolation for Position keyframes can cause undesired back-and-forth (boomerang) motion between two keyframes with equal values. In such a case, you can change the earlier keyframe to use Hold interpolation or change both keyframes to use Linear interpolation.”

“To change the default to linear interpolation, choose Edit > Preferences > General (Windows) or After Effects > Preferences > General (Mac OS), and select Default Spatial Interpolation To Linear. Changing the preference setting does not affect keyframes that already exist or new keyframes on properties for which keyframes already exist.”

 [1]: https://helpx.adobe.com/after-effects/using/keyframe-interpolation.html