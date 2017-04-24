import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';

import { FarmManagementService } from '../../services/farm.management.service';

@Component({
  selector: 'app-farm-setup',
  templateUrl: './farm-setup.component.html',
  styleUrls: ['./farm-setup.component.scss']
})

export class FarmSetupComponent implements OnInit {

  private isNew = true;
  form: FormGroup;
  private subscription: Subscription;


  setup = 'container';
  setup_options = [ 
                       {label: "container", value:"container"},
                       {label: "customized", value: "customized"}
                  ];

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private farmManagementService: FarmManagementService
              ) {

              
    this.form = fb.group({

        'name': [,Validators.compose([
          Validators.required,
          Validators.maxLength(30),
          Validators.minLength(5)
        ])],

        'description': [, Validators.compose([
          Validators.required,
          Validators.maxLength(250)
        ])],

        'address': this.fb.group({
            city: ['', <any>Validators.required],
            street: ['', <any>Validators.required],
            postcode: ['']
        })

    });

  }

    items;
    
    msgs = [];
    
    activeIndex: number = 2;

  ngOnInit() {
        this.items = [{
                label: 'Personal',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'First Step', detail: event.item.label});
                }
            },
            {
                label: 'Seat',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Seat Selection', detail: event.item.label});
                }
            },
            {
                label: 'Payment',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Pay with CC', detail: event.item.label});
                }
            },
            {
                label: 'Confirmation',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.msgs.length = 0;
                    this.msgs.push({severity:'info', summary:'Last Step', detail: event.item.label});
                }
            }
        ];
  }


  changeSteps(index){
    console.log(index);
  }




  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

  changeSetupMode(event){
    console.log('changeSetupMode');
  }

/*
2. 用户创建农场的视图 

.（农场的名字，描述和城市）
.  农场的地理位置或者时区（可选）

*/
  onSubmit(form) {
    console.log('farm create  onSubmit',form);
    this.farmManagementService.createFarmzone(form).subscribe(
            (farm) =>{ 
              console.log(farm);
            }
       );
  }

  checkForNew() {
    if (!this.isNew){
    }
  }

/*

2. 用户创建种植区域的视图（区域的名字，描述，在农场中的位置）

. 选择标准的架子尺寸
. 根据种植的面积来确定架子的个数
. 通过农场内部的2D布局来标记架子的ID，发送带有架子ID的数组到服务器

*/

}


/*

对于集装箱或者模块化的农场，每个固定类型的模块中有固定数量的架子和布局，因此用户根据种植需求可能会同时创建多个农场（每一个集装箱即为一个分布式的农场）
1. 用户创建农场和种植区域的视图。
. 根据种植的面积来确定集装箱的数量

     this.router.navigate(['/user_invitation'],
         {queryParams: {email: loginEmail, code: userCode}});

*/