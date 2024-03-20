function getdata() {
    return new Promise((resolve, reject) => {
        resolve("PRACHI");
    });
}
getdata()
    .then(data => {
        console.log(data);
    }
    )
    .catch(error => {
        console.log(error);
    })