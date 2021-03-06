
# Walk, Hike, Run Cork 


The website can be found [here](https://annemariesheehan.github.io/Walk-Hike-Run-Cork/index.html).


The idea for the website came from a group of friends who like to know what areas they can run or hike in when they visit a county. The website was created to allow users to learn about the best trails for running, hiking or walking in Co. Cork. The site will be expanded over time to include other counties and eventually the island of Ireland. 

## UX

### Strategy

The design goal was to make the relevant information accessable to the target market. I wanted users to be visually drawn to each area through the use of picturesque photographs and descriptions of the various trails and parks. I used google maps to illustrate where the locations were, give some detail on each location and provided a link within each pin to bring the user directly to the relevant section of the walks page. Each section of the page or pages link back to each other so users can eaily move about the website to get the information they want. I have also provided a contact form that allows users to send in reviews of their own to be published, or to request other areas to be featured on the site. 

### Scope
This website is for anyone interested in the outdoors, and interested in exploration of tourist areas on foot. It offers trails and walks for all ages and abilities. It is also useful for beginners who would like to get to know the best areas for walking and the progressing onto hiking or running. Family friendly locations are also included. 

### User Stories
1. As a outdoor enthusiast, I want access to information online on places that are suitable to walk or hike in Co. Cork. It's an area I visit a lot and have been keen to get this information in one easily accessable place. 
2. As a runner, I'd like to know where the good running trails are, the off road adventures and beautiful parks. It can be hard to know the distance and type of terrain ahead of time so having it all in one place would be a great resourcce. 
3. As a family, we want to be more active with the children and are looking for information on nature reserves and parks in the Cork area where we can bring the kids to run around and learn about nature and the wild as well as taking in lots of fresh air. With young children, it's good to have a variety of places to go to expand their horizons. 

### Skeleton

The site was arranged as a single scrolling page with links throughout that allows the user to jump to the relevant sections, however it also contains a second more detailed walks page that is linked throughout to access further information. Functionality includes a google map with pins at the locations of some of the walks, and further information on these walks when you click the pin. It also contains a link to the walks page. 


### Surface
I chose a light colour scheme with striking photographs to make the site striking and dramatic to draw in the user. I also choose clean lines and clearly separted sections to make for easy reading. The colour theme is soothing and inviting to encourge the use to stay on the site to find more information. 

All the wireframe files can be found in the images folder of the project. Wireframes were done for mobile, Ipad pro and desktop. 

## Features

### Existing Features
I added a fixed image background that has a parralax effect. 
I used java script for the google map and the pin and click on effects of same 
I used java script for the sticky navbar function
I used Bootstrap Grid for layout


### Features left to Implement
If time had not been an issue I would have included a search functionality to allow users to search for areas they were curious about. This is something that will be implemented in future versions. 

## Technologies used

- HTML
- CSS
- [Bootstrap](https://getbootstrap.com/)
- [Javascript](https://www.javascript.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [Font Awesome](https://fontawesome.com/) 
- [Tiny Jpeg](www.tinyjpeg.com) to optimise images 
- [CSSAutoprefixer](https://autoprefixer.github.io/)


## Testing

- W3Schools validator
- Google Chrome developer tools
- Peer Code Review on Slack
- jshint.com 

1. W3Schools Validator for CSS, no errors found 
1. W3Schools Validator for HTML, errors found with body tag and warnings relating to section headers were all corrected. 
1. To check for errors using google chrome developer tools, I right clicked on my finished website and chose inspect. Initally broken links to photos were found and fixed.  
1. I posted my project in the Peer Code Review channel on Slack and received feedback on broken image links as well as guidance around contrast issues with heading colours. These were all fixed. 
1. I tested my javascript in jshint.com, no errors were found 
1. In the last few days a bug was found. The google map was no longer visible. Having checked with the Slack channel, my mentor and google itself, tutor support were eventually abel to help find the issue which was being caused by an open bracket on a media query and some incorrect CSS I had implemented while trying to fix the probelm. While frustrating, the issue helped me learn the various ways to find solutions to bug fixes. 


## Deployment 
 The site was deployed to github pages from Visual Studio Code as follows:
 1. Log into my GitHub account
 2. Choose the relevant repositry
 3. Ensure all changes have been pushed from VS to GitHub
 4. Click on the settings tab
 5. Go to the GitHub pages section
 6. Select the master-branch 
 7. GitHub provides you with a deployed site address

### To Deploy locally

1. In the github repository click on the 'Clone or Download' button. 
2. Copy the URL provided. 
3. Open a bash terminal and move to your desired directory. 
4. Type 'git clone' and paste in the URL.

## Credits

## Content 
The content came from myself, most of the photos are my own origianls. The description of the parks and trails are a combination of my own experiences or are taken from the areas public website example: The Ballycotton Cliff Walk photo comes from ballycotton.ie 


## Media
Most of the images I used were obtained from my personal library with the exception of Ballycotton Cliff Walk. 

## Code
Inspiration for the carddecks came from [codepen](https://www.getbootstrap.com/). I adapted the code to match my own requirements and design. I also adapted various pieces of code from [W3Schools](https://www.w3schools.com/). The navbar came from [Bootstrap](https://getbootstap.com/) and was adapted for my requirements. 

## Acknowledgements 

Thanks to my mentor Spencer for his guidance during this process. Thanks to the Code Institute Slack community for their guidance and in particular, thanks to tutor support in the last couple of days for their help with some very tricky code, in particular I'd like to acknowldge the assistance given by https://github.com/AJGreaves. 

I took inspiration from [Bootstrap](https://getbootstap.com/), [W3Schools](https://www.w3schools.com/) [Bootstrapious](https://bootstrapious.com) and found solutions to problems on [StackOverflow](https://stackoverflow.com/), [Medium](https://www.medium.com/) and [Codepen](https://www.codepen.io/) [googlemaps](https://console.cloud.google.com/google/maps-apis/overview)]. I also used the experience and some code I had in my previous milestone to streamline the process. 