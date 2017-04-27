import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-redirect',
  templateUrl: './redirect.component.html'
})
export class RedirectComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.navigate(['/home'], { relativeTo: this.route, preserveQueryParams: true });
  }
}
