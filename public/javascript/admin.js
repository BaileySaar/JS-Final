(async () => {
    // Making the buttons acknowledge they are buttons
    const addMenuButton = document.querySelector('#add-menu')
    const updateMenuButton = document.querySelector('#update-menu')
    const deleteMenuButton = document.querySelector('#delete-menu')
    // Listeners for the buttons
    addMenuButton.addEventListener('click', addMenuItem)
    updateMenuButton.addEventListener('click', updateMenuItem)
    deleteMenuButton.addEventListener('click', deleteMenuItem)
 
    async function addMenuItem(event) {
      event.preventDefault()
        
        const menuId = document.querySelector('#menuId').value
        const menuIdDel = document.querySelector('#menuIdDel').value
        const menuName = document.querySelector('#menuName').value
        const menuDescription = document.querySelector('#menuDescription').value
        const response = await fetch('/api/menu', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: menuId,
            name: menuName,
            description: menuDescription
        })
      })
      // Clear the input fields after adding the menu item
      document.querySelector('#menuId').value = ''
      document.querySelector('#menuName').value = ''
      document.querySelector('#menuDescription').value = ''
    }
 
    async function updateMenuItem(event) {
      event.preventDefault()
      const menuId = document.querySelector('#menuId').value
      const menuName = document.querySelector('#menuName').value
      const menuDescription = document.querySelector('#menuDescription').value
      const response = await fetch(`/api/menu/${menuId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: menuName,
          description: menuDescription
        })
      })
      document.querySelector('#menuId').value = ''
      document.querySelector('#menuName').value = ''
      document.querySelector('#menuDescription').value = ''
    }
 
    async function deleteMenuItem(event) {
      event.preventDefault()
      const menuIdDel = document.querySelector('#menuIdDel').value
      const response = await fetch(`/api/menu/${menuIdDel}`, {
        method: 'DELETE'
      })
      document.querySelector('#menuIdDel').value = ''
    }
    // ---------------------------------------------------------------------------------------------
    // Making the buttons acknowledge they are buttons
    const addEventButton = document.querySelector('#add-event')
    const updateEventButton = document.querySelector('#update-event')
    const deleteEventButton = document.querySelector('#delete-event')
    // Listeners for the buttons
    addEventButton.addEventListener('click', addEventItem)
    updateEventButton.addEventListener('click', updateEventItem)
    deleteEventButton.addEventListener('click', deleteEventItem)
 
    async function addEventItem(event) {
      event.preventDefault()
 
        const eventId = document.querySelector('#eventId').value
        const eventIdDel = document.querySelector('#eventIdDel').value
        const eventName = document.querySelector('#eventName').value
        const eventLocation= document.querySelector('#eventLocation').value
        const eventDate= document.querySelector('#eventDate').value
        const eventHours= document.querySelector('#eventHours').value
      const response = await fetch('/api/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        id: eventId,
        name: eventName,
        location: eventLocation,
        date: eventDate,
        hours: eventHours
        })
      })
      document.querySelector('#eventId').value = ''
      document.querySelector('#eventName').value = ''
      document.querySelector('#eventLocation').value = ''
      document.querySelector('#eventDate').value = ''
      document.querySelector('#eventHours').value = ''
    }
 
    async function updateEventItem(event) {
      event.preventDefault()
      const eventId = document.querySelector('#eventId').value
      const eventName = document.querySelector('#eventName').value
      const eventDescription = document.querySelector('#eventDescription').value
      const response = await fetch(`/api/events/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: eventName,
          location: eventLocation,
          date: eventDate,
          hours: eventHours
        })
      })
      document.querySelector('#eventId').value = ''
      document.querySelector('#eventName').value = ''
      document.querySelector('#eventLocation').value = ''
      document.querySelector('#eventDate').value = ''
      document.querySelector('#eventHours').value = ''
    }
    
    async function deleteEventItem(event) {
      event.preventDefault()
      const eventIdDel = document.querySelector('#eventIdDel').value
      const response = await fetch(`/api/events/${eventIdDel}`, {
        method: 'DELETE'
      })
      document.querySelector('#eventIdDel').value = ''
    }
  })()