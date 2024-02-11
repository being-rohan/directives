import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";



@Directive({
    selector:'[mousecss]'
})

export class Mouseeventrs implements OnInit{
    constructor (
        private ele:ElementRef,
        private renderref:Renderer2
    ){}
    ngOnInit(): void {
        this.renderref.setStyle(this.ele.nativeElement,"background-color",'pink')
        this.renderref.setStyle(this.ele.nativeElement,"padding",'15px')
        this.renderref.setStyle(this.ele.nativeElement,"color",'black')
    }
    
    @HostListener('mouseover')
    onMouseOver(){
    this.renderref.setStyle(this.ele.nativeElement,"background-color",'red')
    this.renderref.setStyle(this.ele.nativeElement,"color",'black')

    }
    @HostListener('mouseout')
    onMouseOver2(){
        this.renderref.setStyle(this.ele.nativeElement,"background-color",'pink')
        this.renderref.setStyle(this.ele.nativeElement,"color",'black')
    
        }
}