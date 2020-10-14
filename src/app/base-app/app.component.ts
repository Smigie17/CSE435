import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    ){}

  ngOnInit(): void {
  
  }
  Selected(button:string): void { 

    this.router.navigate(['/' + button ]);
    return;
  }
  RestrictedSelected(button:String): void {

    window.location.href = './'  +button

    return;
  }
}
