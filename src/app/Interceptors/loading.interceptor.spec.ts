import { LoadingService } from "../Service/loading.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { LoadingInterceptor } from './loading.interceptor';


describe('LoadingInterceptor for User Details', () => {
  let httpTestingController: HttpTestingController;
  let loadingService: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoadingService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoadingInterceptor,
          multi: true
        }
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    loadingService = TestBed.inject(LoadingService);
  });

  it('should show and hide loading indicator on user details request', () => {
    const spyShow = spyOn(loadingService, 'show').and.callThrough();
    const spyHide = spyOn(loadingService, 'hide').and.callThrough();

    // Perform a test HTTP request for user details
    TestBed.inject(HttpClient).get('https://reqres.in/api/users/1').subscribe();

    // Expect the show method to be called
    expect(spyShow).toHaveBeenCalled();
    // Expect the hide method to be called after the request completes
    httpTestingController.expectOne('https://reqres.in/api/users/1').flush({});
    expect(spyHide).toHaveBeenCalled();

  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
