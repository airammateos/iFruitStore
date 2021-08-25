# iFruit Store

iFruit Store CRUD app with tests.

## Frontend
Frontend is build with Angular 12.2.2 

## Backend
Backend is build with Laravel 8.

## Run application
Since Laravel is built with Docker we only have to start the container to run the backend system.
To run the frontend we have to open a terminal, go to the frontend folder and run `ng serve -o` command.

### Migrations and seeders
To build the database and seed its tables open the terminal from the application image and run these commands:

`php artisan migrate`

`php artisan db:seed`

## Tests
Backend has tests. Laravel provides a command to run them:

`php artisan test`

This tests handle fruits updating method checking the failure and success response codes.

## License
[MIT](https://choosealicense.com/licenses/mit/)