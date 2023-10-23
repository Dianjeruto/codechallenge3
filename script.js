const movie_section = document.querySelector('p')
const movie_all = document.querySelector('ul')

fetch("./db.json")
    .then(res => res.json())
    .then(data => {
        Object.entries(data).forEach(movies_list => {
            movie_section.insertAdjacentHTML('beforeend', `
            <br><img src="${movies_list[1][0].poster}">
            <p><b>Title</b>: ${movies_list[1][0].title}</p>
            <p><b>Runtime</b>: ${movies_list[1][0].runtime}</p>
            <p><b>Showtime</b>: ${movies_list[1][0].showtime}</p>
            <p><b>Description</b>: ${movies_list[1][0].description}</p>
            <p><b>Remaining Tickets</b>: <span id="tickets">${movies_list[1][0].capacity - movies_list[1][0].tickets_sold}</span></p>
            
            `)
        })

        Object.entries(data).forEach(movies_all => {
            movies = movies_all[1]
            Object.entries(movies).forEach(movie_1 => {
                movie_all.insertAdjacentHTML('beforeend', `<li>${movie_1[1].title}</li>`)

            })
        })
    })


function ticketPurchase(){
    const remaining_tickets = document.getElementById('tickets')
    const tickets = remaining_tickets.innerHTML
    if(tickets > 0){
        alert("Successfully Bought Ticket")
        tickets_new = tickets - 1
        remaining_tickets.innerHTML = tickets_new
    }else{
        alert("Tickets Sold Out")
    }
}

