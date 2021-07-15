# Chrome_Extension


## General info
This is a Chrome Extension to track the time spent on any website.
It keeps record of all the visited websites and their time spent in a tabular format.
	
## Technologies
This project is build up using basic web technologies such as HTML,JavaScript and CSS.


## Setup

Step 1:- Download all the files in the repository and save them in a new folder.

Step 2:- Then head towards chrome://extensions/ .(Cannot be opened in Incognito Mode)

Step 3:- Click on 'Load unpacked' located in the top left corner and select the created folder.

##Your extension is ready to use !!!

1. To use the extension head over the extension icon and click on the 3 dots in the right hand side.
2. Then click on the options button where you can see all the visited websites on that day and their time spent !. This this the Options page.

## Contents of the project (Extra Information)

1. Manifest file :- The manifest. json file contains information that defines the extension. The format of the information in the file is JSON.
2. Options.html :- Front end for the tabular format of all the visited webistes in the options page.
3. Popup.html :- Front end for the popup which appears by clicking the extensions. It displays the total time spent on that website and the maximum time spent on any website.
4. Background.js :- This is the main file of the project where all the calculations and storing urls is done. It runs in the background every second and increases the time spent on that website by 1sec. It uses Chrome local storage which serves as a dictionary.
5. Options.js :- This file is used to create the graph of all the visited websites on that particular day. It uses CanvasJS to carry out the operation.
6. Popup.js :- Used to convert the seconds into days ,hours and minutes.  




