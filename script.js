document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".proj-grids");

    projects.forEach(project => {
        const images = project.querySelectorAll(".project-images");
        let currentIndex = 0;

        if (images.length <= 1) return;

        images[currentIndex].classList.add("active");

        setInterval(() => {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }, 3000);
    });
});