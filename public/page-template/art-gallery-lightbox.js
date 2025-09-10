const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('#gallery .art-img')
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active')
        
        // Clear old content
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }

        // Add clicked image
        const img = document.createElement('img')
        img.src = image.src
        lightbox.appendChild(img)

        // Add caption if available
        const caption = image.parentElement.querySelector('.caption')
        if (caption) {
            const captionClone = caption.cloneNode(true)
            lightbox.appendChild(captionClone)
        }
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})
