import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stats = {
    total: 42,
    applied: 18,
    interviewing: 9,
    offers: 2,
    rejected: 13,
    followupsDue: 4,
  };

  followups = [
    { company: 'Acme Inc', role: 'Senior PHP Dev', due: 'Today', stage: 'Applied' },
    { company: 'Globex', role: 'Tech Lead', due: 'Tomorrow', stage: 'Screening' },
  ];

  recent = [
    { text: 'Moved “Globex” to Interviewing', time: '2h ago' },
    { text: 'Added note to “Acme Inc”', time: 'Yesterday' },
  ];
}
