import { BlogPost } from "./blog-post";

class Blog {
  blogPostList: BlogPost[];

  constructor() {
    this.blogPostList = [];
  }
  add(postToAdd: BlogPost): void {
    this.blogPostList.push(postToAdd);

  }
  delete(int: number): void {
    this.blogPostList.splice(int - 1, 1);

  }
  update(int: number, blogpostid: string): void {
    this.blogPostList[int].text = blogpostid;
  }
}

let myPostList: Blog = new Blog()
myPostList.add(new BlogPost("Lorem Ipsum", 'John Doe', 'Lorem ipsum dolor sit amet.', '2000.05.04.'));
myPostList.add(new BlogPost("Wait but why", 'Tim Urban', 'A popular long - form, stick - figure - illustrated blog about almost everything.', '2010.10.10.'));
myPostList.add(new BlogPost("One Engineer Is Trying to Get IBM to Reckon With Trump", 'William Turton', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention.\n When I asked to take his picture outside one of IBM’s New York City offices,he told me that he wasn’t really into the whole organizer profile thing.', "2017.03.28."));
myPostList.delete(1);
myPostList.update(1, 'ez miiiiiii');
console.log(myPostList);
// Reuse your BlogPost class
//   Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete (int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost