import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";





@Directive({
    selector: '[adavancecss]'
})
export class Advancecss implements OnInit {

    constructor(
        private eleref: ElementRef,
        private rendered:Renderer2
    ) { }
    ngOnInit(): void {
     this.rendered.setStyle(this.eleref.nativeElement,'background-color','blue')
     this.rendered.setStyle(this.eleref.nativeElement,'padding','15px')
     this.rendered.setStyle(this.eleref.nativeElement,'color','white')
    }
}