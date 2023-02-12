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
  addCourse(){
    this.courses.push(
      {
        id:4,
        name:'nodejs'
      }
    )
  }
  removeCourse(course: object) {
    let index = this.courses.findIndex(c => c === course);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }
  isShow:boolean=false
  showCourses(){
    this.isShow=!this.isShow
  }
  trackCourse(index:number,course:any){
    return course ? course.id : null
  }
}
