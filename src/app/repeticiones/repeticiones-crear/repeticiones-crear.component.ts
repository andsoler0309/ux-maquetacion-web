import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-repeticiones-crear',
  templateUrl: './repeticiones-crear.component.html',
  styleUrls: ['./repeticiones-crear.component.css']
})
export class RepeticionesCrearComponent implements OnInit {


  constructor(private router: Router) {

  }

  ngOnInit() {
  }


  onSubmit(): void {
    this.router.navigate(['/repeticiones']);
  }
}
