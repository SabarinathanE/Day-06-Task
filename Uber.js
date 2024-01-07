// class to calculate uber price?

class Uberprice{
    constructor(basepriceperkm,basepricepermin, surge){
        this.basepriceperkm = basepriceperkm;
        this.basepricepermin = basepricepermin;
        this.surge = surge || 1;
    }
    

calculateprice(){
   let baseprice= basepriceperkm* distance + basepricepermin* duration;
   let totalprice = baseprice * surge;

    return totalprice;
}
}
const basepriceperkm = 2;
const basepricepermin = 2;
let distance = 10;
let duration = 25;
let surge = 1.5;

let pricecal = new Uberprice("basepriceperkm", "basepricepermin", "surge");

let totalprice = pricecal.calculateprice()
console.log(totalprice)


