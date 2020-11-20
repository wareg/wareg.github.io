# Responsive Rainbow

## Story

To impress users, you need something extra nowadays. Like some rainbows.

Make a small site that changes a few details when the user resizes the window.

Expected result: https://youtu.be/8tq_00_ZuvU

## What are you going to learn?

- Use basic @media queries in CSS.
- [re-]Position elements. 

## Tasks

1. Extend the default css file to change the background based on the browsers width. When the user resize the browser window, the background should change. Use colors from [materialpalette.com](https://www.materialpalette.com/colors) And breakpoints of 50px starting from 600px width.
    - Opening the site with a browser smaller then 600px in width, set the background to red.
    - When the browser width is more then 600 pixels, the background is orange.
    - When the browser width is more then 650 pixels, the background is yellow.
    - When the browser width is more then 700 pixels, the background is green.
    - When the browser width is more then 750 pixels, the background is blue.
    - When the browser width is more then 800 pixels, the background is indigo.
    - When the browser width is more then 850 pixels, the background is purple.

2. Align the hint box to be on the top center by default. For users whose device is capable to display the site with more then 550px in height, place it in the middle of the page. For 650px+, move it to the bottom of the page.
    - Opening the site with a browser smaller then 550px in height, the hint box is located in the top of the page.
    - In case the window in exactly or higher then 550px, the hint box is in the middle of the page.
    - When the browser is higher then 650px, the box is in the bottom of the page.

3. For a smooth experience, change values using `transition`.
    - Resizing the page changes the background color over 1 sec.
    - Resizing the page moves the hint box over 1 sec.

## General requirements

- Try to split up the problem into small pieces and try to solve them before Googling.
- Don't modify the given HTML code.
- Don't use any 3rd party libraries.

## Hints

- Don't overthink it. If you got stuck in trying, just try to look the problem from another perspective.

## Starting your project



## Background materials

- <i class="far fa-exclamation"></i> [Media Queries Explained](https://medium.com/@pbojinov/media-queries-explained-9bf20a85731f)
- <i class="far fa-exclamation"></i> [CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
