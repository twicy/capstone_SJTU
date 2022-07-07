import { Component, OnInit, Input } from '@angular/core';
import { ElectronService } from 'src/app/core/services/electron/electron.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
    selector: 'app-warning-detail',
    templateUrl: './warning-detail.component.html',
    styleUrls: ['./warning-detail.component.css']
})
export class WarningDetailComponent implements OnInit {
    constructor(
        private router: Router,
        private http: HttpClient,
    ) {
    }

    getWarningDetailData() {
        this.http.get('http://localhost:3000/api/warning_detail')
        .subscribe((res) => {
            console.log(res);
        })

    }
    ngOnInit(): void {
        this.getWarningDetailData();
    }

    mock = {
        data: { 
            status_code: 0,
            lable_CHinese: '',
            funCTion_label_p: '',
            group_label_p: '',
            maCHine_label_p: '',
            // status_code: 1,
            // lable_CHinese: '警告：储存器内的数据被删除',
            // funCTion_label_p: '功能: 控制柜启动',
            // group_label_p: '电控柜公共组件',
            // maCHine_label_p: '主机电柜',
            },
    };
    BtOne_Click() {
    }
}
