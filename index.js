fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const lists = `
            <li>
              <div>
                <div class="icon">
                    <img src="${item.icon}">
                </div>
                <p>${item.category}</p>
              </div>
               <div class="point"><strong>${item.score}</strong><span>/</span>100</div>
            </li>`   
            setTimeout(() => {
                document.querySelector('.list').insertAdjacentHTML('afterbegin',lists);
            }, 300);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));
