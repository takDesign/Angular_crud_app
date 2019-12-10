import { Component, OnInit, Input } from "@angular/core";
import { Jellyfish } from "../jellyfish";

@Component({
  selector: "app-jellyfish-detail",
  templateUrl: "./jellyfish-detail.component.html",
  styleUrls: ["./jellyfish-detail.component.css"]
})
export class JellyfishDetailComponent implements OnInit {
  @Input() jellyfish: Jellyfish;
  constructor() {}

  ngOnInit() {}
}
