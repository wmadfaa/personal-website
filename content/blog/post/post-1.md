---
template-key: post
cover: /img/cover.jpg
title: how to add a dark theme to your web app 
description: In this short article, I will show you how to do this only using CSS.
date: 2020-10-19
tags: [CSS]
published: true
---

_Making your web-app able to switch between dark and light theme according to the preferred-user-theme is a nice touch that makes your web-app feels like Native apps. In this short article, I will show you how to do this only using CSS._.

To detect if the user has requested the system to use a light/dark color theme, we are going to use the prefers-color-scheme CSS media query.
here is an example of how you can use it in your code.

```css
body { 
    background: white; 
    color: black; 
}

@media (prefers-color-scheme: dark) {
    body { 
        background: black; 
        color: white; 
    }
}
```
**NOTE**

the styles inside `css>@media (prefers-color-scheme: light) {...}` will be applied if the user has notified the system that he prefers the light theme or if he has not expressed an active preference.

**TIP**

you can change the prefers-color-scheme directly from the Rendering panel in Chrome developer-tools.

1.  Open the Chrome Developer tools
2.  Open the Command Control: Ctrl+Shift+P or Command+Shift+P (Mac)
3.  Type "Show rendering"
4.  Set the Emulate CSS media feature prefers-color-scheme to the value you want to debug