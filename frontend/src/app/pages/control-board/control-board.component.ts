import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'src/app/core/services';
// import { TranslateService } from '@ngx-translate/core';
// import { APP_CONFIG } from '../environments/environment';
import { Router} from '@angular/router';



@Component({
  selector: 'app-control-board',
  templateUrl: './control-board.component.html',
  styleUrls: ['./control-board.component.css']
})
export class ControlBoardComponent implements OnInit {

  constructor(
    // private electronService: ElectronService,
    // private translate: TranslateService,
    private router:Router
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
  mock = {
    data: {
      type: 'bar',
      lable_CHinese: '警告：储存器内的数据被删除',
      funCTion_label_p: '功能: 控制柜启动',
      group_label_p: '电控柜公共组件',
      maCHine_label_p: '主机电柜',
    },
  };
  ngOnInit(): void {
  }
  goToNext(id:number){
    this.router.navigate([`/Machine`,id]);
    //alert("按钮1事件");
    //this.router.navigate(['/news']);

  }
}
