// Global variables 
const $page = $('.page');
const $studentList = $('.student-item');
const studentsPerPage = 10;
const totalPages = Math.ceil($studentList.length / studentsPerPage);
const paginationNav = document.createElement('div');
const ul = document.createElement('ul');

// Function to show Students in list if the page is displayed
function showPage( pageNum, $studentList ) {
    for ( let i = 0;i < $studentList.length; i++ ){
        $($studentList[i]).hide();
        if(i >= (pageNum - 1 ) * 10  &&  i < (pageNum * 10 )){
          $($studentList[i]).show();
        }
      }
};

// Function to create link navigation for list pages
function appendPageLinks( $studentList ){
    $($page).append(paginationNav);
    $(paginationNav).addClass("pagination");
    $(paginationNav).append(ul);
    // Create list items and anchors in pagination navigation
    for( let i = 1; i <= totalPages; i++ ){
        let li = document.createElement('li');
        let anchor = document.createElement('a');
        anchor.textContent = i; 
        anchor.addEventListener('click', (e) => { // Listen for click event on anchors in pagination navigation
        e.target = showPage( i, $studentList )
        });
        li.appendChild(anchor);
        ul.appendChild(li);
    }

// Start list on page one and show only the first ten students
showPage( 1, $studentList );
};

// Put pagination navigation links on page
appendPageLinks($studentList);

