// Open Modal
const openModal = () => {
    const closeModal = document.querySelector('.modal .ri-close-line')
    const modal = document.querySelector('.modal')
    const box = document.querySelectorAll('.cards-projects .box')
    const modalTitle = modal.querySelector('.title h2')
    const modalDescription = modal.querySelector('.info p')
    const modalDate = modal.querySelector('span')
    const modalLinkProject = modal.querySelector('.links a.link-project')
    const modalLinkRepository = modal.querySelector('.links a.link-repository')
    const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
    const iframe = modal.querySelector('.video iframe')

    box.forEach((item, index) => {
        const addData = () => {
            if (index != 5) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';

                // ❌ Removido: document.body.classList.add('transparent')
            }

            modalTitle.innerHTML = dataProjects[index].title
            modalDescription.innerHTML = dataProjects[index].description
            modalDate.innerHTML = dataProjects[index].date
            modalLinkProject.setAttribute('href', dataProjects[index].site) 
            modalLinkRepository.setAttribute('href', dataProjects[index].repository) 
            modalLinkLinkedin.setAttribute('href', dataProjects[index].linkedin) 
            iframe.setAttribute('src', dataProjects[index].videoSrc + '?autoplay=1&amp;loop=0')
        }

        item.addEventListener('click', addData)
    })

    const closingModal = () => {
        modal.classList.add('hidden')
        document.body.style.overflow = 'visible';

        // ❌ Removido: document.body.classList.remove('transparent')

        iframe.setAttribute('src', '')
    }

    closeModal.addEventListener('click', closingModal)

    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") closingModal();
    });
}

openModal()
