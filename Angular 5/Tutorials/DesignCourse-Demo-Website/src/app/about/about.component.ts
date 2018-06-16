import { Component, OnInit } from '@angular/core';
// Gives access to the route parameters like /:id
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // Dependency injection happens within constructor()
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }

  // Callback that navigates to the home page
  sendMeHome() {
    this.router.navigate(['']);
  }

}
