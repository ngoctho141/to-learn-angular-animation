import { NgModule } from "@angular/core";
// import { AppComponent } from "./app.component";
import { AppDetailsComponent } from "./app-details/app-details.component";
import { AppDetailListComponent } from "./app-detail-list/app-detail-list.component";
import { Routes, RouterModule } from "@angular/router";
import { AppDetailOverviewComponent } from "./app-detail-overview/app-detail-overview.component";
import { ToLearnAnimationComponent } from "./to-learn-animation/to-learn-animation.component";
const routes: Routes = [
  {
    path: "",
    component: AppDetailsComponent,
    children: [
      {
        path: "overview",
        component: AppDetailOverviewComponent
      },
      {
        path: "list",
        component: AppDetailListComponent
      }
    ]
  },
  {
    path: "to-learn-animation",
    component: ToLearnAnimationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
