import { Component, OnInit } from '@angular/core';
import Course from 'src/models/Course';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent {
  courses: Array<Course> = [];

  addCourse(course: Course) {
    this.courses.push(course);
  }
}
