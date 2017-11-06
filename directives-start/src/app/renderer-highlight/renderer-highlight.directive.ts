import { 
  Directive,
  OnInit,
  ElementRef,
  Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    const el = this.elRef.nativeElement;
    this.renderer.setStyle(el, 'backgroundColor', 'purple');
  }

}
