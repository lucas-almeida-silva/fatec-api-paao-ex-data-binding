import { Component, Input, OnInit } from '@angular/core';
import Course from 'src/models/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() course: Course;
}
