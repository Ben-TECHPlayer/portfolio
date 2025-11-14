function showSection(sectionId) {
    const hard = document.getElementById('hardskills');
    const soft = document.getElementById('softskills');
    const hardBtn = document.getElementById('btn-hardskills');
    const softBtn = document.getElementById('btn-softskills');

    const webdev = document.getElementById('web-dev');
    const webdesign = document.getElementById('web-design');
    const mobiledev = document.getElementById('mobile');
    const webdevBtn = document.getElementById('btn-webdev');
    const webdesignBtn = document.getElementById('btn-webdesign');
    const mobileBtn = document.getElementById('btn-mobile');

    // const work = document.getElementById('works');
    // // const salon = document.getElementById('salons');
    // const intern = document.getElementById('internship');
    // const jobs = document.getElementById('full-time');
    // const workBtn = document.getElementById('btn-works');
    // // const salonBtn = document.getElementById('btn-salons');
    // const internBtn = document.getElementById('btn-internship');
    // const jobsBtn = document.getElementById('btn-full-time');


    if (sectionId === 'hardskills') {
        hard.style.display = 'grid';
        soft.style.display = 'none';
        hardBtn.style.color = 'yellow';
        softBtn.style.color = '';
    } else if (sectionId === 'softskills') {
        hard.style.display = 'none';
        soft.style.display = 'grid';
        hardBtn.style.color = '';
        softBtn.style.color = 'yellow';
    } else if (sectionId === 'web-dev') {
        webdev.style.display = 'grid';
        webdesign.style.display = 'none';
        mobiledev.style.display = 'none';
        webdevBtn.style.color = 'yellow';
        webdesignBtn.style.color = '';
        mobileBtn.style.color = '';
    } else if (sectionId === 'web-design') {
        webdev.style.display = 'none';
        webdesign.style.display = 'grid';
        mobiledev.style.display = 'none';
        webdevBtn.style.color = '';
        webdesignBtn.style.color = 'yellow';
        mobileBtn.style.color = '';
    } else if (sectionId === 'mobile') {
        webdev.style.display = 'none';
        webdesign.style.display = 'none';
        mobiledev.style.display = 'grid';
        webdevBtn.style.color = '';
        webdesignBtn.style.color = '';
        mobileBtn.style.color = 'yellow';
    } 
}

