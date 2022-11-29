import {
  Component,
  OnInit,
  Optional,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

@Component({
  selector: "app-app-details",
  templateUrl: "./app-details.component.html",
  styleUrls: ["./app-details.component.css"]
})
export class AppDetailsComponent implements OnInit {
  @ViewChild("myContainer", { read: ViewContainerRef }) vc: ViewContainerRef;
  @ViewChild("myTemp", { read: TemplateRef }) myTemplate: TemplateRef<any>;
  constructor(
    @Optional() public temp: TemplateRef<any>,
    @Optional() private container: ViewContainerRef
  ) {
    console.log("injected template = ", this.temp);
    console.log("this container = ", this.container);
  }

  ngAfterViewInit() {
    this.vc.createEmbeddedView(this.myTemplate);
  }

  ngOnInit(): void {}
}
