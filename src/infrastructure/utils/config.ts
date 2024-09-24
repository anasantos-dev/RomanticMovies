import { Repository } from '../../infrastructure/database/repository';
import { IdentifierGenerator } from './id-generator';
import { MovieController } from '../../interface/movie-controller';

import { CreateMovieUseCase} from '../../application/use-cases/create-movies-use-case';
import { ListAllMoviesUseCase } from '../../application/use-cases/list-all-movies-use-case';
import { ListMovieByIdUseCase } from '../../application/use-cases/list-movie-by-id-use-case';
import { DeleteMovieUseCase } from '../../application/use-cases/delete-movie-use-case';
import { UpdateMovieUseCase } from '../../application/use-cases/update-movie-use-case';

export function configureDependencies() {
 const movieRepository = new Repository();
 const idGenerator = new IdentifierGenerator();

 const createMovieUseCase = new CreateMovieUseCase(movieRepository, idGenerator);
 const listMoviesUseCase = new ListAllMoviesUseCase(movieRepository);
 const listMovieByIdUseCase = new ListMovieByIdUseCase(movieRepository);
 const deleteMovieUseCase = new DeleteMovieUseCase(movieRepository);
 const updateMovieUseCase = new UpdateMovieUseCase(movieRepository);
 const movieController = new MovieController(createMovieUseCase, listMoviesUseCase, listMovieByIdUseCase, deleteMovieUseCase, updateMovieUseCase );
 
 


 return {
    movieController
 };
} 