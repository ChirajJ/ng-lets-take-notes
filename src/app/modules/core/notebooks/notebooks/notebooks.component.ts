import { Component, OnInit } from '@angular/core';
import { INotebookCard } from 'src/app/models/core';
import { ApiService } from '../../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.css']
})
export class NotebooksComponent implements OnInit {

  cards: Array<INotebookCard>;
  mouseOvered: Array<boolean>;

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {
    this.cards = [];
    this.apiService.getAllNotebooks()
    .subscribe({
      next: (res) => {
        console.log('Next data', res);
        this.mouseOvered = new Array(res.length);
        this.cards = res;
      },
      error: (err) => {
        console.log('Errorrrr', err);
      },
      complete: () => {
        console.log('Completed----');
      }
    });
  }

  viewNotebook(card: INotebookCard) {
    console.log('View Notebook');
    this.router.navigate(['../../notebook'], {
      relativeTo: this.route
    });
  }

  ngOnInit() {
  }

}
