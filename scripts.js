document.addEventListener("DOMContentLoaded", function() {
    // get all header elements
    const headers = document.querySelectorAll(".header");

    // // add click event listener to each header
    // headers.forEach(function(header) {
    //     header.addEventListener("click", function() {
    //         // hide all other hidden_links
    //         const allHiddenLinks = document.querySelectorAll(".hidden_links");
    //         allHiddenLinks.forEach(function(hiddenLink) {
    //             if (hiddenLink !== header.nextElementSibling) {
    //                 hiddenLink.classList.remove("show");
    //                 const upIcon = header.querySelector(".toggle_icon i.fa-chevron-up");
    //                 const downIcon = header.querySelector(".toggle_icon i.fa-chevron-down");
    //                 if (upIcon !== null) {
    //                     upIcon.style.display = "none";
    //                 }
    //                 if (downIcon !== null) {
    //                     downIcon.style.display = "inline-block";
    //                 }
    //             }
    //         });

    //         // toggle this header's hidden_links
    //         this.nextElementSibling.classList.toggle("show");
    //         const upIcon = this.querySelector(".toggle_icon i.fa-chevron-up");
    //         const downIcon = this.querySelector(".toggle_icon i.fa-chevron-down");
    //         if (upIcon !== null) {
    //             upIcon.style.display = this.nextElementSibling.classList.contains("show") ? "inline-block" : "none";
    //         }
    //         if (downIcon !== null) {
    //             downIcon.style.display = this.nextElementSibling.classList.contains("show") ? "none" : "inline-block";
    //         }

    //         // update chevron icons for all hidden_links elements
    //         allHiddenLinks.forEach(function(hiddenLink) {
    //             const header = hiddenLink.previousElementSibling;
    //             const upIcon = header.querySelector(".toggle_icon i.fa-chevron-up");
    //             const downIcon = header.querySelector(".toggle_icon i.fa-chevron-down");
    //             if (upIcon !== null) {
    //                 upIcon.style.display = hiddenLink.classList.contains("show") ? "inline-block" : "none";
    //             }
    //             if (downIcon !== null) {
    //                 downIcon.style.display = hiddenLink.classList.contains("show") ? "none" : "inline-block";
    //             }
    //         });
    //     });
    // });

    allLinks.forEach((link) => {
        link.addEventListener("click", function() {
            // Remove the 'active' class from all li elements
            allLinks.forEach((otherLink) => {
                otherLink.parentElement.classList.remove("active");
            });

            // Add the 'active' class to the clicked li element
            link.parentElement.classList.add("active");
        });
    });
});

// Select .main_content and all .hidden_links elements
const mainContent = document.querySelector('.main_content');
const hiddenLinksSections = document.querySelectorAll('.hidden_links ul');

// Get all h2 elements inside .main_content
const h2Elements = mainContent.querySelectorAll('h2');

// Flatten the hiddenLinksSections into an array of links
const allLinks = [];
hiddenLinksSections.forEach((hiddenLinks) => {
    hiddenLinks.querySelectorAll('a').forEach((link) => {
        allLinks.push(link);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get all header elements
    const headers = document.querySelectorAll(".inside_menu_container .header");

    // Iterate through each header element
    headers.forEach((header) => {
        const hiddenLinks = header.nextElementSibling;

        // Check if the next element sibling is a .hidden_links
        if (hiddenLinks && hiddenLinks.classList.contains("hidden_links")) {
            // Add click event listener to the header
            header.addEventListener("click", function() {
                hiddenLinks.classList.toggle("show");

                // Toggle chevron icons for this header
                const upIcon = this.querySelector(".toggle_icon i.fa-chevron-up");
                const downIcon = this.querySelector(".toggle_icon i.fa-chevron-down");

                if (upIcon !== null) {
                    upIcon.style.display = hiddenLinks.classList.contains("show") ? "none" : "none";
                }

                if (downIcon !== null) {
                    downIcon.style.display = hiddenLinks.classList.contains("show") ? "none" : "none";
                }
            });

            // Set the initial state of hidden_links and chevron icons
            hiddenLinks.classList.add("show");

            const upIcon = header.querySelector(".toggle_icon i.fa-chevron-up");
            const downIcon = header.querySelector(".toggle_icon i.fa-chevron-down");

            if (upIcon !== null) {
                upIcon.style.display = "none";
            }

            if (downIcon !== null) {
                downIcon.style.display = "none";
            }
        }
    });
});

// Iterate through all h2 elements
h2Elements.forEach((h2, index) => {
    // Create an anchor with the h2 content as its name
    const anchorName = h2.textContent.trim().replace(/\s+/g, '-').toLowerCase();
    const anchor = document.createElement('a');
    anchor.name = anchorName;
    h2.parentElement.insertBefore(anchor, h2);

    // Update the corresponding link
    const link = allLinks[index];
    if (link) {
        link.href = `#${anchorName}`;
    }
});


// Debounce function
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}

// Function to update the .sidebar_content position
function updateSidebarContentPosition() {
    const sidebarContent = document.querySelector('.sidebar_content');
    const viewportWidth = window.innerWidth;

    if (viewportWidth < 991) {
        sidebarContent.style.position = '';
    } else {
        sidebarContent.style.position = 'fixed';
    }
}

// Run the function on load and on resize
window.addEventListener('load', updateSidebarContentPosition);
window.addEventListener('resize', debounce(updateSidebarContentPosition, 250));


function removeEmptyColumns() {
    const viewportWidth = window.innerWidth;

    if (viewportWidth <= 991) {
        const columns = document.querySelectorAll('.col-md-3.py-4.border-right-gray');

        columns.forEach((column) => {
            if (column.textContent.trim() === '') {
                column.remove();
            }
        });
    }
}

// Run the function on load and on resize
window.addEventListener('load', removeEmptyColumns);
window.addEventListener('resize', debounce(removeEmptyColumns, 250));


// Adjust anchor elements' top position
const anchors = mainContent.querySelectorAll('a[name]');
anchors.forEach(anchor => {
    anchor.style.position = 'relative';
    anchor.style.top = '-248px';
});


document.addEventListener('DOMContentLoaded', function() {
    // Function to open the mobile menu
    function openMobileMenu() {
        document.querySelector('#fixedmobile').classList.add('visible');
        document.querySelector('.openmobilemenu').style.display = 'none';
        document.querySelector('.closemobilemenu').style.display = 'inline-block';
        document.body.style.overflow = 'hidden'; // Disable scrolling
    }

    // Function to close the mobile menu
    function closeMobileMenu() {
        document.querySelector('#fixedmobile').classList.remove('visible');
        document.querySelector('.closemobilemenu').style.display = 'none';
        document.querySelector('.openmobilemenu').style.display = 'inline-block';
        document.body.style.overflow = ''; // Enable scrolling
    }

    // Add click listener to open the mobile menu
    document.querySelector('.openmobilemenu').addEventListener('click', function() {
        openMobileMenu();
    });

    // Add click listener to close the mobile menu
    document.querySelector('.closemobilemenu').addEventListener('click', function() {
        closeMobileMenu();
    });
});