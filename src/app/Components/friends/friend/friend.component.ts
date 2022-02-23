import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Components/models/user';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  @Input() user: User;
  
  constructor() {
    this.user = {
      id: '0',
      username: 'neo',
      age: '0',
      friendsIds: [],
      password: '',
      email: ''
    }
   }

  ngOnInit(): void {
  }

}

