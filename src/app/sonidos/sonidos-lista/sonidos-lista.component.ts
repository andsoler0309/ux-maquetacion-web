import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmacionComponent } from 'src/app/modal-confirmacion/modal-confirmacion.component';

@Component({
  selector: 'app-sonidos-lista',
  templateUrl: './sonidos-lista.component.html',
  styleUrls: ['./sonidos-lista.component.css']
})
export class SonidosListaComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(itemName: string): void {
    const dialogRef = this.dialog.open(ModalConfirmacionComponent, {
      width: '70vw',
      height: '70vh',
      panelClass: 'custom-modalbox',
      data: { name:itemName } // you can pass data here if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Delete the item here
        console.log('The dialog was closed; delete confirmed');
      }
    });
  }

}
