import { Injectable } from '@angular/core';
import { Divice } from './divice';

@Injectable()
export class DivicesService {

    public new(id: string): Divice {
        return new Divice(id);
    }
}
