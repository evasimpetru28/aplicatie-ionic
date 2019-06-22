import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  public message = "Acestea sunt bisericile: ";
  public bis = { titlu: "biserica casin" ,religie: "ateu",   src:"https://ziuadecj.realitatea.net/images/Articole/00018643/00009681_large.jpg"};
  public bisArray = [
    {
      re:"ortodoxa",
      ti: "Biserica 1",
      sr: "https://gazetadecluj.ro/wp-content/uploads/2016/03/catedrala-ortodoxa-cluj-2.jpg",
      text: "jsijooifj"
    }
,
    {
      re:"ortodoxa",
      ti: "Biserica 2",
      sr: "http://primariasirineasa.ro/images/biserici/DSCI2084.JPG",
      text:"hdhfehj"
    }
,
    {
      re:"ortodoxa",
      ti: "Biserica 3",
      sr: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxB2-QaNbgJuXpYD722tDrRD5toUzLE6uCXKIkVQ7SNHh76kdxA",
      text: "hehehhdhdhd"
    
    }
,
    {
      re:"ortodoxa",
      ti: "Biserica 4",
      sr: "https://www.stefancelmare.ro/documente/dyn_img/biserici/Patrauti-1.jpg",
      text:"dhshsksjxik"
      
    }
  ]
}
