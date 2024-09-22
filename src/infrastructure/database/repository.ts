import { MovieRepository } from '../../application/repositories/movie-repository';
import { Movie } from '../../domain/movie';

export class Repository implements MovieRepository {
  private movie: Movie[] = [];

  save(movie: Movie): void {
    this.movie.push(movie);
}

async findById(id: string): Promise<Movie | null> {
  const movie = this.movie.find(movie => movie.id === id);
  return movie || null;
}

async delete(id: string): Promise<void> {
  this.movie = this.movie.filter(movie => movie.id !== id);
}

findAll(): Movie[] {
return this.movie;

}
}

