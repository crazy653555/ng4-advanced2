import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-form2",
  templateUrl: "./form2.component.html",
  styleUrls: ["./form2.component.css"]
})
export class Form2Component implements OnInit {
  form: FormGroup;

  data = {
    title: "Hello 2",
    // subtitle: "World 2",
    people: [
      { name: "Will", tel: "0232423432", email: "will.huang@example.com" },
      { name: "John", tel: "0934834734", email: "doggy@gmail.com" }
    ]
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
<<<<<<< HEAD
      title: ["Hello", Validators.required],
      subtitle: [
        "Avon",
        [Validators.required, Validators.minLength(2), Validators.maxLength(20)]
      ],
      people: this.fb.array([
=======
      title:['Hello',Validators.required],
      subtitle:['Avon',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      people:this.fb.array([
>>>>>>> 62fcaa4a25d6ca61e27f346e0f0b611af2478b3e
        this.fb.group({
          name: "",
          tel: "",
          email: ""
        }),
        this.fb.group({
          name: this.fb.control(""),
          tel: "",
          email: ""
        })
      ])
    });

    this.form.patchValue(this.data);
  }

  addPerson() {
    console.log("addPerson()");
    let people = this.form.get("people") as FormArray;
    people.push(
      this.fb.group({
        name: "",
        tel: "",
        email: ""
      })
    );
  }
  resetValue(){
    this.form.reset(this.data);
  }
}
