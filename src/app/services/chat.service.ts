import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user.model';
import { NewUser } from 'src/app/models/new-user.model';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private firestore: AngularFirestore) { }

  /**
   * getUsers
   */
  public getUsers() {  
    return this.firestore.collection('users').valueChanges()
  }

  /**
   * createUser
   */
  public createUser(user: NewUser) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('users').add(user).then(res => {
        resolve(res)
      }, err => reject(err));
    }
    )
  }

  /**
   * verifyLogin
user   */
  public verifyLogin(user: any) {
    this.firestore.collection('users').doc(user.email).valueChanges().subscribe(data=>{
      console.log(data);
    })
    
  }
}
