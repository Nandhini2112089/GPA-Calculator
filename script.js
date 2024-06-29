let courses = [];

function calculateGPA() {
    const creditInput = document.getElementById('credit');
    const gradeSelect = document.getElementById('grade');

    const credit = parseFloat(creditInput.value);
    const grade = parseFloat(gradeSelect.value);

    if (!isNaN(credit) && !isNaN(grade)) {
        courses.push({ credit, grade });
        displayCourses();
        updateTotalGPA();
        // Clear input fields
        creditInput.value = '';
        gradeSelect.selectedIndex = 0;
    } else {
        alert('Please enter valid values for Credit Hours and Grade.');
    }
}

function displayCourses() {
    const coursesDiv = document.getElementById('courses');
    coursesDiv.innerHTML = '';

    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.textContent = `Credit: ${course.credit}, Grade: ${course.grade}`;
        coursesDiv.appendChild(courseDiv);
    });
}

function updateTotalGPA() {
    const totalGPASpan = document.getElementById('totalGPA');
    const totalCredits = courses.reduce((total, course) => total + course.credit, 0);
    const totalWeightedPoints = courses.reduce((total, course) => total + (course.credit * course.grade), 0);

    if (totalCredits > 0) {
        const totalGPA = (totalWeightedPoints / totalCredits).toFixed(2);
        totalGPASpan.textContent = totalGPA;
    } else {
        totalGPASpan.textContent = '0.0';
    }
}
