import { Component, OnInit , OnDestroy, Input,EventEmitter,Output ,AfterViewInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { FarmManagementService } from '../../services/farm.management.service';

@Component({
  selector: 'app-farm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [DatePipe]

})
export class ListComponent implements OnInit,OnDestroy,AfterViewInit {

	isLoading:boolean = true;
	isEditing:boolean = false;

	farms:any = []; 
	farm:any = {};

	filterFarmKey;
	filterFarms;

	selectFilterFarms(event){


	}

	filterTypeOptions = [ 
	                      { label:'vegetable', value: 'vegetable' },
	                 	  { label:'size', value: 'size'}
	               		];
	filterType;

	selectFilterType(event){


	}




	@Output() onSelectFarm = new EventEmitter();


	constructor(
              private route: ActivatedRoute,
              private router: Router,
              private farmManagementService: FarmManagementService
	) { }

	ngOnInit() {

	    this.farms = [
	  		{
	  		    id: 'farm_123',
	  		    name: 'Totalberry strawberry testig farm',
	  		    description: 'Testing the strawberry in three LED recipes',	  		    
	  		    address: 'Kent,UK',
	  		    image: 'http://s10.postimg.org/3rjjbzcvd/profile_f.jpg',
	  		    devices: [ 
	  		               { 'device_id':'device_123', 'type':'led'},
	  		               { 'device_id':'device_124', 'type':'led'},
	  		               { 'device_id':'device_125', 'type':'led'},
	  		               { 'device_id':'device_126', 'type':'led'} 
	  		             ],
	  		    managers:[
	  		    			{ 'uid':'xsz', 'username':'xsz', 'image':'http://s10.postimg.org/3rjjbzcvd/profile_f.jpg' } ,
	  		    			{ 'uid':'abc', 'username':'abc', 'image':'http://s16.postimg.org/b0j0djh79/profile_0_f.jpg' } 	
	  		    		 ],
	  		    growings: [
	  		    				{'type':'lettuce', start_date: '', end_date: '', quantity: 80, remaining: 5},
	  		    				{'type':'lettuce', start_date: '', end_date: '', quantity: 180, remaining: 25},
	  		             ]
	  		},
	  		{
	  		    id: 'farm_124',
	  		    name: 'farm_124',
	  		    description: 'This Thing Called Life: A Celebration of Prince and His Legacy at MEZZANINE SF',
	  		    address: 'London,UK',
	  		    image: 'http://s10.postimg.org/3rjjbzcvd/profile_f.jpg',	  		    
	  		    time: 'Mon, APR 09, 7:00 PM',
	  		    devices: [ 
	  		               { 'device_id':'device_223', 'type':'led'},
	  		               { 'device_id':'device_224', 'type':'led'},
	  		               { 'device_id':'device_225', 'type':'led'},
	  		               { 'device_id':'device_226', 'type':'led'} 
	  		             ],
	  		    managers: [
	  		    			{ 'uid':'xsz', 'username':'xsz', 'image':'http://s10.postimg.org/3rjjbzcvd/profile_f.jpg' }
	  		    		  ],
	  		    growings: [
	  		    				{'type':'lettuce', start_date: '', end_date: '', quantity: 80, remaining: 5},
	  		    				{'type':'lettuce', start_date: '', end_date: '', quantity: 180, remaining: 25},
	  		             ]
	  		}
	  ]

	}

	ngOnDestroy() {

	
	}

/*
用户农场的列表视图 （显示用户可以管理的分布式农场）
1. 根据用户的ID服务器查询到用户所相关（拥有者或者管理者或者观察者）的农场列表，包含了

.  基本农场信息，位置，名字
.  设备状态是否良好（拥有者），
.  和你相关的任务，（下种，移苗，运输）（管理者，拥有者）
.  收获的信息（拥有者，管理者，观察者））
*/

    ngAfterViewInit() {
    /*
	    this.farmManagementService.getFarmzones("").subscribe(
	            (farms) =>{
	              this.isLoading = false;
	              console.log(farms);

	              this.farms = farms;
	              console.log(this.farms);

				    for( let i in this.farms){
				    	this.farms[i].time = "Mon, APR 09, 7:00 PM";
				    	this.farms[i].managers = [
				  		    			  { 'uid':'xsz', 'username':'xsz', 'image':'http://s10.postimg.org/3rjjbzcvd/profile_f.jpg' } ,
				  		    			  { 'uid':'abc', 'username':'abc', 'image':'http://s16.postimg.org/b0j0djh79/profile_0_f.jpg' } 
				  		    		    ];

					    this.farms[i].growing = [
				  		    				{'type':'lettuce', start_date: '', end_date: '', quantity: 80, remaining: 5},
				  		    				{'type':'lettuce', start_date: '', end_date: '', quantity: 180, remaining: 25},
				  		               ];

			            this.farms[i].devices = [ 
					  		               { 'device_id':'device_123', 'type':'led'},
					  		               { 'device_id':'device_124', 'type':'led'},
					  		               { 'device_id':'device_125', 'type':'led'},
					  		               { 'device_id':'device_126', 'type':'led'} 
				  		              ];

			            this.farms[i].description = 'This Thing Called Life: A Celebration of Prince and His Legacy at MEZZANINE SF';

				    }
	            }
	    );
	    */
    }


    delete(farm){

    	this.farmManagementService.deleteFarmzone(farm._id).subscribe(
	            (farms) =>{
	            	this.isLoading = false;
	                console.log(farms);

	            }
	    );

    }

	onSelectChange(farm){
	    console.log(farm);	
	    this.onSelectFarm.emit(farm);
	    var id = farm.id;

	    if(farm.id == 'farm_123') 
	    	this.router.navigate(['/page/device/dashboard']);
	    else
	    	this.router.navigate([farm.id, { id: farm.id}], { relativeTo: this.route });

	}

}
