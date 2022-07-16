import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'src/app/core/services';
// import { TranslateService } from '@ngx-translate/core';
// import { APP_CONFIG } from '../environments/environment';
import { Router} from '@angular/router';
import { NewWarningsService } from 'src/app/services/new-warnings/new-warnings.service';
import { Warning } from 'src/app/classes/warning';



@Component({
  selector: 'app-control-board',
  templateUrl: './control-board.component.html',
  styleUrls: ['./control-board.component.css'],
  providers:[NewWarningsService]
})
export class ControlBoardComponent implements OnInit {

  allWarnings:Warning[]=[];
  constructor(
    // private electronService: ElectronService,
    // private translate: TranslateService,
    private router:Router,
    private _newWarningService:NewWarningsService
  ) {
    // this.translate.setDefaultLang('en');
    // console.log('APP_CONFIG', APP_CONFIG);

    // if (electronService.isElectron) {
    //   console.log(process.env);
    //   console.log('Run in electron');
    //   console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
    //   console.log('NodeJS childProcess', this.electronService.childProcess);
    // } else {
    //   console.log('Run in browser');
    // }
  }

  ngOnInit(): void {

  }
  goToNext(id:number){
    this.router.navigate([`/Machine`,id]);

  }


  fetchWarnings(): void {
    this._newWarningService.getNewWarnings().subscribe(
      (response) => {
        console.log("refetch component")
        this.allWarnings=response;
        if (this.allWarnings==null){
          this.allWarnings=[]
        }
        console.log(this.allWarnings)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  reloadCurrentPage(){
    this.fetchWarnings();
  }
}
