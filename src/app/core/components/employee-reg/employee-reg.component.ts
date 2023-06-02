import { group } from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { ControlContainer, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../../Service1/snackbar.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { EmplyService } from '../../emply.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncvalidatorsService } from '../../asyncvalidators.service';


@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.scss']
})
export class EmployeeRegComponent implements OnInit {

  APIurl = environment.APIurl;
  messages: any;
  isFormDisabled = true;
  // employees: any;
  // employee: any;
  constructor(
    private snackbarService: SnackbarService,
    private emplyservice: EmplyService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {

  }
  Designation: any;
  Role: any;
  empdetails: any;
  update = false;
  param_data = { id: '', data: '' }
  // employee: any;
  // role:any;

  ngOnInit() {
    this.route.params.subscribe((res: any) => {
      if (res && res.data && res.id && res.disable == 'enable') {
        this.param_data.data = res.data;
        this.param_data.id = res.id;
        this.update = true;
        console.log('params', res);
        this.emplyservice.getEmp({ id: +res.id }).subscribe((res: any) => {
          console.log('empdetails: ', res);
          this.empdetails = res.emplyDetails;
          console.log("emp details", this.empdetails)
          this.emp();
        })
      }
      else if (res && res.data && res.id && res.disable == 'disable') {
        this.param_data.data = res.data;
        this.param_data.id = res.id;
        this.update = true;
        console.log('params', res);
        this.emplyservice.getEmp({ id: +res.id }).subscribe((res: any) => {
          console.log('empdetails: ', res);
          this.empdetails = res.emplyDetails;
          console.log("emp details", this.empdetails)
          this.emp();
          this.EmployeeregForm.disable();

        })
      }
      else {
        this.emp();
      }
    })

    this.authService.messages.subscribe((res: any) => this.messages = res)
    // this.authService.getMessage();
    // this.emplyservice.getposts().subscribe(response=>
    //   {
    //     console.log('response: ',response); 

    //   })
    // throw new Error('Method not implemented.');
    // this.httpService.get(this.APIurl+'posts').subscribe(response=>{
    // console.log('response: ',response);
    // })

    this.emplyservice.getDesignation().subscribe((response: any) => {
      this.Designation = response.designation;
    });
    this.emplyservice.getRole().subscribe((response: any) => {
      this.Role = response.roles;
    });

    // this.EmployeeregForm = new FormGroup(
    //   {
    //     firstname: new FormControl(null, Validators.required),
    //     lastname: new FormControl(null, Validators.required),
    //     Email: new FormControl(null, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')),
    //     AlternateEmail: new FormControl(null, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')),
    //     Dateofbirth: new FormControl(null, Validators.required),
    //     DateofJoining: new FormControl(null, Validators.required),
    //     designationId: new FormControl(null, Validators.required),
    //     roleId: new FormControl(null, Validators.required),
    //     contacts: new FormArray([])
    //   });
    // this.createArray();

  }
  emp() {
    this.EmployeeregForm = new FormGroup(
      {
        firstname: new FormControl(this.empdetails && this.empdetails.firstname ? this.empdetails.firstname : null, Validators.required),
        lastname: new FormControl(this.empdetails && this.empdetails.lastname ? this.empdetails.lastname : null, Validators.required),
        Email: new FormControl(this.empdetails && this.empdetails.Email ? this.empdetails.Email : null, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), this.empdetails ?
          AsyncvalidatorsService.asyncEmailValidation(this.emplyservice, this.empdetails.id) : AsyncvalidatorsService.asyncEmailValidation(this.emplyservice)),
        AlternateEmail: new FormControl(this.empdetails && this.empdetails.AlternateEmail ? this.empdetails.AlternateEmail : null, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')),
        Dateofbirth: new FormControl(this.empdetails && this.empdetails.Dateofbirth ? this.empdetails.Dateofbirth : null, Validators.required),
        DateofJoining: new FormControl(this.empdetails && this.empdetails.DateofJoining ? this.empdetails.DateofJoining : null, Validators.required),
        designationId: new FormControl(this.empdetails && this.empdetails.designationId ? this.empdetails.designationId : null, Validators.required),
        roleId: new FormControl(this.empdetails && this.empdetails.roleId ? this.empdetails.roleId : null, Validators.required),
        password: new FormControl(null),
        contacts: new FormArray([])
      });
    this.createArray();
  }
  getContacts() {
    return (this.EmployeeregForm.get('contacts') as FormArray).controls;
  }
  getControls(form: any, i: number) {
    return form.get('contacts').controls[i].controls;
  }
  createArray() {
    (this.EmployeeregForm.get('contacts') as FormArray).push(new FormGroup({
      address: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      pincode: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required)
    }));
  }
  removeItem(index: number): void {
    (this.EmployeeregForm.get('contacts') as FormArray).removeAt(index);
  }
  // Designation = [
  //   { id: 1, name: 'team leader' },
  //   { id: 2, name: 'manager' },
  //   { id: 3, name: 'frontend developer' },
  //   { id: 4, name: 'backend developer' },
  //   { id: 5, name: 'software engineer' },
  //   { id: 6, name: 'developsoftwareer' }
  // ];
  // Role = [
  //   { id: 1, name: 'admin' }, 
  //   { id: 2, name: 'super admin' },
  //   { id: 3, name: 'employee' }
  // ];
  EmployeeregForm!: FormGroup;
  stringValidationPattern!: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$,0-999999999999';
  todayDate = new Date();

  onsubmit() {
    // console.log('onsumbit',this.EmployeeregForm.value); 
    // if(this.EmployeeregForm.valid) 
    // {
    //   console.log('form value: ',this.EmployeeregForm.value);  
    // }
    if (!this.update) {
      if (this.EmployeeregForm.valid) {

        this.emplyservice.createemployee(this.EmployeeregForm.value).subscribe((response: any) => {

          console.log('Response', response);

        })
      }
    }
    else {
      this.EmployeeregForm.value.id = this.param_data.id;
      this.emplyservice.getupdate(this.EmployeeregForm.value).subscribe((Response: any) => {
        if (Response) {
          this.snackbarService.Snackbar('records updated', 'success')
        }
        // console.log('updated values:',Response);

      });
      // console.log("update employee details", this.EmployeeregForm.value);
    }

    if (this.EmployeeregForm.valid) {
      // duration: 5000,
      this.snackbarService.Snackbar('records successfully saved', 'success')
    }
    else {
      this.snackbarService.Snackbar('Some records are missing', 'error');
    }
  }
  CanDeactivate(): boolean {
    return this.EmployeeregForm ? !this.EmployeeregForm.dirty : true;
  }

}
// function removeAt(index: number) {
//   throw new Error('Function not implemented.');
// }


