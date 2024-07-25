interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'john',
	lastName: 'maina',
	age: 14,
	location: 'Mombasa'
};

const student2: Student = {
	firstName: 'Mwangii',
	lastName: 'kamau',
	age: 20,
	location: 'Nairobi'
}

const studentsList: Student[] = [];
studentsList.push(student1, student2);

// function to create and render table
function renderTable(students: Student[]) {
	const table = document.createElement('table');
	table.border = '1';

	// create header row
	const header = table.createTHead();
	const headerRow = header.insertRow();
	const headers = ['FirstName', 'Location'];

	headers.forEach(text => {
		const th = document.createElement('th');
		th.appendChild(document.createTextNode(text));
		headerRow.appendChild(th);
	});

	// append student data rows
	students.forEach(student => {
		const row = table.insertRow();
		const cell1 = row.insertCell(0);
		const cell2 = row.insertCell(1);

		cell1.appendChild(document.createTextNode(student.firstName));
		cell2.appendChild(document.createTextNode(student.location));
	});
	document.body.appendChild(table);
}
