/**
 * Hosted jQuery Bookmarklet
 * @description A nifty tool for creating hosted javascript browser bookmarklets supporting jQuery
 * @author Laander (http://laander.com) at Konscript (http://konscript.com)
 * @gist https://gist.github.com/gists/750857
 */

/** 
 * Usage:
 * The following snippet should be the link saved as a bookmarklet by the user.
 * Instead of a regular website adress, this will execute the remotely located javascript on 
 * the page where the user is currently located. Replace the test address with you own.
 * 
 * <a alt="My Bookmarklet" href="javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://eximious.support/test.js';})();">Drag to Bookmarks Bar to save this Bookmarklet</a>
 */

function run() {

    // Your script here.
    // Remember that you have full access to the DOM on which page the bookmarklet is loaded,
    // which means that you can manipulate the content of other sites on-the-fly
    console.log("Starting script.");
    let domain = window.location.hostname;

    console.log("Doman recognized as: "+ domain);

    if(domain == 'www.target.com'){

        target();

    }


}

function loadJQ() {

    // the minimum version of jQuery we want
    var v = "1.3.2";

    // check prior inclusion and version
    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
        var done = false;
        var script = document.createElement("script");
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
        script.onload = script.onreadystatechange = function(){
            if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                done = true;
                run();
            }
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    } else {
        run();
    }

}

function target(){

    console.log("Starting Target Function.");

    $(".carouselLegendGrid").children('div:first').children('div').each(function(){
        var img = $(this).children('button').children('img').attr('src');
    });



}



loadJQ();
run();
