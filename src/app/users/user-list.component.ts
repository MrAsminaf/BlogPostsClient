import { Component, OnInit } from '@angular/core'
import { UserService } from '../shared/user-service'
import { IUser } from './user'

@Component({
    selector: 'bp-list',
    templateUrl: './user-list.component.html'
})

export class UserListComponent implements OnInit {
    userList: IUser[];

    constructor(private userSerivce: UserService) { }

    getList(): void {
        this.userSerivce.getUsers().subscribe(
            (data: IUser[]) => this.userList = data);
    }

    ngOnInit(): void {
        this.getList();
    }
}