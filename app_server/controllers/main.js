
const destinationsEndpoint = 'http://localhost:3000/api/destinations';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};

/* GET Homepage */
const destination = async function (req, res, next) {
    // console.log('DESTINATON CONTROLLER BEGIN');
    await fetch(destinationsEndpoint, options)
        .then((response) => response.json())
        .then((json) => {
            let message = null;
            if (!(json instanceof Array)) {
                message = "API lookup error";
                json = [];
            } else {
                if (!json.length) {
                    message = "No trips exist in our database!";
                }
            }
            res.render("destination", {title:"Andrew Purdy's Destination Slideshow", destinations: json});
        })
        .catch(err => res.status(500).send(err.message));
};

module.exports = {
    destination
}