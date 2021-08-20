const List = document.querySelector("ul");
const form = document.querySelector("form");

const addUsers = (users) => {

    const date = users.Date.toDate()
    

    html = `
        <li>
            <div>${users.FirstName}</div>
            <div>${date}</div>
        </li>
    `

    List.innerHTML += html
}

db.collection('users').get()
.then((snapshot) => {
 
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        addUsers(doc.data())

    })

}).catch(err => {
    console.log(err)
})


form.addEventListener('submit', e => {
    e.preventDefault();
    const date = new Date();
    const Users = {
        FirstName: form.users.value,
        Date: firebase.firestore.Timestamp.fromDate(date)
    };

    console.log(Users)

    db.collection('users').add(Users)
    .then(() => {
        console.log('users added');
    }).catch(err => {
        console.log(err);
    });
});

