# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Desktop](/Screenshots/Screenshot_20230207_085215.png)
![Mobile](/Screenshots/Screenshot_20230207_085117.png.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [Advice Slip API](https://api.adviceslip.com) - API

### What I learned

JavaScript Fetch API allows the developer to fetch API data from a certain URL. It uses Promise to deliver more features and make 
requests to serverse from the web browsers.

Using the fetch method and the api link. I converted the response to json and used the JSON.stringify() method to convert it to a JSON string.

Advice Slip JSON
```
{
  slip: {
    id: 194,
    advice: "Don't always rely on your comforts."
  }
}
```
### Continued development
I'm still working on making it mobile responsive using media queries. The current project is not yet fully responsive.

### Useful resources

- [JavaScript Fetch API](https://www.javascripttutorial.net/javascript-fetch-api/) - This helped me to better understand fetching an API data from a url.

## Author

- Website - [Jean Kurt De Austria](https://www.raket.ph/kurtdeaustria11)
- Frontend Mentor - [@Kurt-Chan](https://www.frontendmentor.io/profile/Kurt-Chan)


