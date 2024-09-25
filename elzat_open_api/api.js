
async function fetchMenu() {
    try {
        const response = await fetch('https://api.sampleapis.com/coffee/hot'); // The open API coffee url
        const data = await response.json();

        const limitedItems = data.slice(0, 3);

        displayMenuItems(limitedItems);
    } catch (error) {
        console.error("Error fetching menu data:", error);
    }
}

function displayMenuItems(menuItems) {
    const menuSection = document.getElementById('menu');
    menuSection.innerHTML = '<h2>Our Menu</h2>';

  
    menuItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');

        menuItemDiv.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p><strong>$${item.price || '4'}</strong></p>
        `;

        menuSection.appendChild(menuItemDiv);
    });
}

document.addEventListener('DOMContentLoaded', fetchMenu);
