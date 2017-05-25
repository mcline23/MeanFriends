import { Component, OnInit, OnChanges } from '@angular/core';

import { Friend } from './friend'
import { FriendsService } from './friends.service'
import { Router } from "@angular/router"

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: Friend[] = []; 

  constructor(private router: Router, private friendsService: FriendsService) { }

  ngOnInit() {
    this.getFriends() 
  }
  
  create(friend : Friend){
     
    this.friendsService.create_friend(friend)
   
    .then(status => this.getFriends())
    .catch(err => console.log(err))
    
    this.friends.push(friend); 
    console.log(friend)                           
  }
  delete(friend: Friend){
    const i = this.friends.indexOf(friend)
    this.friends.splice(i, 1)
  }
  
  getFriends(){  
    this.friendsService.get_all_friends()
    .then(friends => this.friends = friends)
    .catch(err => console.log(err));
  }
 
}
