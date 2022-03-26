function selectElem(selectedElement) {
    const elementSelected = document.querySelector(selectedElement);
    console.log(elementSelected);
}
const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
]
const studentsScholarship = []

function findGradeTotal(student) {
    let gradeTotal = 0
    for (let indvGrade of student.grades){
        gradeTotal += indvGrade
    }
    return gradeTotal
}

function calculateGradeAvg(gradeTotal, student) {
    return gradeTotal/student.grades.length
}

function parseAndAdd(avgGrade, arrayBeingAddedTo, student) {
    if (avgGrade >= 80) {
        arrayBeingAddedTo.push({
            name: student.name, gradeAvg: avgGrade
        })
    }
    return arrayBeingAddedTo
}

function main() {
    for (let student of students) {
        parseAndAdd(calculateGradeAvg(findGradeTotal(student), student), studentsScholarship, student)
    }
}
main()
console.log(studentsScholarship)