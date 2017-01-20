import { Component, OnDestroy} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'item-info',
    template: `<h2>Товар {{id}}</h2>
               <router-outlet></router-outlet>`
})
export class ItemComponent implements OnDestroy {

    private id: number;
    private routeSubscription: Subscription;

    constructor(private route: ActivatedRoute){

        this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
    }
    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }
}