// scripts.js

// Function to show the correct tab content
function showTab(tabName) {
    // Hide all the tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove the 'active' class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab content and make the tab active
    document.getElementById(tabName).classList.add('active');
    const activeTab = document.querySelector(`.tab[onclick="showTab('${tabName}')"]`);
    activeTab.classList.add('active');
}
