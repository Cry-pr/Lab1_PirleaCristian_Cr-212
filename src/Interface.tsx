interface Person {
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: number;
    gender: string;
  }
  
  interface Student extends Person {
    yearOfStydy: number;
    faculty: string;
  }
  
  const student: Student = {
    firstName: 'Cristian',
    lastName: 'Pirlea',
    age: 20,
    phoneNumber: 79777777,
    gender: 'non-binar',
    yearOfStydy: 2,
    faculty: 'CIM'
  }