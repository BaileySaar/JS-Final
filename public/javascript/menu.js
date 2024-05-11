const menu = document.querySelector('#Menu')
const container = document.querySelector('#container')

const fetchMenu = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(menuData => {
      const menuItems = menuData.map(menuItem => {
        return `<div class="menu-item">
                  <h3>${menuItem.name}</h3>
                  <p>${menuItem.description}</p>
                  <span>Price: ${menuItem.price}</span>
                </div>`
      })

      menu.innerHTML = menuItems.join('')
    })
}

fetchMenu('/api/menu')