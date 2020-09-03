function Cat(name,weight,maxSpeed) {
    this.name=name;
    this.weight=weight;
    this.maxSpeed=maxSpeed;

    this.makeNoise=function () {
        document.write("Memeo");
    }
    this.catchRat=function (rat) {
        if(this.maxSpeed>rat.speed){

            document.write("Da bat duoc");
            this.eatRat(rat);
        }
    }
    this.eatRat=function (rat) {
        if(rat.status){
            document.write("Da an");
            this.weight+=rat.weight;
            rat.status=false;
        }
    }

}
