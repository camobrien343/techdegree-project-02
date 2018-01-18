/* Treehouse Techdegree
Cameron O'Brien
Project 02
Pagination and Content
*/


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

// Create and append student search elements to page
pageHeader = document.querySelector('.page-header');
searchContainer = document.createElement('div');
$(pageHeader).append(searchContainer);
studentSearchInput = document.createElement('input');
studentSearchButton = document.createElement('button');
$(studentSearchButton).html("Submit");
studentSearchInput.placeholder = "Search for a student";
$(searchContainer).css("float", "right");
$(searchContainer).append(studentSearchInput);
$(searchContainer).append(studentSearchButton);

// Get input from student search field
const $searchInput = $(studentSearchInput);
// On click of student search button, search through student list for name or email
studentSearchButton.addEventListener('click', () => {
    const $searchReturn = $searchInput.val().toLowerCase();
    
    let searchArr = [];
    for ( let i =0; i < $studentList.length; i++ ) {
        $studentList[i].style.display = 'block';
        const $studentLi = $($studentList[i]);
        const $studentName = $studentLi.find("h3").text().toLowerCase();
        const $studentEmail = $studentLi.find("email").text().toLowerCase();

        if ( $studentName.includes($searchReturn) || $studentEmail.includes($searchReturn) ) {
            searchArr.push($studentLi);
        } else {
            $studentList[i].style.display = 'none';
        }
    }
    console.log(searchArr);
});
