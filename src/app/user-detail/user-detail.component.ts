import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { UserDetailsService } from '../Service/user-details.service';


@Component({
  selector: 'app-user-detail',

  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailsComponent implements OnInit {
  user: any = null;

constructor(
    private route: ActivatedRoute,
    private userDetailsService: UserDetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.userDetailsService.getUserDetails(id).subscribe(data => {
      this.user = data.data;
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
