import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppDetailsComponent } from "./app-details/app-details.component";
import { AppDetailListComponent } from "./app-detail-list/app-detail-list.component";
import { AppDetailOverviewComponent } from "./app-detail-overview/app-detail-overview.component";
import { AppRoutingModule } from "./app-routing.module";
import { TabComponent } from "./tab/tab.component";
import { TabsComponent } from "./tabs/tabs.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AppDetailsComponent,
    AppDetailListComponent,
    AppDetailOverviewComponent,
    TabComponent,
    TabsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
