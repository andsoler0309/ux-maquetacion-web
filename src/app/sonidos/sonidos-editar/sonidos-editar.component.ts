import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sonidos-editar',
  templateUrl: './sonidos-editar.component.html',
  styleUrls: ['./sonidos-editar.component.css']
})
export class SonidosEditarComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }


  onSubmit(): void {
    // Here you can add authentication logic before redirecting
    this.router.navigate(['/sonidos']);
  }
}
