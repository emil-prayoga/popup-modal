const openBtns = document.querySelectorAll('.openModal'); 
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

// buka modal untuk semua tombol
openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = "block";
        overlay.style.display = "block";
        setTimeout(() => {
            modal.classList.add("active");
            overlay.classList.add("active");
        }, 10);
    });
});

// tutup modal
function closeModal() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    setTimeout(() => {
        modal.style.display = "none";
        overlay.style.display = "none";
    }, 300);
}

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);