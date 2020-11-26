import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/models/new-user.model';
import { ChatService } from '../../services/chat.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: NewUser = {};
  constructor( private _chatService: ChatService) { }

  ngOnInit(): void {
    
  }
  
}
