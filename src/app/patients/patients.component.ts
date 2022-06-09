import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PatientComponent } from './patient/patient.component';
import { Patient } from '../shared/patient';
// {
// id: number;
// nom: string;
// prenom: string;
// tel: number;
// email: string;
// dateNaissance: string;
// notes: string
// }

const ELEMENT_DATA: Patient[] = [
  {
    id:1,
    prenom: "Ali",
    nom: "Ben Salah",
    tel: 58433690,
    email: 'ali.bensalah@gmail.com',
    dateNaissance : '1982-02-23',
    notes :'RAS'
  },
  {
    id:2,
    prenom: "Mourad",
    nom: "Ben Lakhal",
    tel: 55456983,
    email: 'mourad98@gmail.com',
    dateNaissance : '2001-06-12',
    notes :'RAS'
  },
  {
    id:34,
    prenom: "Mohamed",
    nom: "Ben Hmed",
    tel: 23755120,
    email: '',
    dateNaissance : '1972-08-29',
    notes :'RAS'
  },
];



@Component({
  selector: 'app-patient',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  searched: any;
  selectedElement: any;
  constructor(private _liveAnnouncer: LiveAnnouncer,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    ) { }
    @ViewChild(MatSort) sort: MatSort;

    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    } 



  displayedColumns: string[] = ['id', 'nom', 'prenom', 'tel', 'fiche', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  editPatient(patient: Patient) {
    this._snackBar.open("Modification d'un patient", "Edit", {
      duration: 1500
    });

    const dialogRef = this.dialog.open(PatientComponent, {
      data: {
        nom: patient.nom,
        prenom: patient.prenom,
        tel: patient.tel,
        id: patient.id,
        dateNaissance: patient.dateNaissance,
        notes: patient.notes,
      }
      // data: {nom: 'Ettounsi', prenom: 'Hmed', tel: 224455926, id: 5, dateNaissance: '1983-10-15', notes: 'sentou fi hala'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  applyFilter(event: Event) {
    console.log('event: ', event.target)
    const filterValue = (event.target as HTMLInputElement).value;

    console.log('filterValue: ', filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: any
    ) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  term: string; 

  ngOnInit(): void {
  }

}
