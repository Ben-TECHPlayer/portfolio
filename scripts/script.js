function showSection(sectionId) {
    const hard = document.getElementById('hardskills');
    const soft = document.getElementById('softskills');
    const hardBtn = document.getElementById('btn-hardskills');
    const softBtn = document.getElementById('btn-softskills');

    const all = document.getElementById('every');
    const sti2d = document.getElementById('sti2d');
    const but = document.getElementById('but');
    const home = document.getElementById('home');
    const allBtn = document.getElementById('btn-every');
    const sti2dBtn = document.getElementById('btn-sti2d');
    const butBtn = document.getElementById('btn-but');
    const homeBtn = document.getElementById('btn-home');

    const work = document.getElementById('works');
    const salon = document.getElementById('salons');
    const intern = document.getElementById('internship');
    const jobs = document.getElementById('full-time');
    const workBtn = document.getElementById('btn-works');
    const salonBtn = document.getElementById('btn-salons');
    const internBtn = document.getElementById('btn-internship');
    const jobsBtn = document.getElementById('btn-full-time');


    if (sectionId === 'hardskills') {
        hard.style.display = 'grid';
        soft.style.display = 'none';
        hardBtn.style.color = 'blue';
        softBtn.style.color = '';
    } else if (sectionId === 'softskills') {
        hard.style.display = 'none';
        soft.style.display = 'grid';
        hardBtn.style.color = '';
        softBtn.style.color = 'blue';
    } else if (sectionId === 'every') {
        all.style.display = 'grid';
        sti2d.style.display = 'none';
        but.style.display = 'none';
        home.style.display = 'none';
        allBtn.style.color = 'blue';
        sti2dBtn.style.color = '';
        butBtn.style.color = '';
        homeBtn.style.color = '';
    } else if (sectionId === 'sti2d') {
        all.style.display = 'none';
        sti2d.style.display = 'grid';
        but.style.display = 'none';
        home.style.display = 'none';
        allBtn.style.color = '';
        sti2dBtn.style.color = 'blue';
        butBtn.style.color = '';
        homeBtn.style.color = '';
    } else if (sectionId === 'but') {
        all.style.display = 'none';
        sti2d.style.display = 'none';
        but.style.display = 'grid';
        home.style.display = 'none';
        allBtn.style.color = '';
        sti2dBtn.style.color = '';
        butBtn.style.color = 'blue';
        homeBtn.style.color = '';
    } else if (sectionId === 'home') {
        all.style.display = 'none';
        sti2d.style.display = 'none';
        but.style.display = 'none';
        home.style.display = 'grid';
        allBtn.style.color = '';
        sti2dBtn.style.color = '';
        butBtn.style.color = '';
        homeBtn.style.color = 'blue';
    } else if (sectionId === 'works') {
        work.style.display = 'grid';
        salon.style.display = 'none';
        intern.style.display = 'none';
        jobs.style.display = 'none';
        workBtn.style.color = 'blue';
        salonBtn.style.color = '';
        internBtn.style.color = '';
        jobsBtn.style.color = '';
    } else if (sectionId === 'salons') {
        work.style.display = 'none';
        salon.style.display = 'grid';
        intern.style.display = 'none';
        jobs.style.display = 'none';
        workBtn.style.color = '';
        salonBtn.style.color = 'blue';
        internBtn.style.color = '';
        jobsBtn.style.color = '';
    } else if (sectionId === 'internship') {
        work.style.display = 'none';
        salon.style.display = 'none';
        intern.style.display = 'grid';
        jobs.style.display = 'none';
        workBtn.style.color = '';
        salonBtn.style.color = '';
        internBtn.style.color = 'blue';
        jobsBtn.style.color = '';
    } else if (sectionId === 'full-time') {
        work.style.display = 'none';
        salon.style.display = 'none';
        intern.style.display = 'none';
        jobs.style.display = 'grid';
        workBtn.style.color = '';
        salonBtn.style.color = '';
        internBtn.style.color = '';
        jobsBtn.style.color = 'blue';
    }
}
