import { Component, OnInit } from "@angular/core";
import { Jellyfish } from "../jellyfish";
import { JellyfishService } from "../jellyfish.service";

@Component({
  selector: "app-jellyfishes",
  templateUrl: "./jellyfishes.component.html",
  styleUrls: ["./jellyfishes.component.css"]
})
export class JellyfishesComponent implements OnInit {
  selectedJellyfish: Jellyfish;
  jellyfishes: Jellyfish[];

  constructor(private jellyfishService: JellyfishService) {}

  ngOnInit() {
    this.getJellyfishes();
  }

  onSelect(jellyfish: Jellyfish): void {
    this.selectedJellyfish = jellyfish;
  }

  getJellyfishes(): void {
    this.jellyfishService
      .getJellyfishes()
      .subscribe(jellyfishes => (this.jellyfishes = jellyfishes));
  }
}
