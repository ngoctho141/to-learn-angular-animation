import { Component, ContentChildren, OnInit, QueryList } from "@angular/core";
import { TabComponent } from "../tab/tab.component";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"]
})
export class TabsComponent implements OnInit {
  public xArray = ["happy", "happy", "happy", "happy"];
  @ContentChildren(TabComponent) tabList: QueryList<TabComponent>;
  tabs: TabComponent[] = [];

  ngAfterContentInit() {
    this.tabList.forEach((x) => {
      this.tabs.push(x);
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
