// let setLandingMargin = () => {
//     ele = document.querySelector('#nav__section-id');
//     const height = ele.getBoundingClientRect().bottom;
//     console.log(height);
// }
// setLandingMargin();
// window.addEventListener("resize", setLandingMargin);

const fetchImgs = () => {
    // Step 1 - Make a xhr object
    const xhr = new XMLHttpRequest();
    const apiURL = "https://jsonplaceholder.typicode.com/photos";

    // Step 2 - Start constructing the request
    xhr.open("GET", apiURL);

    // Step 3 - Keep checking if request successfully: constructed -> sent -> server reachable -> reponse received
    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText);
            // console.log(response);
            let output = "";
            for (let i = 0; i < 10; i++) {
                output += `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${response[i].url}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${response[i].title}</h5>
                            </div>
                        </div>
                    </div>
            `;
            }

            document.querySelector(".ajax_container").innerHTML = output;
        }
    };

    // Step 4 - Send out the constructed request
    xhr.send();
};

fetchImgs();
