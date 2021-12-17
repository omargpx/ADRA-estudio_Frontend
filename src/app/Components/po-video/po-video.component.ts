import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-po-video',
  templateUrl: './po-video.component.html',
  styleUrls: ['./po-video.component.css']
})
export class PoVideoComponent implements OnInit {
  @ViewChild('video') iframe:ElementRef;

  constructor(private render:Renderer2) { }

  ngOnInit(): void {
    this.getUrlVideo();
    this.cargarVideo();
  }

  Url:any ='';

  getUrlVideo(){
    var local = localStorage.getItem('urlVideo') ;
    let a:any=local;
    this.Url=a.replace(/['"]+/g, '');
  }

  cargarVideo(){
    console.log(this.Url);
    let ifa = this.iframe.nativeElement;
    this.render.setAttribute(ifa,'src',this.Url);
  }
}
