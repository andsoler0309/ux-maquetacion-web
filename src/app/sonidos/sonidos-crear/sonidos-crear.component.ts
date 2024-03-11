import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sonidos-crear',
  templateUrl: './sonidos-crear.component.html',
  styleUrls: ['./sonidos-crear.component.css']
})
export class SonidosCrearComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  onSubmit(): void {
    // Here you can add authentication logic before redirecting
    this.router.navigate(['/sonidos']);
  }
}
