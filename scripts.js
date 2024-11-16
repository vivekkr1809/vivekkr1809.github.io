// scripts.js

// Function to show the correct tab content
function showTab(tabName) {
    // Get all tab contents
    const contents = document.querySelectorAll('.tab-content');
    
    // Hide all tab contents
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Get all tabs
    const tabs = document.querySelectorAll('.tab');
    
    // Remove 'active' class from all tabs
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab content and make the tab active
    const selectedContent = document.getElementById(tabName);
    selectedContent.classList.add('active');

    const activeTab = [...tabs].find(tab => tab.textContent.toLowerCase() === tabName.toLowerCase());
    activeTab.classList.add('active');
}

// Add event listeners for tab clicks (avoids inline onclick in HTML)
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const tabName = this.textContent.toLowerCase();
        showTab(tabName);
    });
});
