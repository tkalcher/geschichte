import {v4 as uuidv4} from 'uuid';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';


export class Topic{
    


    constructor(title: string, content: string, id?: string){
        this.title=title;
        this.content=content;
        if (id){
            this.id=id;
        }
        else{
            this.id=uuidv4();
        }
    }


    private _id : string;
    public get id() : string {
        return this._id;
    }
    public set id(v : string) {
        this._id = v;
    }
    
    
    private _title : string;
    public get title() : string {
        return this._title;
    }
    public set title(v : string) {

        let blacklist = ['Augsburger Reichs- und Religionsfriede', 'Hallo'];
        const pos = blacklist.findIndex((w)=>{
            return w == v;
        });

        if (pos > -1){
            this._title='***';
        }

        else{
            this._title=v;
        }


        if(v=='Augsburger Reichs- und Religionsfriede'){
            this._title='Friede';
        }
        else{
        this._title = v;
        }
    }
    

    
    private _content : string;
    public get content() : string {
        return this._content;
    }
    public set content(v : string) {



        this._content = v;
    }
    

}