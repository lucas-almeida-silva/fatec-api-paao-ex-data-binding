import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  course = [
    {
      title: 'Análise e Desenvolvimento de Sistemas',
      workload: 4000
    },
    {
      title: 'Gestão de Recursos Humanos',
      workload: 3500
    },
    {
      title: 'Gestão Comercial',
      workload: 3250
    },
    {
      title: 'Big Data',
      workload: 3900
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
