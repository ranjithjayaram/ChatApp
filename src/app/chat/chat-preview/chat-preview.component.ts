import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { NewUser } from '../../models/new-user.model';
@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.css']
})
export class ChatPreviewComponent implements OnInit {

  constructor( private _chatService: ChatService) { }
  public Users:Array<any>=[];
  ngOnInit(): void {
    this._chatService.getUsers().subscribe(data=>{
      data.map(item =>{
        let user:any= item;
        this.Users.push(user);
      })
    })
  }

}
