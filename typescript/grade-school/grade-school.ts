export default class GradeSchool {
  private roster: Map<string, string[]>;

  constructor() {
    this.roster = new Map<string, string[]>();
  }

  studentRoster(): Map<string, string[]> {
    let clone: Map<string, string[]> = new Map<string, string[]>();
    this.roster.forEach((value, key) => {
      clone.set(key, value.slice());
    });
    return clone;
  }

  addStudent(name: string, grade: number): void {
    let names: string[] | undefined = this.roster.get(grade.toString());
    if (names) {
      names.push(name);
      names.sort();
    } else {
      this.roster.set(grade.toString(), [name]);
    }
  }

  studentsInGrade(grade: number): string[] {
    let names: string[] | undefined = this.roster.get(grade.toString());
    if (names) {
      return names.slice();
    } else {
      return [];
    }
  }
}
