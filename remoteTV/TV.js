class TV {
    constructor(channel, volume, status) {
        this.channel = channel;
        this.volume = volume;
        this.status = status;
    };

    move(Remote) {
        if (this.status){
            Remote.Controls()
            this.channel = Remote.code;
        } else {
            alert("plz turnOn TV");
        }

    };

    Status() {
        alert("current channel: " + this.channel + ", current volume: " + this.volume)
    };

    volumeUp() {
        if (this.status) {
            this.volume += 1;
            alert(this.volume);
        } else {
            alert("plz turnOn TV")
        }
    }

    volumeDown() {
        if (this.status) {
            this.volume -= 1;
            alert(this.volume);
        } else {
            alert("plz turnOn TV")
        }
    }

    turnOnTV() {
        alert("TV on");
    };

    turnOffTV() {
        alert("TV off");
    }
}