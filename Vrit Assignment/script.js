function sortCourses() {
    var container = document.querySelector('.container');
    var courses = container.querySelectorAll('.university');

    var sortBy = document.getElementById('sort').value;

    if (sortBy === 'duration') {
        sortAndDisplay(courses, sortBy, function(course) {
            return parseFloat(course.querySelector('.duration').innerText.split(' ')[1]);
        });
    } else if (sortBy === 'fee') {
        sortAndDisplay(courses, sortBy, function(course) {
            return parseFloat(course.querySelector('.fee').innerText.split(' ')[1].replace(',', ''));
        });
    } else if (sortBy === 'university') {
        sortAndDisplay(courses, sortBy, function(course) {
            return course.querySelector('h2').innerText.toLowerCase();
        });
    }
}

function sortAndDisplay(items, sortBy, getValueFunction) {
    var sortedItems = Array.from(items).sort(function(a, b) {
        var valueA = getValueFunction(a);
        var valueB = getValueFunction(b);

        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
    });

    // Clear existing content and append sorted items
    container.innerHTML = '';
    sortedItems.forEach(function(item) {
        container.appendChild(item);
    });
}
