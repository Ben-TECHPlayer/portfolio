function toggleMenu() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("open");

    document.addEventListener("click", function(event) {
        const menu = document.querySelector(".menu");
        const dropdown = document.getElementById("dropdown");

        // Si on clique ni sur le bouton, ni sur le menu
        if (!menu.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove("open");
        }
    });
}

function showSection(sectionId) {
    const hard = document.getElementById('hardskills');
    const soft = document.getElementById('softskills');
    const all = document.getElementById('every');
    const sti2d = document.getElementById('sti2d');
    const but = document.getElementById('but');
    const home = document.getElementById('home');
    const work = document.getElementById('works');
    const salon = document.getElementById('salons');
    const intern = document.getElementById('internship');


    if (sectionId === 'hardskills') {
        hard.style.display = 'grid';
        soft.style.display = 'none';
    } else if (sectionId === 'softskills') {
        hard.style.display = 'none';
        soft.style.display = 'grid';
    } else if (sectionId === 'every') {
        all.style.display = 'grid';
        sti2d.style.display = 'none';
        but.style.display = 'none';
        home.style.display = 'none';
    } else if (sectionId === 'sti2d') {
        all.style.display = 'none';
        sti2d.style.display = 'grid';
        but.style.display = 'none';
        home.style.display = 'none';
    } else if (sectionId === 'but') {
        all.style.display = 'none';
        sti2d.style.display = 'none';
        but.style.display = 'grid';
        home.style.display = 'none';
    } else if (sectionId === 'home') {
        all.style.display = 'none';
        sti2d.style.display = 'none';
        but.style.display = 'none';
        home.style.display = 'grid';
    } else if (sectionId === 'works') {
        work.style.display = 'grid';
        salon.style.display = 'none';
        intern.style.display = 'none';
    } else if (sectionId === 'salons') {
        work.style.display = 'none';
        salon.style.display = 'grid';
        intern.style.display = 'none';
    } else if (sectionId === 'internship') {
        work.style.display = 'none';
        salon.style.display = 'none';
        intern.style.display = 'grid';
    }
}
