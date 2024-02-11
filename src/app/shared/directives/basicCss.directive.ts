import { Directive, ElementRef, OnInit } from "@angular/core";




@Directive({
    selector: '[basicCss]'
})
export class Basicdirec implements OnInit {

    constructor(
        private eleref: ElementRef
    ) { }
    ngOnInit(): void {
        console.log(this.eleref.nativeElement);
        this.eleref.nativeElement.style.backgroundColor = "yellow"
        this.eleref.nativeElement.style.marginTop = "20px"
        this.eleref.nativeElement.style.padding = "50px"

    }
}

