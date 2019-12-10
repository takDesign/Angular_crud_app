import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
import { AppComponent } from "./app.component";
import { JellyfishesComponent } from "./jellyfishes/jellyfishes.component";
import { JellyfishDetailComponent } from "./jellyfish-detail/jellyfish-detail.component";
import { MessagesComponent } from "./messages/messages.component";

@NgModule({
  declarations: [
    AppComponent,
    JellyfishesComponent,
    JellyfishDetailComponent,
    MessagesComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
