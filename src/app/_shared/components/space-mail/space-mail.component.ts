import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/_services/people.service';
import { People, Result } from '../../models/people.model';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-space-mail',
	templateUrl: './space-mail.component.html',
	styleUrls: ['./space-mail.component.scss']
})
export class SpaceMailComponent implements OnInit {

	people: Result[];
	person: Result;
	id: number = 0;

	constructor(private peopleService: PeopleService, private route: ActivatedRoute) {

	}

	ngOnInit(): void {

		this.route.params.subscribe(params => {
			if (params.id) {
				this.id = params.id;
			}
			this.loadCard(this.id);
		});

		this.peopleService.getPeople().subscribe(x => {
			this.people = x.results;
		});

	}

	loadCard(id: number): void {
		this.peopleService.getPeople().subscribe(x => {
			this.person = x.results[id];
		});
	}

	addCardToBasket(): void {
		// todo
	}

}
