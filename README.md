# Airbnb-Amenities-Detection-2020 

![image](https://user-images.githubusercontent.com/26644174/121780568-93dea980-cbbe-11eb-80d6-595e307984c4.png)


This repository contains the code for the Front-end side of the complete pipeline. App features the user to upload an Image of any house/apartment etc. and hit inference to get all the amenities inside. Process for inference is as follows - the image is first converted into an 2D array and passed into an Onxx model which gives the bounding boxes of all the objects in the Image, using the coordinates bounding boxes are drawn on the image and shown on the screen.
---
* Came across a youtube [video](https://www.youtube.com/watch?v=C_lIenSJb3c&list=PL6vjgQ2-qJFeMrZ0sBjmnUBZNX9xaqKuM) where [Daniel](https://www.youtube.com/channel/UCr8O8l5cCX85Oem1d18EezQ/playlists) replicated the [airbnb amenity detection](https://medium.com/airbnb-engineering/amenity-detection-and-beyond-new-frontiers-of-computer-vision-at-airbnb-144a4441b72e) task from scratch with data gathering to preprocessing to training an existing model to deploying and creating an App for inference.
* Just the first few minutes and I knew I had to try this out. It covers everything one needs to learn about how Deep Learning works and applying it to solve a real-world problem.
* To explain the task is detecting Amenities from a photo uploaded of a room, [Airbnb](https://www.airbnb.co.in/) is a platform where you can rent a house or apartment. So what is the business use case here, historically a user uploads photos of the property and adds some details as well as the amenities that come with it, Amenity is something like luxury or that can be used, like a couch or cabinet, etc. So instead of the user adding the amenities why not detect them ourselves from the images. That's where DeepL comes in in form of Object Detection. So let's give it a try Shal we !!
* Link to my [notion article](https://www.notion.so/Airbnb-Amenities-Detection-2020-5079c38d2d2b4ffc94d617272914cc01)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
