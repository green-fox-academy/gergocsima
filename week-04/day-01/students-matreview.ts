import { PersonM } from "./person_matreview";

export class Students extends PersonM {
  private previousOrganization: string;
  private skippedDays: number;

  constructor(name: string, age: number, gender: string, previousOrganization: string, skippedDays: number) { /*ha itt adom meg akkor modosithato utolag*/
    super(name,age,gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0; //itt adom meg nem modosiztható
  }
  getGoal() {
    console.log('My goal is: modified here the same function and check the effect!');
  }
  introduce() {
    console.log(`Hi,I'${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays}days from the course already. `);
  }
} 
let student3: Students = new Students('markymark', 18, 'male', 'valamiOrg', 0);
student3.introduce();
student3.getGoal();