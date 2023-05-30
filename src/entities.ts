// An entity is a class that stores information that will be persisted somewhere
// Usually have very minimal logic
// They should always have one field in them that is a unique identifier

class Movie{
    constructor(
        public movieId:number,
        public title:string,
        public director:string,
        public inStock:boolean,
        public returnDate:number
    ){}
}