import { Component } from '@angular/core'
import { UserService } from '../shared/user-service'
import { IUser } from './user'

@Component({
    selector: 'bp-list',
    templateUrl: './user-list.component.html'
})

export class UserListComponent {
    userList: IUser[] = [
        {
            "Id": 1,
            "Name": "Adam",
            "SecondName": "Olgrzymek",
            "Age": 19
        },
        {
            "Id": 2,
            "Name": "Name2",
            "SecondName": "SecondName2",
            "Age": 20
        }
    ];
}