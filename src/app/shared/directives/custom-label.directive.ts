import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'green';
  private _errors?: ValidationErrors | null;

  // recive color
  @Input() set color ( value: string ) {
    this._color = value;
    this.setStyle();
  }

  // reecive errors
  @Input() set errors( value: ValidationErrors | null  | undefined ) {
    this._errors = value;
    this.setErrorMessage()
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    // console.log('Method not implemented.');
    this.setStyle();
  }

  setStyle(): void {
    // Valiodation
    if ( !this.htmlElement ) return;

    this.htmlElement.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if ( !this.htmlElement ) return;
    if ( !this._errors ) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    // posibles errors
    const errors = Object.keys( this._errors );

    if ( errors.includes('required') ) {
      this.htmlElement.nativeElement.innerText = 'Required field';
      return;
    }

    if ( errors.includes('minlength') ) {
      const min = this._errors!['minlength']['requiredLength']
      const current = this._errors!['minlength']['actualLength']

      this.htmlElement.nativeElement.innerText = `Minimum ${ current } / ${ min } characters.`;
      return;
    }

    if ( errors.includes('email') ) {
      this.htmlElement.nativeElement.innerText = 'Wrong email format';
      return;
    }
  }

}
