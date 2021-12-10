import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://coderhouse:coderhouse@cluster0.o0eqf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

await client.connect()

const dbEstudiantes = client.db("colegio").collection("estudiantes");

const estudiantes = await dbEstudiantes.find().toArray()

console.log(estudiantes)

await client.close();
