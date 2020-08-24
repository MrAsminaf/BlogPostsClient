import { Injectable } from '@angular/core'
import { IUser } from '../users/user'

@Injectable({
    providedIn: 'root'
})

export class UserService {
    getUsers() : IUser[] {
        return;
    }
}