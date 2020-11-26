import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from '../chat/chat/chat.component';
import { ChatDetailsComponent } from '../chat/chat-details/chat-details.component';
import { ChatPreviewComponent } from '../chat/chat-preview/chat-preview.component';
import { RouterModule } from '@angular/router';
import { ChatRoutingModule } from './chat.routing.module'
@NgModule({
  declarations: [ChatComponent, ChatDetailsComponent, ChatPreviewComponent],
  imports: [
    CommonModule,RouterModule,ChatRoutingModule
  ]
})
export class ChatModule { }
