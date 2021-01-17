import { createConnection } from 'typeorm';

// export const connection = async () => await createConnection({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "docker",
//   database: "gofinances",
//   entities: ['./src/models/*.ts']
// });

createConnection()
