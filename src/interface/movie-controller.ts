import { Request, Response } from 'express';
import { CreateMovieUseCase } from '../application/use-cases/create-movies-use-case';
import { ListAllMoviesUseCase } from '../application/use-cases/list-all-movies-use-case';
import { ListMovieByIdUseCase } from '../application/use-cases/list-movie-by-id-use-case';
import { DeleteMovieUseCase } from '../application/use-cases/delete-movie-use-case';
import { UpdateMovieUseCase } from '../application/use-cases/update-movie-use-case';


export interface CreateMovieDTO {
    title: string;
    summary: string;
    origin: string;
    image: string;
    status: 'read' | 'unread' | 'donated';
  }

  interface MovieDTO {
    id: string;
    title: string;
    summary: string;
    origin: string;
    image: string;

    creatdAt: string
    status: 'read' | 'unread' | 'donated';
  }

  export class MovieController {
    constructor(
      private createMovieUseCase: CreateMovieUseCase,
      private listAllMoviesUseCase: ListAllMoviesUseCase,
      private listMovieByIdUseCase: ListMovieByIdUseCase,
      private deleteMovieUseCase: DeleteMovieUseCase,
      private updateMovieUseCase: UpdateMovieUseCase
    ) {}
  
async create(req: Request, res:Response):Promise<void> {
    try {
    const movieData: CreateMovieDTO = req.body;
    const movie = this.createMovieUseCase.execute(movieData);
    res.status(201).json(movie);
  }catch (error){
    res.status(500).json({error:'Internal Server Error'});
    }    
  }

  listAll(req: Request, res: Response) {
    const movies = this.listAllMoviesUseCase.execute();
    res.json(movies)
    }

    async getMovieById(req: Request, res: Response): Promise<void> {
      try {
        const id = req.params.id;
        const movie = await this.listMovieByIdUseCase.execute(id);
  
        if (!movie) {
          res.status(404).json({ message: 'Movie not found' });
        } else {
          res.status(200).json(movie);
        }
      } catch (error) {
        res.status(500).json({ message: 'Error fetching movie', error });
      }
    }

    async deleteMovieById(req: Request, res: Response): Promise<void> {
     
        const id = req.params.id;
        await this.deleteMovieUseCase.execute(id);
        res.status(200).json({ message: 'Movie deleted successfully' });
      
    }

    async updateMovie(req: Request, res: Response): Promise<void> {
      try {
        const id = req.params.id;
        const updatedData = req.body;
  
        const updatedMovie = await this.updateMovieUseCase.execute(id, updatedData);
  
        if (!updatedMovie) {
          res.status(404).json({ message: 'Movie not found' });
        } else {
          res.status(200).json(updatedMovie);
        }
      } catch (error) {
        res.status(500).json({ message: 'Error updating movie', error });
      }
    }

  }