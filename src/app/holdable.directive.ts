import { Directive, HostListener, EventEmitter, Output } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { takeUntil, tap, filter } from 'rxjs/operators';

@Directive({
  selector: '[appHoldable]'
})
export class HoldableDirective {

  @Output() holdTime: EventEmitter<number> = new EventEmitter<number>();
  private state: Subject<string> = new Subject<string>();
  private cancel: Observable<string>;

  constructor() {
    this.cancel = this.state.pipe(
      filter(v => v === 'cancel'),
      tap(() => {
        console.log('%c stopped hold', 'color:#ec6969;');
        this.holdTime.emit(0);
      })
    );
  }

  @HostListener('mouseup', ['$event'])
  @HostListener('mouseleave', ['$event'])
  onExit(): void {
    this.state.next('cancel');
  }

  @HostListener('mousedown', ['$event'])
  onHold(): void {
    console.log('%c started hold', 'color:#008000;');

    this.state.next('start');

    const intervalTime = 100;

    interval(intervalTime).pipe(
      takeUntil(this.cancel),
      tap(value => this.holdTime.emit(value * intervalTime)),
    ).subscribe();
  }
}
