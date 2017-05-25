import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Friend } from './../friend'

import { FriendsService } from "./../friends.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-friend-new',
  templateUrl: './friend-new.component.html',
  styleUrls: ['./friend-new.component.css']
})
export class FriendNewComponent implements OnInit {
  newFriend = new Friend; 
  @Output() createNewFriendEvent = new EventEmitter(); 
  constructor(private router: Router, private friendsService: FriendsService) { }

  ngOnInit() {
  }
  create(){
      this.router.navigate(["/"]);
      this.friendsService.create_friend(this.newFriend)
        .then(()=> {
           this.newFriend = new Friend;
         
            })
        .catch((err) => console.log(err))

    
  }
}
