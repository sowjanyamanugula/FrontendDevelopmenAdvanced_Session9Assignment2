import {Injectable} from '@angular/core';

@Injectable()
export class HomeService{
    getObjs(){
        return[
            {"Id":1,"name":"sowjanya","role":"SSE"},
             {"Id":2,"name":"sneha","role":"SSE"},
              {"Id":3,"name":"saranya","role":"SSE"},
        ]
    }
}