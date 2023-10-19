# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Feedback](./screenshots/thank-you-modal.png)
![Active and Focus states](./screenshots/active-focus-states.png)
![Thank You modal](./screenshots/thank-you-modal.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Used event delegation that helped me handle events efficiently for multiple buttons:
```js
numberRating.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        userFeedback.innerHTML = event.target.innerHTML;
    }
});
```

Exited the modal by targeting the main nody when clicked:
```js
main.addEventListener('click', (event) => {
    if (event.target === main) {
        thankYouModal.style.display = 'none';
    }
});
```
### Continued development

I want to expand more on event handling and best practices.

### Useful resources

- ChatGPT really helped me for the event handling part

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@Fejiro001](https://www.frontendmentor.io/profile/Fejiro001)
- Twitter - [@aberefejiro](https://twitter.com/aberefejiro)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.