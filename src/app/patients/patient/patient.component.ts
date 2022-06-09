import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../../shared/patient';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-contact',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})

export class PatientComponent implements OnInit {

  patientForm: FormGroup;
  patient: Patient;
  private _bookListUrl = ' http://localhost:3000/save';


  constructor(@Inject(MAT_DIALOG_DATA) public data: Patient,
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.patientForm = this.fb.group({
      nom: this.data.nom,
      prenom: this.data.prenom,
      tel: this.data.tel,
      email: this.data.email,
      dateNaissance: this.data.dateNaissance,
      notes: this.data.notes
    });
  }

  onSubmit() {
    this.patient = this.patientForm.value;
    console.log(this.patient);
    this.savePatient(this.patient);
    this.patientForm.reset();
  }

  savePatient(patient: Patient) {

  }

}