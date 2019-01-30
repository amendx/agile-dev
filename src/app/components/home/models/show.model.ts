export interface tvShow {
    Title: string,
    Year: number,
    Synopsis: string,
    Id: number,
    Cast: cast[],
    Genres: genres[]
}

export interface cast {
    ID: number,
    Name: string
}
export interface genres {
    Id: number,
    Title: string
}