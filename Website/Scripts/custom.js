(function () {
    var http = new XMLHttpRequest();
    var url = "http://localhost:21267/home/edit/hoo";
    var params = "foo=moo";
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // http.setRequestHeader("Content-length", params.length);
    // http.setRequestHeader("Connection", "close");
    
    http.send(params);
})();