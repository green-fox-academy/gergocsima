
class BlogPost {
  //field
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;

  //constructor
  constructor (authorName: string, title: string, text: string, publicationDate: string){
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.publicationDate = publicationDate;
  } 
  //function
  printIt () {
    console.log(this.title + ' titled by ' + this.authorName + ' posted at "'+this.publicationDate+'"');
  }

  }
  let BlogPost1: BlogPost= new BlogPost('John Doe','"Lorem Ipsum"','Lorem ipsum dolor sit amet.','2000.05.04.');
  let BlogPost2: BlogPost= new BlogPost('Tim Urban','"Wait but why"','A popular long-form, stick-figure-illustrated blog about almost everything.','2010.10.10.');
  let BlogPost3: BlogPost= new BlogPost('William Turton','One Engineer Is Trying to Get IBM to Reckon With Trump','Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. ','2017.03.28.');
  let BlogPost4: BlogPost= new BlogPost('John Doe','"Lorem Ipsum"','Lorem ipsum dolor sit amet.','2000.05.04.');

  BlogPost1.printIt();
  BlogPost2.printIt();
  BlogPost3.printIt();
  BlogPost4.printIt();
  
