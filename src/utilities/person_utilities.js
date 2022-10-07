function numberOfPersonsForCity(persons, city) {
    //return persons.reduce((counter, p) => counter + (p.city === city && 1), 0);
    //no need for reduce!!!!
    return persons.filter(p => p.city === city).length;
}

export function citiesFromPersonData(persons) {
    const uniqueCityNames = [...new Set(persons.map(p => p.city))];
    return uniqueCityNames.map(c => ({
        name: c,
        numberOfPersons: numberOfPersonsForCity(persons, c)
    }));
}

function numberOfPersonsForSchool(persons, school) {
    return persons.filter(p => p.school === school).length;
}

export function schoolsFromPersonData(persons) {
    const uniqueSchoolNames = [...new Set(persons.map(p => p.school))];
    return uniqueSchoolNames.map(c => ({
        name: c,
        subscribedStudents: numberOfPersonsForSchool(persons, c)
    }));
}