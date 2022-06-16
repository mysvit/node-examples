function pingImg(ip, callback) {

    if(!this.inUse) {

        this.inUse = true;
        this.callback = callback
        this.ip = ip;

        var _that = this;

        this.img = new Image();

        this.img.onload = function() {_that.good();};
        this.img.onerror = function() {_that.good();};

        this.start = new Date().getTime();
        this.img.src = "http://" + ip;
        this.timer = setTimeout(function() { _that.bad();}, 1500);

    }
}

function ping(host, port, pong) {

    var started = new Date().getTime();

    var http = new XMLHttpRequest();

    http.open("GET", "http://" + host + ":" + port, /*async*/true);
    http.onreadystatechange = function() {
        if (http.readyState == 4) {
            var ended = new Date().getTime();

            var milliseconds = ended - started;

            if (pong != null) {
                pong(milliseconds);
            }
        }
    };
    try {
        http.send(null);
    } catch(exception) {
        // this is expected
    }

}

pingImg('140.82.121.3')


