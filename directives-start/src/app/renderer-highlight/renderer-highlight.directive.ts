import { 
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  Input,
  HostListener,
  HostBinding } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit {

  @Input() defaultClr: string = 'unset';
  @Input() hoverClr: string = 'red';
  @HostBinding('style.backgroundColor') bgClr: string;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.bgClr = this.defaultClr;
    // const el = this.elRef.nativeElement;
    // this.renderer.setStyle(el, 'backgroundColor', 'purple');
  }

  @HostListener('mouseenter', ['$event']) onEnter(e) {
    const el = this.elRef.nativeElement;
    // accessing element props via HostBinding | custom props
    this.bgClr = this.hoverClr;
    // this.renderer.setStyle(el, 'backgroundColor', 'purple');
    console.log(e);
  }

  @HostListener('mouseleave') mouseleave() {
    const el = this.elRef.nativeElement;
    // accessing element props via HostBinding | custom props
    this.bgClr = this.defaultClr;
    // accessing element props with renderer
    // this.renderer.removeStyle(el, 'backgroundColor');
  }

}
