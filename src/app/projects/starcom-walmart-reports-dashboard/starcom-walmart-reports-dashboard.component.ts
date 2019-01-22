import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starcom-walmart-reports-dashboard',
  templateUrl: './starcom-walmart-reports-dashboard.component.html',
  styleUrls: ['./starcom-walmart-reports-dashboard.component.scss']
})
export class StarcomWalmartReportsDashboardComponent implements OnInit {

  project = {
    name: 'Starcom Guatemala'
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.querySelector(`#${fragment}`).scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

}
