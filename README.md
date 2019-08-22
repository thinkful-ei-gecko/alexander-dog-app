# alexander-dog-app
Week 2 Dog App Exercise,

Alexander Fukui

8/22/2019, for Thinkful

## Goals:
### 1.
*Create an app that lets users choose to display between 1 and 50 random dog images, then prints the results to the console. The app should feature a form with a required input where users indicate the number of images to retrieve, and the input should default to 3. Use the endpoint described in the "DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS COLLECTION" section of this page of the DogAPI docs.*

2:12 PM: Completed in [/app1](https://github.com/thinkful-ei-gecko/alexander-dog-app/tree/master/app1)

### 2.
*Building on the previous app, create an app that lets users choose to display between 1 and 50 random dog images, then loads the images in the console. This app should adhere to all of the requirements from the first one, in addition to displaying the images in the DOM.*

Fixes:
- Updated getBorkRepo with a 'query' constant to keep track of changes to query between apps.
- Using Jsdoc for clarity.
- Added undefined/falsey case for input in getBorkRepo.

3:13 PM: Completed in [/app2](https://github.com/thinkful-ei-gecko/alexander-dog-app/tree/master/app2)

### 3.
*Create an app that loads a single random image for a specific breed, based on a user input. This app should account for the happy case when the breed is found, as well as the unhappy case when it is not. Use the endpoint described in the "RANDOM IMAGE FROM A BREED COLLECTION" section of this page of the DogAPI docs. Note that the API will return an HTTP status code of 404 along with a JSON object with info about the error if a request is made for a breed that can't be found.*

Fixes:
- Change bork amount input to bork breed input.
- Overhauled most everything...
- Extractor function that assesses data included.
- Included css and new element for error handling.

6:00 PM: Completed in [/app3](https://github.com/thinkful-ei-gecko/alexander-dog-app/tree/master/app3)
