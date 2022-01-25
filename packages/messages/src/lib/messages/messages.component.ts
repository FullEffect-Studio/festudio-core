import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { FeMessagesService } from "./fe-messages.service";

@Component({
  selector: 'fe-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  errors$ =  this.feMessagesService.errors$
  @Input() closeable= true
  @Input() title = "Some errors occurred";

  constructor(private feMessagesService: FeMessagesService) {
  }

  ngOnInit(): void {
    this.errors$ =  this.feMessagesService.errors$
  }

  close(){
    this.feMessagesService.emitError([])
  }

}
