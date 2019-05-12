import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';  
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
import { NotesService } from './../services/notes.service';

import { FOODITEMS } from '../fooditems';
import { Items } from '../items';
import { BEVERAGEITEMS } from '../beverageitems';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit {
  fItems = FOODITEMS;
  bItems = BEVERAGEITEMS;
  selectedItems: Items;
  selectedBItems: Items;
  errMessage: String;
 
  userDisplayName = ' ';
  constructor(private noteService: NotesService) { }
  ngOnInit() {
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    console.log('user',this.userDisplayName);
    console.log('Food',this.fItems);
    console.log('Beverages',this.bItems);
   
  }
  onSelectFood(ffitem: Items): void {
    this.selectedItems = ffitem;
    
  }
  onSelectBeverage(bbitem: Items): void {
    this.selectedBItems = bbitem;
  }
  
  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save(this.userDisplayName + '.pdf'); // Generated PDF   
    });  
  }
}
