// Menampilkan prompt user
const user = document.getElementById("name");

function replaceName(){
    const namaUser = prompt("Siapakah nama anda ?")
    user.innerHTML = namaUser;
    user.setAttribute("data-text", namaUser)

}
replaceName();

// Hamburger menu
let menu = document.querySelector('#menu-icon');
let ul = document.querySelector('ul');

menu.onclick = () =>{
    menu.classList.toggle('active');
    ul.classList.toggle('open')
}


// Fungsi menampilkan output form input
const date = new Date();

function handleSubmit(event) {
    event.preventDefault();
    const nama = document.getElementById('nameId').value;
    const tglLahir = document.getElementById('tglLahir').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message-box').value;

    document.getElementById("tgl").textContent = `Date : ${date}`;
    document.getElementById("output-name").textContent = `Nama : ${nama}`;
    document.getElementById("output-tgl-lahir").textContent = `Tgl/Lahir : ${tglLahir}`;
    document.getElementById("output-gender").textContent = `Gender : ${gender.value}`;
    document.getElementById("output-message").textContent = `Message : ${message}`;
}