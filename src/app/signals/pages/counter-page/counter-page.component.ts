import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  public counter = signal(1);
  public squareCounter = computed( () => this.counter() * this.counter() );

  increaseaBy( value: number ) {
    this.counter.update( current => current + 1)
  }

  decreaseaBy( value: number ) {
    this.counter.update( current => current - 1)
  }

}
