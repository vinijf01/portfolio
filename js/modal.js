// Modal Logic
const modal = document.getElementById("projectModal");
let activeProjectKey = null;

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        activeProjectKey = card.dataset.project;
        const project = projectData[activeProjectKey];

        modalTitle.textContent = project.title;
        modalSubtitle.textContent = project.subtitle;
        modalProblem.textContent = project.problem;
        modalSolution.textContent = project.solution;

        modalTasks.innerHTML = project.tasks.map(t => `<li>${t}</li>`).join("");
        modalTech.innerHTML = project.tech.map(t => `<span>${t}</span>`).join("");

        // Images
        modalImages.innerHTML = "";
        project.images?.forEach((img, index) => {
            modalImages.innerHTML += `
        <div class="modal-image-wrapper" onclick="openImageViewer(${index})">
            <img src="${img.src}" alt="${img.title}" class="modal-image">
            <div class="image-caption">${img.title}</div>
        </div>
    `;
        });


        // References
        modalLinks.innerHTML = "";

        if (project.links?.github) {
            modalLinks.innerHTML += `
        <div class="reference-card">
            <div class="ref-icon">
                <i class="fab fa-github"></i>
            </div>
            <div class="ref-content">
                <h5>GitHub Repository</h5>
                <p>Source code of the custom SonarQube plugin and rule implementation.</p>
                <a href="${project.links.github}" target="_blank">
                    View Repository →
                </a>
            </div>
        </div>
    `;
        }

        if (project.links?.docs) {
            modalLinks.innerHTML += `
        <div class="reference-card">
            <div class="ref-icon">
                <i class="fas fa-book"></i>
            </div>
            <div class="ref-content">
                <h5>Documentation</h5>
                <p>Rule explanation, configuration steps, and usage guidelines.</p>
                <a href="${project.links.docs}" target="_blank">
                    Read Documentation →
                </a>
            </div>
        </div>
    `;
        }


        modal.classList.add("active");
    });
});

document.querySelector(".close-modal").onclick = () => {
    modal.classList.remove("active");
};

/* ===== IMAGE VIEWER LOGIC ===== */
let currentIndex = 0;

function openImageViewer(index) {
    currentIndex = index;
    updateViewer();
    document.getElementById("imageViewer").classList.add("active");
}

function updateViewer() {
    const img = projectData[activeProjectKey].images[currentIndex];
    viewerImage.src = img.src;
    viewerTitle.textContent = img.title;
}

document.querySelector(".viewer-close").onclick = () => {
    imageViewer.classList.remove("active");
};

document.querySelector(".viewer-nav.next").onclick = () => {
    const imgs = projectData[activeProjectKey].images;
    currentIndex = (currentIndex + 1) % imgs.length;
    updateViewer();
};

document.querySelector(".viewer-nav.prev").onclick = () => {
    const imgs = projectData[activeProjectKey].images;
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    updateViewer();
};
