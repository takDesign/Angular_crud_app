import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Jellyfish } from "./jellyfish";
import { JELLYFISHES } from "./mock-jellyfishes";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class JellyfishService {
  constructor(private messageService: MessageService) {}

  getJellyfishes(): Observable<Jellyfish[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add("JellyfishService: fetched jellyfishes");
    return of(JELLYFISHES);
  }
}
