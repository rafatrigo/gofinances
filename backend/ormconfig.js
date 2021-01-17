module.exports = {
	"type": process.env.DB_TYPE,
	"host": process.env.DB_HOST,
	"port": 5432,
	"username": process.env.DB_USERNAME,
	"password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "entities": ["./src/models/*.ts"],
  "migrations": [
		"./src/database/migrations/*.ts"
	],
	"cli": {
		"migrationsDir": "./src/database/migrations"
	}
}
