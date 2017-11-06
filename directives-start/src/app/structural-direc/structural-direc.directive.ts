import { 
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDirec]'
})
export class StructuralDirecDirective {

  @Input() set appStructuralDirec(condition: boolean) {
    if (!condition) {
      this.viewRef.createEmbeddedView(this.templateRef);
      console.log(this.templateRef);
    } 
    else {
      this.viewRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }

}
