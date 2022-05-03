Hi!

Thank you so much for taking the time to lookover my solution to Bitly's Summer Intern 2022 Coding Assessment.

I was asked to take a given data set, as well as the related files and then filter the results to only include JSON Objects from the linked decodes that were associated with the encodes list!

This problem definitely was more complex than I thought as I went through a number of different stages and solutions before arriving at my final product! To run my program, you will need to have Node.js installed as I used Javascript and Node Package Manager in my solution.




Before Getting Started

If you are on Windows you can install Gitbash from https://www.educative.io/edpresso/how-to-install-git-bash-in-windows and following the instructions so you have access to the Unix Command Line, as well as a terminal to actually run my program!
If on Mac or Linux, your terminal already has the Unix commands built in, just open your Terminal to start!




1) Installing Node.js
Since I am using Javasript and NPM (Node Package Manager) we need to install Node.js which can be found here - https://nodejs.org/en/download/
Find which version you need and follow the included instructions!

2) Dependencies
Once Node and NPM have been installed you will need to install a single dependency! First download my program (bitly-algo.js) as well as the supporting files (encodes.csv and decodes.json). Once those have been downloaded, open up the terminal to the location bitly-algo.js was downloaded (either your downloads folder or the folder you cloned/forked when accessing this!) and run 'npm install --save csvtojson@latest' (without the quotation marks!) This will install CDVtoJSON, of which all of the documentation has been provided here (https://github.com/Keyang/node-csvtojson) (There is also references in my code and comments).

3) Running The Code
Finally, to see the results, just open your terminal or GitBash command line to the location my program was downloaded and type 'node bitly-algo.js' again without the quotes!
The final JSON objects with key-value pairs corresponding to the long URL and the click count will display in the console!



Technologies used- I used a node package called CSVtoJSON to parse the CSV data in encodes.csv, node.js to test and run my Javascript program. I also tried a number of ways to solve this problem ranging from hard coding everything, manually building the for loops on the filter etc, to finally deciding to use the .filter() .sort() and .map() array methods in my solution so that my code was cleaner and more elegant. I have used all of these array methods in my past so after reading up a bit more on how to implement them here (and a TON of testing and console logging),

Overall the biggest challenge was when I went to pull the data for the encodes from a .csv file to my program as it was waiting on a promise, and all of my code was finishing before the data from the .csv was returned. I did include a lot of commented code (much more than active code) so that the person viewing it could see my thought process and evolution of the code, as well as understand what each segment does for transparency. It was a fun project and ended up being more challenging then I initially thought it would be!
