class SwitchButton{
    constructor() {
    };
    connectTOLamp(ElectricLamp){
        if (this.status){
            ElectricLamp.turnOn();
        } else {
            ElectricLamp.turnOff()
        }
    };
    switchOff(){
        this.status = false;
    };
    switchOn(){
        this.status = true;
    }
}