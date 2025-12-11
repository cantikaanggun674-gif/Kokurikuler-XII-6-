// Scroll ke section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if(section) {
        section.scrollIntoView({behavior: "smooth"});
    }
}

// Modal Galeri
const imageModal = document.getElementById("imageModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

function showModal(title, description){
    modalTitle.innerText = title;
    modalDescription.innerText = description;
    imageModal.style.display = "block";
}

function closeModal(){
    imageModal.style.display = "none";
}

// Modal Detail
const detailModal = document.getElementById("detailModal");
const modalBody = document.getElementById("modalBody");

function showDetailModal(title, body){
    document.getElementById("modalTitle").innerText = title;
    modalBody.innerText = body;
    detailModal.style.display = "block";
}

function closeDetailModal(){
    detailModal.style.display = "none";
}

// Tutup modal jika klik luar
window.onclick = function(event){
    if(event.target == imageModal) closeModal();
    if(event.target == detailModal) closeDetailModal();
}
