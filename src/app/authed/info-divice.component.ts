import { Component, OnInit, Input } from '@angular/core';
import { Divice } from './divice';
import { DivicesService } from './divice.service';

@Component({
    selector: 'tp-info-divice',
    styleUrls: ['./info-divice.component.scss'],
    templateUrl: './info-divice.component.html'
})
export class InfoDiviceComponent implements OnInit {
    @Input() public divice: any;
    public new_divice: Divice;

    public constructor(protected diviceService: DivicesService) {
        this.divice = new Divice('1').setAttributes({
            name: 'Uber1',
            battery: 50,
            status: 'charged',
            description: 'Velocidad aproximada',
            velocity: 45
        });
        console.log('Divice?', this.divice);

        this.new_divice = diviceService.new('1').setAttributes({
            name: 'Uber1',
            battery: 100,
            status: 'charged',
            description: 'Velocidad aproximada',
            velocity: 45
        });
    }

    public ngOnInit(): void {
        console.log('Divice?', this.divice);
    }
}
