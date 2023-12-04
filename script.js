function absen() {
    const namaInput = document.getElementById('nama');
    const statusInput = document.getElementById('status');
    const hadirList = document.getElementById('hadir-list');

    const nama = namaInput.value;
    const status = statusInput.value;

    if (nama && status) {
        const listItem = document.createElement('li');
        listItem.textContent = `${nama} - ${status}`;
        hadirList.appendChild(listItem);

        // Clear input fields
        namaInput.value = '';
        statusInput.value = 'hadir';
    } else {
        alert('Mohon lengkapi formulir absensi.');
    }
}
