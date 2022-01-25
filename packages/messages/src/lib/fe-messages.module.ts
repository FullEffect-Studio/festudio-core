import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { NzAlertModule } from "ng-zorro-antd/alert";
import { FeMessagesService } from "./messages/fe-messages.service";

@NgModule({
  imports: [CommonModule, NzAlertModule],
  declarations: [MessagesComponent],
  providers: [FeMessagesService],
  exports: [MessagesComponent]
})
export class FeMessagesModule {}
