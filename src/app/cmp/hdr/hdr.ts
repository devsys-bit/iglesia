import { Component } from "@angular/core";
import { RouterLinkWithHref } from "@angular/router";

@Component({
  selector: "app-hdr",
  imports: [RouterLinkWithHref],
  templateUrl: "./hdr.html",
  styleUrl: "./hdr.css",
})
export default class Hdr {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
