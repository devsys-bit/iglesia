import { Component } from "@angular/core";

import Hdr from "../hdr/hdr";
import Ftr from "../ftr/ftr";

import Ini from "../ini/ini";
import Acr from "../acr/acr";
import Evt from "../evt/evt";
import Cnt from "../cnt/cnt";

@Component({
  selector: "app-cor",
  imports: [Hdr, Ftr, Ini, Acr, Evt, Cnt],
  templateUrl: "./cor.html",
  styleUrl: "./cor.css",
})
export default class Cor {}
