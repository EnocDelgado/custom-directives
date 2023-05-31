import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit{

  private userService = inject( UsersServiceService );
  public userId = signal(1);

  public currentUser = signal<User | undefined>( undefined );
  public userWasFound = signal( false );

  public fullName = computed( () => {
    if ( !this.currentUser() ) return 'User not found!';
    return `${ this.currentUser()?.first_name } ${ this.currentUser()?.last_name }`
  })

  ngOnInit(): void {
    this.loadUser( this.userId() );
  }

  loadUser( id: number ) {
    // validations
    if ( id <= 0 ) return;

    this.userId.set( id );
    // Faster when charging
    this.currentUser.set( undefined );

    // http request
    this.userService.getUserById( id )
      .subscribe({
        next: ( user ) => {
          this.currentUser.set( user );
          this.userWasFound.set( true );
        },
        error: () => {
          this.userWasFound.set( false ),
          this.currentUser.set( undefined )
        },
      });
  }
}
