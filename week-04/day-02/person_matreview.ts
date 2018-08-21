export class PersonM {
  protected name: string;
  protected age: number;
  protected gender: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') { //megadom az alap értékeket, ha nem irnak be semmit
    this.name = name;
    this.age = age;/* 
    if ( gender !=='male' || gender !== 'female') {
      throw new Error('')
    } */
    this.gender=gender;
  }

    introduce() {
      //console.log('Hi,I\'m '+this.name+', a '+this.age+' year old '+this.gender+'.');
      console.log(`Hi,I'${this.name}, a ${this.age} year old ${this.gender}.`);
    }
    getGoal(){
      console.log('My goal is: Live for the moment!');
    }
  }
  let Person1: PersonM = new PersonM('mark',20,'male'); 
  // Person1.introduce();
  // Person1.getGoal();
