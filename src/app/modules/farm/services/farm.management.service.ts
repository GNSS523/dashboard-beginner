import { Injectable } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
// import {  AuthHttp } from 'angular2-jwt';
import {  Headers,Response }  from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';


@Injectable()
export class FarmManagementService {


  constructor(private authHttp: AuthService) { }

  createFarmzone(data) {

  
    return this.authHttp.post(environment.baseUrl + '/v1/farm', data);
  }

  getFarmzones(query) {


    return this.authHttp.get(environment.baseUrl + '/v1/farm?'+query);
  } 

  getFarmzone(farm_id) {
    return this.authHttp.get(environment.baseUrl + '/v1/farm/'+farm_id);
  }   

  deleteFarmzone(farm_id) {
    return this.authHttp.delete(environment.baseUrl + '/v1/farm/'+farm_id);
  }

  updateFarmzone(farm_id, type, update) {

    var payload = {type: type, data: update};
    console.log('updateFarmzone  ',payload);
 
    return this.authHttp.put(environment.baseUrl + '/v1/farm/'+farm_id, {payload:payload});
  }


}