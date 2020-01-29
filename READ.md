
# Walk, Hike, Run Cork 


The website can be found [here](https://annemariesheehan.github....).

![Website Snippet](https://github)


The idea for the website came from a group of friends who like to know what areas they can run or hike in when they visit a county. The website was created to allow users to learn about the best trails for running, hiking or walking in Co. Cork. The site will be expanded over time to include other counties and eventually the island of Ireland. 

## UX

### Strategy

The design goal was to make the relevant information accessable to the target market. I wanted users to be visually drawn to each area through the use of picturesque photographs and descriptions of the various trails and parks. 

### Scope
This website is for anyone interested in the outdoors, and interested in exploration of tourist areas on foot. It offers trails and walks for all ages and abilities. 

### User Stories
1. As a outdoor enthusiast, I want access to information online on places that are suitable to walk or hike in Co. Cork. It's an area I visit a lot and have been keen to get this information in one easily accessable place. 
2. As a runner, I'd like to know where the good running trails are, the off road adventures and beautiful parks. It can be hard to know the distance and type of terrain ahead of time so having it all in one place would be a great resourcce. 
3. As a family, we want to be more active with the children and are looking for information on nature reserves and parks in the Cork area where we can bring the kids to run around and learn about nature and the wild as well as taking in lots of fresh air. With young children, it's good to have a variety of places to go to expand their horizons. 

### Skeleton

The site was arranged as a single scrolling page with links throughout that allows the user to jump to the relevant sections, however it also contains a second more detailed walks page that is linked throughout to access further information. Functionality includes a google map with pins at the locations of some of the walks, and further information on these walks when you click the pin. It also contains a link to the walks page. 


### Surface
I chose a light colour scheme with striking photographs to make the site striking and dramatic to draw in the user. I also choose clean lines and clearly separted sections to make for easy reading. The colour theme is soothing and inviting to encourge the use to stay on the site to find more information. 

All the wireframe files can be found in the images folder of the project. Wireframes were done for mobile, Ipad pro and desktop. [Website Mockup](https://github.com/AnnemarieSheehan/First-Milestone-Project/blob/master/assets/Images/Website-Mockup.png) [Ipad Pro](https://github.com/AnnemarieSheehan/First-Milestone-Project/blob/master/assets/Images/Ipad-pro.png) and [Mobile](https://github.com/AnnemarieSheehan/First-Milestone-Project/blob/master/assets/Images/mobilemockup.png). 

## Features

### Existing Features
I added a fixed image background that has a parralax effect. 
I used java script for the google map and the pin and click on effects of same 
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

1. W3Schools Validator. I pasted the HTML from my project into the validator and got 8 warnings. These included spaces in image names, errors in the contact form where names did not match ID's as well as some `h1` warnings. I amended the errors and reposted the code. I then pasted the CSS code and ran the validation again, this time finding 8 errors although they all related to a one duplicate line which, when removed showed no errors. 
1. To check for errors using google chrome developer tools, I right clicked on my finished website and chose inspect. The only error showing related to a cookie, the message was *A cookie associated with a cross-site resource at [Fontawesome](http://fontawesome.com/) was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. As I don't fully understand this, further investigation is required*.
1. I posted my project in the Peer Code Review channel on Slack and got detailed feedback with multiple suggestions and corrections. For example fixing file names which had capital letters, removing unused classes and code, optimising images and much more. I was also guided to make my navbar sticky. I tried this but did not like the look as the navbar is transparent and the logo was showing ontop of the phot of Ashling when you moved down the page. To fix this I got some guidance on Slack and was shown how to make the logo dissapear using some javascript code (acknowledgements below). 
1. Some of my file names are using capitals which is not correct, however, when I tried to fix them and push the changes to Github, the links were not working, therefore I have left them as is for this project. I need to be aware in my next project of creating correct file names from the begining to avoid this problem again. 

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
The content came from myself, most of the photos are my own origianls. The description of the parks and trails are a combination of my own experiences or are taken from the areas public website example: The Ballycotton Cliff Walk + LIST AND SITE OTHER SOURCES HERE 



## Media
Most of the images I used were obtained from my personal library with the exception of: 

## Code
Inspiration for the carddecks came from [codepen](https://www.getbootstrap.com/). I adapted the code to match my own requirements and design. I also adapted various pieces of code from [W3Schools](https://www.w3schools.com/). The navbar came from [Bootstrap](https://getbootstap.com/) and was adapted for my requirements. 

## Acknowledgements 

Thanks to my mentor Spencer for his guidance during this process. Thanks to the Code Institute Slack community for their guidance and information and the tutors for helping with some sticky code. I took inspiration from [Bootstrap](https://getbootstap.com/), [W3Schools](https://www.w3schools.com/) and found solutions to problems on [StackOverflow](https://stackoverflow.com/), [Medium](https://www.medium.com/) and [Codepen](https://www.codepen.io/). I also used the experience I had in my previous milestone to streamline the process. 