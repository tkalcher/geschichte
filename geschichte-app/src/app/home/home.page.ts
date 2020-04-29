import { Component } from '@angular/core';
import {v4 as uuidv4} from 'uuid';
import { Router, NavigationExtras } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ModalController } from '@ionic/angular';
import { EditPage } from '../edit/edit.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


topics= [
  {id: uuidv4(), title:'Augsburger Reichs- und Religionsfriede', content: 'Dieser Friede wurde 1555...'},
  {id: uuidv4(), title:'Kalter Krieg', content:'Auseinandersetzung zwischen USA und UdSSR'},
  {id: uuidv4(), title:'Kalter Krieg', content:'Auseinandersetzung nach 2. Weltkrieg'}
];
title="";



  constructor(private router: Router, private modalCrtl: ModalController) {}

  ionViewWillEnter(){
    let id= uuidv4();
    console.log(this.topics);
  }

 async editTopic(id, item){
    console.log(id);
    const pos=this.topics.findIndex((t)=>{
      return t.id==id;
    });

    if (pos > -1){
      const modal=await this.modalCrtl.create({
        component: EditPage,
        componentProps:{
          title: this.topics[pos].title
        }
      });
      await modal.present();
    }
    // colese sliding item
    item.close();
 }


   
    
    
  



  showTopic(id){
    const pos = this.topics.findIndex((t)=>{
    return t.id==id;});

    if (pos > -1) {
      const title= this.topics[pos].title;
      console.log ('Titel: ' + title);

      let extras: NavigationExtras={
        state:{
          id: id,
          title: title,
          content: this.topics[pos].content
        }
      };

      this.router.navigate(['/details'], extras);

    }

  }
}
