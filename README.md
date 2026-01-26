# JobTrackr — Job Application Tracker API

A Laravel REST API for tracking job applications, interview progress, and follow-ups.
Built to help users manage job hunting efficiently, with secure authentication, filtering, and analytics-ready architecture.
---

## Tech Stack

| Layer           | Technology      |
| --------------- | --------------- |
| Backend         | Laravel 10+     |
| Auth            | Laravel Sanctum |
| Database        | MariaDB         |
| API             | REST            |
| Version Control | Git + GitHub    |

---

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- PHP 8.2 or above
- Composer
- MariaDB
- Git

---

### Installation Steps

```bash
git clone https://github.com/your-username/laravel-task-manager-api.git
cd laravel-task-manager-api

composer install

cp .env.example .env
php artisan key:generate
