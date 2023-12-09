import { Component, ElementRef, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 1000,
    items: 2,
    autoplay: true,
    autoplayTimeout:5000
  }
  
 

  @ViewChild('imgContainer') imgContainer!: ElementRef;



  ngOnInit(): void {}

 
}
