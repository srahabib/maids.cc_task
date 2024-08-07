import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  page: number = 1;
  pageSize: number = 5;
  filteredUsers: any[] = [];

  constructor(
    private userService: UserService,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.fetchUsers(this.page);
  }

  fetchUsers(page: number): void {
    this.userService.getUsers(page).subscribe((response) => {
      this.users = response.data;
      this.filteredUsers = this.users;
    });
  }

  onUserClick(id: number): void {
    this.router.navigate(['/users', id]);
  }

  onSearch(event: any): void {
    const searchTerm = event.target.value;
    if (searchTerm) {
      this.filteredUsers = this.users.filter(user =>
        user.id.toString().includes(searchTerm)
      );
    } else {
      this.filteredUsers = this.users;
    }
  }

  pageChange(event: number): void {
    this.page = event;
  }
}
