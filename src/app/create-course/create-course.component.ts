import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent  {
  @Output() newCourse = new EventEmitter();
  name: string;
  hours: number;

  addCourse() {
    const course = { name: this.name, hours: this.hours }
    this.newCourse.emit(course);

    this.name = '';
    this.hours = undefined;
  }
}
