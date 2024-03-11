import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repeticiones-editar',
  templateUrl: './repeticiones-editar.component.html',
  styleUrls: ['./repeticiones-editar.component.css']
})
export class RepeticionesEditarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.router.navigate(['/repeticiones']);
  }
}
