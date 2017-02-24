# cli-weather

## BEFORE READING

Cli-Weather being a node.js application, you must have Node.js installed on your computer first. 
If you don't, go to https://nodejs.org/en/ and install Node.js.


## About Cli-Weather

This is a node.js weather application powered that gives you the weather (Condition and temperature) in a given place.

![Weather Preview](http://i.imgur.com/XMZRHuC.png)



## Setup

After you've cloned this repo to your desktop, go to its root directory and run npm install to install its dependencies.


## Usage 
Just run node cli.js with the parameter you want.
The usage is 'node cli.js --city --country --scale'

![Weather Preview](http://i.imgur.com/lrGcFie.png)

#### Examples
node cli.js weather London UK C
Result : 
		'  London, UK' 
		'  Condition: Partly Cloudy' '
		'  Temperature: 32C '

#### Special cases
If your city name contains spaces, replace them with '-'
Example : 'node cli.js Rio-De-Janeiro Bresil'

## Please note
If you don't write the country name, the application can find out the right city but may not put it out. For example, if you use 'node cli.js Rio-De-Janeiro', the output will be 'Rio-De-Janeiro, Bangladesh'. However, the weather will still be correct.     






