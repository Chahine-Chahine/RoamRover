<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

>  Roam Rover is a mobile app designed for group adventures and trip planning. It simplifies the decision-making process by leveraging AI for top recommendations.
> Roam Rover aims to facilitate real-time discussions within groups, allowing users to plan outings effortlessly. It provides access to a comprehensive list of places and recommendations, with the added feature of AI-generated trip suggestions.

### User Stories
- As a user, I want to generate a trip based on my budget without the need to search for places and compare budgets.
- As a user, I want to check the locations of recommended or chosen places to make informed decisions.
- As a user, I want to inform my friends about the plan and discuss trip details within the app.
- As a user, I want a list of good recommendations to choose from manually.
- As a user, I want the app to calculate trip expenses and provide a trip estimated total.
### Admin Stories
- As an admin, I want to have comprehensive access to all announcements and places creation's history.
- As an admin, I want to enhance the app's content by adding new places that users might find interesting.
- As an admin, I want to effectively communicate with users by adding announcements.
<br><br>

<!-- Tech stack -->
<img src="./readme/title3.svg"/>

###  Roam Rover is built using the following technologies:

- This project uses the [ReactNative app development framework](https://reactnative.dev/). ReactNative is a cross-platform hybrid app development platform which allows us to use a single codebase for apps on mobile, desktop, and the web.
- The app leverages [Redux](https://redux.js.org/) for state management, providing a predictable state container. This ensures efficient data flow throughout the application.
- For persistent storage, the app uses [Async Storage](https://react-native-async-storage.github.io/async-storage/), allowing data to be stored locally on the device.
- The app uses the font ["Work Sans"](https://fonts.google.com/specimen/Work+Sans) as its main font, and the design of the app adheres to the material design guidelines.

<br><br>
<!-- UI UX -->
<img src="./readme/title4.svg"/>


> We designed Roam Rover using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

- Project Figma design [figma](https://www.figma.com/file/5CgT0dwIKPiVcGiMI2XmpA/Final-Project?type=design&node-id=8%3A17&mode=design&t=DQpFoX6qTc7XoAGm-1)


### Mockups
| Home screen  | Location Details Screen | AI Questionnaire Screen |
| ---| ---| ---|
| ![Landing](./readme/homeScreen.png) | ![fsdaf](./readme/LocationDescription.png) | ![fsdaf](./readme/AIQuestionnaire.png) |

<br><br>

<!-- Database Design -->
<img src="./readme/title5.svg"/>

###  Architecting Data Excellence: Innovative Database Design Strategies:

- Insert ER Diagram here


<br><br>


<!-- Implementation -->
<img src="./readme/title6.svg"/>


### User Screens (Mobile)

1. **Onboarding Screens**
   ![Onboarding](link_to_image)

2. **Signin Screen**
   ![Signin](link_to_image)

3. **Sign Up Screen**
   ![Sign Up](link_to_image)

4. **Home Screen**
   ![Home](link_to_image)

5. **Trip Details Screen**
   ![Trip Details](link_to_image)

6. **Room List Screen**
   ![Room List](link_to_image)

7. **Chatroom Screen**
   ![Chatroom](link_to_image)

8. **AI Questionnaire Screen**
   ![AI Questionnaire](link_to_image)

9. **Custom Trip Screen**
   ![Custom Trip](link_to_image)

10. **Bookmark Screen**
    ![Bookmark](link_to_image)

11. **Location Details Screen**
    ![Location Details](link_to_image)

12. **Map Screen**
    ![Map](link_to_image)

13. **Profile Screen**
    ![Profile](link_to_image)

14. **Update Profile Screen**
    ![Update Profile](link_to_image)

15. **Loading Screen**
    ![Loading](link_to_image)


### Admin Screens (Web)
| Login screen  | Register screen |  Landing screen |
| ---| ---| ---|
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |
| Home screen  | Menu Screen | Order Screen |
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

<br><br>


<!-- Prompt Engineering -->
<img src="./readme/title7.svg"/>

###  Mastering AI Interaction: Unveiling the Power of Prompt Engineering:

- This project uses advanced prompt engineering techniques to optimize the interaction with natural language processing models. By skillfully crafting input instructions, we tailor the behavior of the models to achieve precise and efficient language understanding and generation for various tasks and preferences.

<br><br>

<!-- AWS Deployment -->
<img src="./readme/title8.svg"/>

###  Efficient AI Deployment: Unleashing the Potential with AWS Integration:

- This project leverages AWS deployment strategies to seamlessly integrate and deploy natural language processing models. With a focus on scalability, reliability, and performance, we ensure that AI applications powered by these models deliver robust and responsive solutions for diverse use cases.

<br><br>

<!-- Unit Testing -->
<img src="./readme/title9.svg"/>

###  Precision in Development: Harnessing the Power of Unit Testing:

- This project employs rigorous unit testing methodologies to ensure the reliability and accuracy of code components. By systematically evaluating individual units of the software, we guarantee a robust foundation, identifying and addressing potential issues early in the development process.

<br><br>


<!-- How to run -->
<img src="./readme/title10.svg"/>

> To set up Roam Rover locally, follow these steps:

### Prerequisites


## Installation
## Frontend (React Native)
```sh
git clone https://github.com/Chahine-Chahine/RoamRover.git
```
### Navigate to the frontend directory
```sh
cd frontend
```
### Install NPM packages
 ```sh
  npm install npm@latest -g
  ```

## Enter your API key in config.js
### const API_KEY = 'ENTER YOUR API';

## Backend (Laravel)
### Navigate to the backend directory
```sh
cd backend
```

## Install Composer dependencies
```sh
composer install
```

## Install Composer dependencies
```sh
composer install
```

## Generate the application key
```sh
php artisan key:generate
```

## Download Laravel dependencies
```sh
php artisan migrate
```

## Admin Panel (React)
### Navigate to the adminPanel directory
```sh
cd adminPanel
```

## Install NPM packages
```sh
npm install
```

Now, the frontend, backend, and adminPanel of Roam Rover are set up. You can run them locally and explore their features.

Feel free to explore and enjoy using Roam Rover!