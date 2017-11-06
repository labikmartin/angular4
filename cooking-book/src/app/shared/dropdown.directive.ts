import { 
  Directive,
  Renderer2,
  ElementRef,
  HostBinding,
  HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  toggle: boolean = false;
  @HostBinding('class.open') isOpen: boolean = false;

  constructor(
    private elRef: ElementRef, 
    private renderer: Renderer2
  ) {}

  // EXAMPLE WITH RENDERER (add directive on .dropdown-toggle to open)
  @HostListener('click') toggleOpen() {
    const elDd   = this.elRef.nativeElement;
    const ddList = elDd.nextElementSibling;
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.renderer.addClass(ddList, 'show');
    }
    else {
      this.renderer.removeClass(ddList, 'show');
    }
  }

  // EXAMPLE WITH HOST BINDING  (add directive on .dropdown to open)
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  //   console.log(' Hello from hostbind');
  // }

}
