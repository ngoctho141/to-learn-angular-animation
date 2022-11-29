import { Component } from "@angular/core";
import { AppDetailListComponent } from "./app-detail-list/app-detail-list.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public appDetailListRef: AppDetailListComponent;
  title = "Angular CLI Template";

  ngOnInit() {
    if (this.appDetailListRef) {
      console.log(this.appDetailListRef.listName);
    }
  }
}
