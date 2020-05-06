import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ModalController } from '@ionic/angular';
import { EditPage } from '../edit/edit.page';
import { Topic } from 'src/models/Topic';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


topics= [
  new Topic('Augsburger Reichs- und Religionsfriede', 'dieser Friede...'),
  new Topic('Kalter Krieg','Auseinandersetzung zwischen USA und UdSSR'),
  new Topic('Hallo', 'Das ist mein Mustersatz'),
  new Topic('Kalter Krieg', 'Auseinandersetzung nach 2. Weltkrieg'),
  new Topic('Zweiter Weltkrieg','Es kämpften ...')
 
];



  constructor(private router: Router, private modalCrtl: ModalController) {}

  ionViewWillEnter(){
    console.log(this.topics);

    let to = new Topic('Augsburger Reichs- und Religionsfriede', 'Friede');
    console.log(to.title);

  
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

      const {data}=await modal.onWillDismiss();

      if(data){
        //console.log(data.title);
        this.topics[pos].title=data.title;
      }
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
