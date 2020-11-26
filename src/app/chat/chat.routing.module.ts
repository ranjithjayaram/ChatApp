import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatDetailsComponent } from './chat-details/chat-details.component';

const routes: Routes = [
    { path: '', redirectTo: 'details', pathMatch: 'full' },
    { path: 'details', component: ChatDetailsComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ChatRoutingModule { }