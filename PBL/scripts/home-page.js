function rand() {
    const info = document.getElementById("pp")
    if (info) {
        info.addEventListener('click', function() {
            let x = document.querySelector('.profile-pic-container');
            x.innerHTML = `<a href="driver-login.html">
                <img class="profile-pic" src="images/blank-profile-picture.png">
            </a>`;
            console.log("hello");
            }
        )
    }
}