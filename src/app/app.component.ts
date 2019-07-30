import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CountLetter';

 letter:string="";
 Acount = 0;
 num1:number =0;
 num2:number =0;
 num3:number =0;
 num4:number =0;
 num5:number =0;
 avarage:number=0;
 sum :number =0;
 Maxi:number=0;
 Mini:number=0;
revName :string ="";
name :string ="";
 Count(){
  for (var i = 0; i <= this.letter.length;i++){
    if(this.letter.charAt(i)=="a"){
      this.Acount +=1
    }
  }
}

Calculate(){
this.sum =(+ this.num1 + +this.num2 + +this.num3 + +this.num4 + +this.num5)
this.avarage = this.sum/5


}

CalcMax(){

  this.Maxi =Math.max(this.num1,this.num2,this.num3,this.num4,this.num5)
  this.Mini =Math.min(this.num1,this.num2,this.num3,this.num4,this.num5)

}

disName(){
 
 this.revName = this.revName.split('').reverse().join('');

}







}

