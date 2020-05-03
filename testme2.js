function loadJQ() {

    // the minimum version of jQuery we want
    var v = "2.2.4";

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



function target(){

    console.log("Starting Target Function.");

    $(".carouselLegendGrid").children('div:first').children('div').each(function(){
        var img = $(this).children('button').children('img').attr('src');
        console.log(img);
    });



}

function createOverlay(){

    $(document).ready(function() {
                $(".submit").click(function()
                {
                    $('<iframe />');  // Create an iframe element
                    $('<iframe />', {
                        name: 'frame1',
                        id: 'frame1',
                        src: 'http://www.programmingfacts.com'
                    }).appendTo('body');
                });
            });

    
}



loadJQ();
