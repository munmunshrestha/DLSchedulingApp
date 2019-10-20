import {Time} from '@angular/common';

export class stdUnavailability{
    // std_unavailability_id: number;
    // std_user_id: number;
    // std_is_class: boolean;
    // std_course_id: string;
    // std_start_time: Time;
    // std_end_time: Time;
    // std_class_location:string

    id: number;
    std_user_id: number;
    std_not_class: boolean;
    course_id: string;
    start: Time;
    end: Time;
    day: Array<String>=[];
    location: String;
}
