# Laravel Task Manager API

A simple RESTful API built using **Laravel** and **MariaDB** for managing tasks.  
This project was created to practice Laravel API development, database migrations, and API integration.

---

## Tech Stack

- PHP 8.2
- Laravel 11
- MariaDB (local installation)
- Eloquent ORM
- REST API

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
