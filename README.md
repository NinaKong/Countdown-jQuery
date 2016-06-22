# Countdown-jQuery
Countdown is a responsive jQuery plugin. After enter the minutes, it shows a countdown given time. 

#Demo
A demo can be found at 'index.html' in this repository.

#Features
- Countdown
- Lightweight
- Support Browser: IE11, Firefox, Safari, Chrome

#Setup

#Include the stylesheet in the head section of your webpage
    <link href="css/styles.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="css/font-awesome.css" type="text/css">
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />  

#Include the script at the bottom of the body of your webpage
    <script type="text/javascript" src="js/jquery-2.1.4.js"></script>
    <script type="text/javascript" src="js/scripts.js"></script>
    
#Following is an example section that you could apply this plugin:
    <div class="content col-md-12 col-sm-12 col-xs-12">
        <form class="col-md-12 col-sm-12 col-xs-12 align-center" method="post" action="#">
            <input type="text" class="col-md-12 col-sm-12 col-xs-12" name="time" id="countdownInput" placeholder="Enter Countdown Minute">
            <button type="button" id="countdownButton" class="btn btn-primary btn-lg col-md-2 col-md-offset-5 col-sm-4 col-sm-offset-4 col-xs-8 col-xs-offset-2">Countdown</button>
            <span class="message"></span>
        </form>
        <div id="countdownMessage" class="col-md-12 col-sm-12 col-xs-12 align-center font-color"></div>
    </div> 



