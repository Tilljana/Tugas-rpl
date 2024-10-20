var feedbackData = [];// Inisialisasi array untuk menyimpan data umpan balik

// Fungsi ini dipanggil saat tombol "Kirim" ditekan pada formulir
function tambahData() {
    var form = document.getElementById("feedbackForm");
    var tabelData = document.getElementById("tabelData");

    // Mengambil nilai dari input formulir dan waktu saat ini
    var data = {
        nama: form.nama.value,
        alamat: form.alamat.value,
        email: form.email.value,
        nomorhp: form.nomorhp.value,
        kritikSaran: form.kritikSaran.value,
        tanggal: new Date().toLocaleDateString(), // Tanggal saat ini
        waktu: new Date().toLocaleTimeString() // Waktu saat ini
    };
    // Menambahkan data ke dalam array feedbackData
    feedbackData.push(data);

    // Menampilkan data pada tabel dihalaman web
    tampilkanData();

    // Mereset formulir
    form.reset();
}

// Fungsi ini digunakan untuk menampilkan data umpan balik dalam bentuk tabel
function tampilkanData() {
    var tabelData = document.getElementById("tabelData");

    // Membuat elemen tabel baru
    var table = document.createElement("table");
    var headerRow = table.insertRow(0);

    // Menambahkan kolom-kolom ke tabel
    var columns = Object.keys(feedbackData[0]);
    columns.forEach(function (column) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(column));
        headerRow.appendChild(th);
    });

    // Menambahkan data ke dalam tabel
    feedbackData.forEach(function (rowData, rowIndex) {
        var dataRow = table.insertRow(rowIndex + 1);

        columns.forEach(function (column) {
            var td = dataRow.insertCell(-1);
            td.appendChild(document.createTextNode(rowData[column]));
        });
    });

    // Mengganti isi tabel pada halaman dengan tabel yang baru
    tabelData.innerHTML = "";
    tabelData.appendChild(table);
}




// Ambil elemen footer
const footer = document.querySelector('footer');

// Fungsi untuk menampilkan atau menyembunyikan footer saat scrolling
function toggleFooterVisibility() {
    const scrollPosition = window.scrollY;

    // Atur bottom pada nilai negatif untuk menyembunyikan footer
    footer.style.bottom = scrollPosition > 100 ? '0' : '-50px';
}

// Panggil fungsi saat event scrolling terjadi
window.addEventListener('scroll', toggleFooterVisibility);
