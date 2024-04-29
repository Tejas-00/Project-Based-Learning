function bookRedirect(pageURL) {
    window.location.href = pageURL;
}

const container = document.getElementById("ride-container");

const rideDetail = `<div class="ride-details">
                        <div class="taxi-icon">
                            <img src="images/taxi-cab-icon.png" style="width: 80%;">
                        </div>
                        <div class="departure-time">
                            11:00
                            <br><br><br>
                            <div class="departure-point">
                                Nashik
                            </div>
                        </div>
                        <div class="duration">
                            2hr 40min
                        </div>
                        <div class="arrival-time">
                            13:40
                            <br><br><br>
                            <div class="arrival-point">
                                Dhule
                            </div>
                        </div>
                        <div class="fare">
                            ₹ 700
                        </div>
                        <button class="book-button" id="bookButton" onclick="bookRedirect('user-info.html')">
                            Book
                        </button>
                        </div>`;

let taxiCount = 3;

for (let i = 1; i<=3; i++) {
    container.innerHTML += rideDetail;
}