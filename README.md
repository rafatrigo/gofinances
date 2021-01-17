# <h1 align="center">![Go Finances](./web/src/assets/logo.svg)</h1>

Gofinances is a finance control application, with which you can add transactions manually or import a .csv file containing a list of transactions to be added.

![gif](.github/gofinances.gif)

## 🚀 Technologies used

#### Frontend
- React
- Unform
- Styled Components
- Typescript
- Axios


#### Backend
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
### Frontend
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

With the docker properly installed, make sure to create the database container.
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
### Backend

```sh
#go to the backend folder
cd backend
#install the dependencies
yarn
```

Duplicate the `.env.example` file, removing the` .example` part of the name (leaving only `.env`). After that, change the values to match what you put in when you created the docker container.

After that run the migrations and start the backend.
```sh
#run the migrations
yarn typeorm migration:run

#start the backend
yarn dev:server
```