const search = document.getElementById('search');
const submitBtn = document.getElementById('submit');
const imgurl = document.getElementById('imgurl');
const img = document.getElementById('img');

submitBtn.addEventListener("click", getData)

function getData() {
    const username = search.value;
    if (!username) {
        alert("type github username");
    } else {
        // console.log(username);
        var link = `https://github.com/identicons/${username}.png`;
        // console.log(link);
        img.src = link;
        img.title = link;
        imgurl.href = link;
    }

}

