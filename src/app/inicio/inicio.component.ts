import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor( private router: Router) {

  }

  onSubmit(): void {
    // Here you can add authentication logic before redirecting
    this.router.navigate(['/home']);
  }

}
