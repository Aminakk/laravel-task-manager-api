import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {JobsService} from '../services/jobs.service';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';


@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.css'
})
export class JobFormComponent implements OnInit{
  constructor(
    private fb: FormBuilder,
    private jobsService: JobsService,
    private router: Router
  ) {}
  loading = false;
  errorMessage = '';
  jobForm!: FormGroup;

  statuses = [
    { value: 'applied', label: 'Applied' },
    { value: 'screening', label: 'Screening' },
    { value: 'interview', label: 'Interview' },
    { value: 'offer', label: 'Offer' },
    { value: 'rejected', label: 'Rejected' },
    { value: 'joined', label: 'Joined' },
  ];

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      company: ['', Validators.required],
      role: ['', Validators.required],
      status: ['applied', Validators.required],
      jobUrl: ['', Validators.required],
      location: ['', Validators.required],
      source: ['', Validators.required],
      salaryRange: ['', Validators.required],
      nextFollowUpDate: ['', Validators.required],
      notes: ['', Validators.required],
      appliedDate: ['', Validators.required],
    });
  }

  submit() {
    if (this.jobForm.invalid) {
      this.jobForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.jobsService.createJob(this.jobForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err?.error?.message ?? 'Failed to create job';
      },
    });
  }
}
