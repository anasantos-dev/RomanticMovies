import { Movie } from '../../domain/movie';
import { MovieRepository } from '../repositories/movie-repository';
import { IdGenerator } from '../repositories/id-generator-interface';

export interface Params {
    title: string;
    summary: string;
    origin: string;
    image: string;
    
}
export class CreateMovieUseCase {
    constructor (
     private movieRepository: MovieRepository,
     private idGenerator: IdGenerator
    ) {}
   
   execute(movieParams: Params): Movie {
     const movie: Movie = {
       id: this.getId(),
       creatdAt:this.getDate(),
       ...movieParams
       }
       this.movieRepository.save(movie);
       return movie;    
   }
     private getDate() {
       return new Date().toLocaleDateString('PT-br');
     }
   
     private getId() {
       return this.idGenerator.generate();
     }
   }