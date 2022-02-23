import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  currentUser: User = {id: '', username: ''};
  email: string = '';

  profileForm: FormGroup = new FormGroup({});


  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log('update profile')
  }

}
