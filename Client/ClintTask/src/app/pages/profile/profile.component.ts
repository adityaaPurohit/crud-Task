import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { FormBuilder, FormGroup ,FormControl } from "@angular/forms";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
email;
profileData;
filePath: string;
form: FormGroup;

  formdata;

  constructor(private profile_service : ProfileService,public fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      Image: [null]
    })
  
  
    const email = JSON.parse( localStorage.getItem("userData"))
    if(email != null){
      this.email =  email.email
    }
   }
   uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      Image: file
    });
    this.form.get('Image').updateValueAndValidity()
  }

  //  imagePreview(e) {
  //   const file = (e.target as HTMLInputElement).files[0];

  //   this.myForm.patchValue({
  //     img: file
  //   });

  //   this.myForm.get('img').updateValueAndValidity()

  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.filePath = reader.result as string;
  //   }
  //   reader.readAsDataURL(file)
  // }

  submitForm() {

    console.log(this.form.value)
    
    var formData: any = new FormData();
  formData.append("email", this.email.email);
  formData.append("Image", this.form.get('Image').value);
    
    this.profile_service.userProfileImage(formData).subscribe((res:any)=>{
          if(res.success==true){
            alert(res.message)
          }
        },(e)=>{
          console.log(e);
          
        })

  //   if(this.myForm.value.img.type== 'image/jpeg'){
  //     this.formdata = new FormGroup({
  //       email: new FormControl(this.email.email),
  //       Image: new FormControl(this.myForm.value.img.name)
  //    });
  //   
  // }
  //   console.log("Image",this.myForm.value.img)
  }
  ngOnInit() {
    this.profile_service.userProfile(this.email).subscribe((res:any)=>{
      if(res.success==true){
        this.profileData =  res.data
      }
    },(e)=>{
      console.log(e);
      
    })
  }
  
}
