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
let linkClass = document.getElementsByClassName("linkClass");

// Function to show Students in list if the page is displayed
function showPage( pageNum, $studentList ) {
    for ( let i = 0;i < $studentList.length; i++ ){
        $($studentList[i]).hide().removeClass("active");
        if(i >= (pageNum - 1 ) * 10  &&  i < (pageNum * 10 )){
          $($studentList[i]).show().addClass("active");
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
        $(anchor).addClass("linkClass");
        anchor.textContent = i; 
        anchor.addEventListener('click', (e) => { // Listen for click event on anchors in pagination navigation
        e.target = showPage( i, $studentList )
        });
        li.appendChild(anchor);
        ul.appendChild(li);
    }
    // Add class of active or remove depending on page   
    for (let i = 0; i < linkClass.length; i++ ){
                $(linkClass[0]).addClass("active");
                $(linkClass[i]).on("click", () => {
                    $(linkClass).removeClass("active");
                    $(linkClass[i]).addClass("active");
                });
            }
// Start list on page one and show only the first ten students
showPage( 1, $studentList );
};

// Put pagination navigation links on page
appendPageLinks($studentList);


// Create and append student search elements to page
pageHeader = document.querySelector('.page-header');
searchContainer = document.createElement('div');
$(searchContainer).addClass("student-search")
$(pageHeader).append(searchContainer);
studentSearchInput = document.createElement('input');
studentSearchButton = document.createElement('button');
$(studentSearchButton).html("Search");
studentSearchInput.placeholder = "Search for students...";
$(searchContainer).css("float", "right");
$(searchContainer).append(studentSearchInput);
$(searchContainer).append(studentSearchButton);

// Get input from student search field
const $searchInput = $(studentSearchInput);
// On click of student search button, search through student list for name or email
studentSearchButton.addEventListener('click', () => {
    const $searchReturn = $searchInput.val().toLowerCase();
    let searchResults = [];
    for ( let i =0; i < $studentList.length; i++ ) { // Search student list for name or email match
        $studentList[i].style.display = 'block';
        const $studentLi = $($studentList[i]);
        const $studentName = $studentLi.find("h3").text().toLowerCase();
        const $studentEmail = $studentLi.find("span").text().toLowerCase();
        // Show result for search match
        if ( $studentName.includes($searchReturn) ) {
            searchArr.push($studentLi);
        } else if ( $studentEmail.includes($searchReturn) ) {
            searchArr.push($studentLi);
        } else {
            $studentList[i].style.display = 'none';        
        }
    }
    console.log(searchResults);
// If no match for search results, alert user with alert box
    if (searchResults[0] === undefined) {
        alert('No students match your search, please try again.');
    }
});
