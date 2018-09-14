


function fetchVideo(event) {


    console.log("Fetching video..."); 
    
    var video = document.getElementById("file");
    document.getElementById("output").innerHTML = video;

    console.log("Response");

    var input = event.target;

    var reader = new FileReader();                  //https://www.javascripture.com/FileReader
    reader.onload = function(){
        var dataURL = reader.result   ;
        var output = document.getElementById('output');
        output.src = dataURL;
    }
    reader.readAsDataURL(input.files[0]);

    var binary = reader.result;
    
    var CryptoJS = require("crypto-js");

    var ciphertext = CryptoJS.SHA3.encrypt(binary, 'secret key 123');

    console.log(ciphertext);

    
}

