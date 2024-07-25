import { Cpp } from './subjects/Cpp';
import { ReactClass } from './subjects/React';
import { Subject } from './subjects/Subject.ts';
import { JavaClass } from './subjects/Java.ts';
import { Teacher } from './subjects/Teacher.ts';

export const cpp = new Cpp();
export const java = new JavaClass();
export const react = new ReactClass();

export const cTeacher = new Teacher();
cTeacher.experienceTeachingC = 10;

const print = (message: string) => console.log(message);


if (cpp) {
	console.log('C++');
        Subject.setTeacher(cTeacher);
        print(cpp.getRequirements());
        print(cpp.getAvailableTeacher());
}
else if (java) {
	console.log('Java');
        Subject.setTeacher(cTeacher);
        print(java.getRequirements());
        print(java.getAvailableTeacher());
}
else if (react) {
	console.log('React');
        Subject.setTeacher(cTeacher);
        print(react.getRequirements());
        print(react.getAvailableTeacher());
}


