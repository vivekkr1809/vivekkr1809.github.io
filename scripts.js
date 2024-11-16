// Function to show the correct tab content
function showTab(tabName) {
    // Get all tab content sections and hide them
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');  // Hide all tab content
    });

    // Remove the 'active' class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');  // Remove active class from all tabs
    });

    // Show the selected tab content and make the tab active
    const activeTabContent = document.getElementById(tabName);
    if (activeTabContent) {
        activeTabContent.classList.add('active');  // Show the tab content
    }

    // Update the active tab
    const activeTab = document.querySelector(`.tab[onclick="showTab('${tabName}')"]`);
    if (activeTab) {
        activeTab.classList.add('active');  // Highlight the clicked tab
    }
}
