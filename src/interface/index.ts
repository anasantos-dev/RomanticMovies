import express from 'express';
import {configureDependencies} from '../infrastructure/utils/config';

export const app = express()
app.use(express.json())


const {movieController} = configureDependencies();
app.post ('/movies', (req, res) => movieController.create(req,res)); 

app.get('/movies', (req, res) => movieController.listAll(req, res));

app.get('/movies/:id', (req, res) => movieController.getMovieById(req, res));

app.delete('/movies/:id', (req, res) => movieController.deleteMovieById(req, res));

app.put('/movies/:id', (req, res) => movieController.updateMovie(req, res));


if (require.main === module) {
    const PORT = 3333;
    app.listen(PORT, ()=>{
        console.log(`Servidor rodando na porta ${PORT}`);
    })
}