import { AfterViewInit, Component } from "@angular/core";
declare var bootstrap: any;

@Component({
  selector: "app-ini",
  imports: [],
  templateUrl: "./ini.html",
  styleUrl: "./ini.css",
})
export default class Ini implements AfterViewInit {
  ngAfterViewInit(): void {
    const carouselEl = document.getElementById("carouselInicio");
    if (carouselEl) {
      new bootstrap.Carousel(carouselEl, {
        interval: 10000, // 10 segundos
        ride: "carousel",
        pause: false, // no se detiene al hover
        touch: true,
      });
    }
  }
}
