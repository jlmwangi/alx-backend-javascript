namespace Subjects {
	export interface Teacher {
		experienceTeachingJava?: number;
	}

	export class JavaClass extends Subject {
		getRequirements(): string {
			return "Here is the list of requirements for Java";
		}

		getAvailableTeacher(): string {
			if (!this.teacher.experienceTeachingJava || this.teacher.experienceTeachingJava === 0) {
				return "No available teacher";
			} else {
				return `Available Teacher: ${this.teacher.firstName}`;
			}
		}
	}
}