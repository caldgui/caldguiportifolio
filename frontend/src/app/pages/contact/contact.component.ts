import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ["contact.component.scss"]
})
export class ContactComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  public loadingSpinner: boolean = false;
  public successContactFlag: boolean = false;
  public failContactFlag: boolean = false;
  public sendContactFlag: boolean = true;
  public disableButtonFlag: boolean = false;

  public contactForm: FormGroup = this.formbuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    message: ['', Validators.required]
  });

  constructor(private http: HttpClient,
              private formbuilder: FormBuilder) {}

  

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }

  public onSubmit(){
    this.loadingSpinner = true;
    this.sendContactFlag = false;
    if(this.contactForm.valid == true){
      this.http.post('https://formspree.io/f/mgejbdlz', 
      { 
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        message: this.contactForm.value.message
      }).subscribe({
        next: (resp) => {
          console.log(resp);
          this.loadingSpinner = false;
          this.successContactFlag = true;
        },
        error: (err) => {
          console.log(err);
          this.loadingSpinner = false;
          this.failContactFlag = true;
        }
      });
    }else{
      this.loadingSpinner = false;
      this.failContactFlag = true;
    }
  }

  public resetForm(){
    this.contactForm.reset();
    this.sendContactFlag = true;
    this.disableButtonFlag = false;
    this.successContactFlag = false;
    this.failContactFlag = false;
  }
}
