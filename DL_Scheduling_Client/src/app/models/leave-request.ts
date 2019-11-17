import {Time} from '@angular/common';
import { dlClassInfo } from './dl-class-info';

export class LeaveRequest{
    id:number;
    std_name: string;
    class_toCover: dlClassInfo;
    date: string;
}