import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../Service/loading.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})

export class LoadingComponent implements OnInit {
  LoadingService = Inject(LoadingService)
  loading$ = this.LoadingService.loading$;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {}
}
