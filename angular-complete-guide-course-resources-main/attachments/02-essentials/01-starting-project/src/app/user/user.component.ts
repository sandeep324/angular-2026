import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

interface User{
  id:string;
  avatar:string;
  name:string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

 
  @Input({required:true}) user!:User;


  @Output() selectedUser = new EventEmitter<User>();

  get userPath(){
    return "assets/users/" + this.user.avatar;
  }

  onUserSelected() {
    this.selectedUser.emit(this.user);
  }

}
