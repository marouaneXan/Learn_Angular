import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses=[
    {
      id:1,
      name:'react',
    },
    {
      id:2,
      name:'vue',
    },
    {
      id:3,
      name:'angular',
    }
  ]
}
