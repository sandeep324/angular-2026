import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

 
  @Input({required:true}) id!:string;
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name !: string;

  @Output() selectedUser = new EventEmitter<string>();

  get userPath(){
    return "assets/users/" + this.avatar;
  }

  onUserSelected() {
    this.selectedUser.emit(this.id);
  }

}
