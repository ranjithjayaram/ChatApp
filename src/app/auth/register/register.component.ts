import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { NewUser } from 'src/app/models/new-user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: NewUser = {};
  constructor(private _chatService: ChatService, private _router:Router) { }

  ngOnInit(): void {

  }
  /**
   * createUser
   */
  public createUser(user: NewUser) {
    this._chatService.createUser(user).then(data => {
      console.log(data)
      this._router.navigate(['/chat'])
    }).catch(err => {
        console.log(err)
      })
  }

}
