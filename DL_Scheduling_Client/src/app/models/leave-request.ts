import {Time} from '@angular/common';

export class LeaveRequest{
    LR_id: number;
    std_user_id: number;
    std_not_class: boolean;
    class_toCover: string;
    LR_start_time: Date;
    LR_end_time: Date;
    location: String;
    LR_isAccepted: boolean;
}