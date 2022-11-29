import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-app-detail-list",
  templateUrl: "./app-detail-list.component.html",
  styleUrls: ["./app-detail-list.component.css"]
})
export class AppDetailListComponent implements OnInit {
  public listName: string = "Dota Allstar Heroes List";
  constructor(private appCompRef: AppComponent) {
    console.log(appCompRef.title);
    appCompRef.appDetailListRef = this;
  }

  ngOnInit(): void {}
}
