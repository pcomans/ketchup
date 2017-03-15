// An MVC framework in TypeScript
namespace Ketchup {
    export class Model {
        public cid: number;
        protected attributes: object;

        private static cidGen: number = 0;
        static getCid(): number {
            return this.cidGen++;
        }

        constructor(attributes?: object, options?: object) {
            this.cid = Model.getCid();
            this.attributes = {};
        }

        public toJSON(): object {
            // TODO(pco) This is not going to cut it. Come up with something better.
            return JSON.parse(JSON.stringify(this.attributes));
        }

        public sync(): void {
            console.log("Should sync " + this.toJSON());
        }
    }
}

class Book extends Ketchup.Model {
    private internalThing: number;

    protected attributes: {
        title:string,
        author:string
    }
    set title(title: string) {
        this.internalThing = 123;
        this.attributes.title = title;
    }
    set author(author: string) {
        this.attributes.author = author;
    }
}

var b2 = new Book();
b2.title = "The Guest Cat";
b2.author = "Takashi Hiraide";


console.log(b2);
console.log(b2.title);

b2.sync();
console.log(b2.toJSON());

class Movie extends Ketchup.Model {
    private internalThing: number;

    protected attributes: {
        title:string,
        director: string,
        sequels: number
    }
    set title(title: string) {
        this.internalThing = 123;
        this.attributes.title = title;
    }
    set director(director: string) {
        this.attributes.director = director;
    }
    set sequels(sequels: number) {
        this.attributes.sequels = sequels;
    }
}

var m1 = new Movie();
m1.title = "Star Wars";
m1.director = "George Lucas";
m1.sequels = 2;

console.log(m1);
console.log(m1.title);

m1.sync();
console.log(m1.toJSON());

console.log(b2);
console.log(b2.title);

b2.sync();
console.log(b2.toJSON());