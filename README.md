# Project Overview

## Project Name

### Hz

## Project Description

When working in a live concert venue setting, one of a sound engineer's main jobs is to remove feedback if it's audible. Identifying the feedback frequency and removing it is crucial. This game helps train your ear to identify these frequencies at a fundamental level (sinewaves) so that this process becomes second nature.

## Wireframes

![alt text](https://res.cloudinary.com/willnolin/image/upload/v1623009615/Hz_1_u1ubwb.png "WireFrame Hz")

## Component Hierarchy

![alt text](https://res.cloudinary.com/willnolin/image/upload/v1623010343/Hz-components_ufcdub.png "Components Hz")

## API and Data Sample

https://api.airtable.com/v0/app67oeILCiV8Nzfc/Table%201

```json
{
  "records": [
    {
      "id": "recmCwyTYfagtmSQl",
      "fields": {
        "user": "willy",
        "date": "2021-06-05",
        "score": "10"
      },
      "createdTime": "2021-06-06T03:10:04.000Z"
    },
    {
      "id": "recgWgl0ITQuLlPMS",
      "fields": {
        "user": "bruno",
        "date": "2021-06-06",
        "score": "34"
      },
      "createdTime": "2021-06-06T03:12:51.000Z"
    },
    {
      "id": "recKhlNypqYyME7Dw",
      "fields": {
        "user": "bebe",
        "score": "25",
        "date": "2021-06-07"
      },
      "createdTime": "2021-06-06T20:13:20.000Z"
    }
  ],
  "offset": "recKhlNypqYyME7Dw"
}
```

#### MVP

- Get High score data from scoreboard and render to DOM
- Create form to post user score in scoreboard API
- Create sounds file folder with 3-4second mp3s
- Choose random sound and set to trigger with PlayButton
- Generate 3 random choice buttons and 1 correct button matching id of randomly chosen sound
- Render playbutton and choice buttons to the page
- Implement comparison algorithm to check if use clicks correct choice
- Implement counter to update score if user is correct
- Implement array of incorrect guesses.
- Implement check for three incorrect guesses ( in which case, game over)
- Render score to the page
- Render message "Correct" of "incorrect" to the page
- Build Modal for form, add user input for name, send score and date to post request
- style!

#### PostMVP

- Implement volume slider
- Render strike (X) for each wrong answer to the page
- Add sine wave animation when sound is loaded (or just any sine wave animation)
- create a timed game component where player has to guess as many correct frequencies as they can in 2 minutes
- add "timed game record" as an API field, if they have none, display N/A

## Project Schedule

| Day        | Deliverable                                                  | Status   |
| ---------- | ------------------------------------------------------------ | -------- |
| June 4-6   | Prompt / Wireframes / Component Heirarchy/ Timeframes        | Complete |
| June 7     | Project Approval /Pseudo / Airtable / PlayButton/ Get/ Post/ | Complete |
| June 8     | Choice Buttons / Implement Quiz Functionality /Display       | Complete |
| June 9     | Cont. Display / CSS style                                    | Complete |
| June 10    | Advanced Style / MVP                                         | Complete |
| June 11    | Post-MVP                                                     | Complete |
| June 12-13 | continue Post-MVP                                            | Complete |
| June 14    | Presentation                                                 | Complete |

## Timeframes

| Component                                                      | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Render AirTable Data                                           |    H     |      2hrs      |     2hrs      |             |
| Create Form Componenet                                         |    H     |      2hrs      |     3hrs      |             |
| GET / POST data                                                |    H     |      2hrs      |    1.5 hrs    |             |
| Display high score data                                        |    H     |      2hrs      |     1 hr      |             |
| Create sound folder                                            |    H     |      2hrs      |     2hrs      |             |
| Create array with ref to sounds and names                      |    H     |      3hrs      |     2hrs      |             |
| Import and get random sound                                    |    H     |      2hrs      |     2hrs      |             |
| Create PlayButton Component                                    |    H     |      1hr       |     2hrs      |             |
| OnClick play random sound (changes with refresh)               |    H     |      3hr       |     2hrs      |             |
| Create button with Playbutton sound name (correct choice)      |    H     |      2hrs      |     2hrs      |             |
| Create other button Components with random values (from array) |    H     |      3hrs      |     4hrs      |             |
| Implement Gameplay (comparisons)                               |    H     |      3hrs      |     2hrs      |             |
| Keep track of score and wrong guesses                          |    H     |      1hrs      |      1hr      |             |
| Render messages, score count and strikes                       |    H     |      3hrs      |     3hrs      |             |
| Create Modal (form) for game over                              |    H     |      3hrs      |     2hrs      |             |
| Display Modal to the screen                                    |    H     |      3hrs      |     2hrs      |             |
| Implement Routing with all Components                          |    H     |      3hrs      |     3hrs      |             |
| Inital styling                                                 |    H     |      3hrs      |     4hrs      |             |
| Advanced styling (transitions)                                 |    M     |      3hrs      |     5hrs      |             |
| Total                                                          |    H     |     46hrs      |    45.5hrs    |             |

## SWOT Analysis

### Strengths:

I know what the app should do and I feel ambitious about implementing things beyond the scope of what we've learned. I have time to research and try things out.

### Weaknesses:

I want to go above and beyond so I need to manage my time so that I don't go on tangents. This schedule will help. I still don't 100% understand the lifecycles of components and the order of how things are 'fired' on render.

### Opportunities:

I would use this application. Apps like this exist and I've really benifitted from them. I know it's a niche but it's important for a sound engineer to recognize frequencies. The ultimate goal here would be to expand this app and implement a "frequency identifier". The app could listen to a sound and identify the fundamental frequency (helpful for identifying a problem frequency).

### Threats:

This goal involves learning tons of math, which I've been doing on the side. I need to budget my time wisely to reach my goal and also set realistic expectations.
