class Remote{
    constructor(code) {
        this.code = code;
    };
    Controls(){
        this.code = +prompt("enter your channel")
    };
    channel(TV){
        if (!TV.status){
            alert("plz turnOn TV");
        } else {
            TV.Status();
        }

    };
    turnOnTV(TV){
        TV.turnOnTV();
        TV.status = true;
    };
    turnOffTV(TV){
        TV.turnOffTV();
        TV.status = false;
    };


}