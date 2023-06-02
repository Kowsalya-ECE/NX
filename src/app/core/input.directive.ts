import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {

  constructor(private el:ElementRef) { }
  // ngAfterViewInit(){
  //   // const element = this.el.nativeElement;
  //   // const width = element.offsetWidth;
  //   // console.log(width);
  //   // console.log('children width',this.el.nativeElement.children[1].offsetWidth);
  //   // console.log(this.el.nativeElement.offsetWidth);
  //   // console.log(this.el.nativeElement.offsetWidth);
  //   this.el.nativeElement.children[1].style.paddingLeft=this.el.nativeElement.children[0].offsetWidth+10+'px';
  //   this.el.nativeElement.children[1].style.paddingRight=this.el.nativeElement.children[2].offsetWidth+10+'px';
  // }
}
