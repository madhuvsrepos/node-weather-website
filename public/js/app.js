console.log('client side javascript is loaded')
const url = "/weather?city=round%20rock";
fetch(url).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        }
        else {
            console.log(data);
        }
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#weatherResult')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault(); //stops form from reloading
    const location = search.value;
    const url = "/weather?city=" + location;
    fetch(url).then((response) => {
        try {
            response.json().then((data) => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    console.log(data);

                    messageOne.textContent = JSON.stringify(data);
                }
            })
        } catch (error) {
            messageOne.textContent = response;
            console.log(error)
        }

    }).catch((error) => {
        messageOne.textContent = response;
        console.log(error)
    })

})