import { NgModule } from '@angular/core';
import { DataBroadcastingComponent } from './data-broadcasting.component';
import { DataSharingService } from './services/data-sharing.service';



@NgModule({
  declarations: [DataBroadcastingComponent],
  imports: [
  ],
  exports: [DataBroadcastingComponent],
  providers: [DataSharingService]
})
export class NgShareModule { }
