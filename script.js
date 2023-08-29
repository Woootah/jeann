const reviews = document.querySelector('.reviews'); 

fetch('./reviews.json')
    .then(res => {
        return res.json()
    })
    .then(data => {
        data.forEach(item => {
            const html = `
            <article class="testimonies">
                <img src="${item.image}" alt="${item.name}">
                <div class="review-text">
                    <h2>${item.name}</h2>
                    <p><q>${item.comment}</q></p>
                </div>
            </article>`; 


            reviews.innerHTML += html; 
        })
    })
    .catch(err => {
        console.log('Error fetching data ' + err); 
    })