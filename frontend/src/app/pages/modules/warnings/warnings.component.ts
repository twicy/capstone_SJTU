import { Component, OnInit } from '@angular/core';
import { WarninglistService } from 'src/app/services/warnings/warninglist.service';
import { Warning } from 'src/app/classes/warning';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-warnings',
  templateUrl: './warnings.component.html',
  styleUrls: ['./warnings.component.css']
})
export class WarningsComponent implements OnInit {


  constructor(private _warningListService:WarninglistService,private activeroute:ActivatedRoute ) { }
  
  reverseStatus:Boolean=false;
  
  
  lstAllWarnings:Warning[]=[];
  lstHiddenWarnings:Warning[]=[];
  objPatch!:Warning;
  displayHidden:boolean=false;
  
  
  //for pagenation
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  id: any=null;
  

  ngOnInit() {

    this.activeroute.params.subscribe(params => {
      console.log('The id of this route is: ', params['id']);
      this.id=params['id'];
      this.fetchWarnings();
    });

    this._warningListService.getWarnings()
    .subscribe(
      data=>{
        console.log("refetch component")
        this.lstAllWarnings=data;
        this.lstHiddenWarnings=this.lstAllWarnings.filter((warn_item)=>(warn_item.value===0));
        console.log(typeof(this.id))
        if(this.id=="1"){
          this.lstAllWarnings=this.lstAllWarnings.filter((warn_item)=>(warn_item.machine_obj_English==='xx_main_machine'))
          this.lstHiddenWarnings=this.lstHiddenWarnings.filter((warn_item)=>(warn_item.machine_obj_English==='xx_main_machine'))
        }else if(this.id=="2"){
          this.lstAllWarnings=this.lstAllWarnings.filter((warn_item)=>(warn_item.machine_obj_English==='cb_main_maCHine'))
          this.lstHiddenWarnings=this.lstHiddenWarnings.filter((warn_item)=>(warn_item.machine_obj_English==='cb_main_maCHine'))
        }else if(this.id=="3"){
          this.lstAllWarnings=this.lstAllWarnings.filter((warn_item)=>(warn_item.machine_obj_English==='cs_main_machine'))
          this.lstHiddenWarnings=this.lstHiddenWarnings.filter((warn_item)=>(warn_item.machine_obj_English==='cs_main_machine'))
        }
      }
    )
    
  }
  onClickItem(event:any,item:Warning){
    this.objPatch=item;
    this.reverseStatus=true;
    console.log(this.reverseStatus)
    console.log(item);
  }

  onClickAll(){
    this.displayHidden=false;
    // this.lstWarnings=this.lstAllWarnings;
  }
  onClickHidden(){
    this.displayHidden=true;
    // this.lstWarnings=this.lstAllWarnings.filter((warn_item)=>(warn_item.value===0));
  }

  onReverse(){
    console.log(this.objPatch)
    if(this.objPatch){
      this._warningListService.putWarnings(this.objPatch,this.objPatch.id.toString())
      .subscribe(
        data=>{
          // console.log("going to change value",this.objPatch.value)
          // console.log(data)
          this.objPatch.value=(this.objPatch.value+1)%2;
          this.fetchWarnings();
        }
      )
      this.objPatch=new Warning;
    } 
  }

  

  //pagnation
  fetchWarnings(): void {
    this._warningListService.getWarnings().subscribe(
      (response) => {
        console.log("refetch component")
        this.lstAllWarnings=response;
        this.lstHiddenWarnings=this.lstAllWarnings.filter((warn_item)=>(warn_item.value===0));
        if(this.id=="1"){
          this.lstAllWarnings=this.lstAllWarnings.filter((warn_item)=>(warn_item.machine_obj_English==='xx_main_machine'))
          this.lstHiddenWarnings=this.lstHiddenWarnings.filter((warn_item)=>(warn_item.machine_obj_English==='xx_main_machine'))
        }else if(this.id=="2"){
          this.lstAllWarnings=this.lstAllWarnings.filter((warn_item)=>(warn_item.machine_obj_English==='cb_main_maCHine'))
          this.lstHiddenWarnings=this.lstHiddenWarnings.filter((warn_item)=>(warn_item.machine_obj_English==='cb_main_maCHine'))
        }else if(this.id=="3"){
          this.lstAllWarnings=this.lstAllWarnings.filter((warn_item)=>(warn_item.machine_obj_English==='cs_main_machine'))
          this.lstHiddenWarnings=this.lstHiddenWarnings.filter((warn_item)=>(warn_item.machine_obj_English==='cs_main_machine'))
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchWarnings();
    console.log("table data change")
    console.log(this.displayHidden);
    
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchWarnings();
    
  }

  
}
