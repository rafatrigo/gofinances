# <h1 align="center">![gofinances](./web/src/assets/logo.svg)</h1>

Gofinances is a finance control application, with which you can add transactions manually or import a .csv file containing a list of transactions to be added.

![gif](.github/gofinances.gif)

## 🚀 Technologies used

#### Front-end
- React
- Unform
- Styled Components
- Typescript
- Axios


#### Back-end
- NodeJS
- Express
- Docker
- Postgres
- TypeORM
---

&nbsp;
## Getting started


&nbsp;
### Clone this repository
```sh
git clone https://github.com/rafatrigo/gofinances.git gofinances
```


&nbsp;
### Front-end
```sh
#go to the frontend folder
cd web
#install the dependencies
yarn
#start the frontend
yarn start
```
---

&nbsp;
### Docker

With the Docker properly installed, make sure to create the database container.
```sh
docker run --name CONTAINER_NAME -e POSTGRES_USER=USER_NAME -e POSTGRES_PASSWORD=USER_PASSWORD -e POSTGRES_DB=DATABASE_NAME -p 5432:5432 -d postgres
```
**Obs:**

Whenever you shut down or restart the computer the database container needs to be started.
```sh
#start the container
sudo docker start CONTAINER_NAME_OR_ID

#to confirm that the container has actually started
#list active containers
sudo docker ps
```

If for some reason you forget the name of your container, execute the command:
```sh
#lists all the containers on your computer
sudo docker ps -a
```
---

&nbsp;
### Back-end

```sh
#go to the backend folder
cd backend
#install the dependencies
yarn
```

Duplicate the `.env.example` file, removing the` .example` part of the name (leaving only `.env`). After that, open the `.env` file and add the correct values to the variables to match what you entered when creating the Docker container.

Example:
```
DB_TYPE='postgres'
DB_HOST='localhost'
DB_USERNAME=USER_NAME
DB_PASSWORD=USER_PASSWORD
DB_NAME=DATABASE_NAME

```


After that run the migrations and start the backend.
```sh
#run the migrations
yarn typeorm migration:run

#start the backend
yarn dev:server
```
---


&nbsp;

The gofinaces base was developed in Rocketseat's GoStack bootcamp, but in the beginning this project just listed transactions and created transactions from the import of a .csv file, so I added other features like a responsive layout, a button to create transactions, delete transactions and some transitions and animations.

But there are still many things to improve, so feel free to clone this repository and give your best 💪.


&nbsp;

Made with 💜 by Rafael Trigo
