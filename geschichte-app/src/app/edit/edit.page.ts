import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  titleForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private modalCtr: ModalController, private navParams: NavParams) {

    this.titleForm=this.formBuilder.group({
      title: ['', Validators.required]
    });

  }

  ngOnInit() {
    let title = this.navParams.get('title');
  this.titleForm.get('title').setValue(title);
  }
  

}


