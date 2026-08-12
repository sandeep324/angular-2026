import { Component, Input } from '@angular/core';


interface User{
  id:string;
  avatar:string;
  name:string;
}
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) selectedUser!: User;

}
