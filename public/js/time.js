document.addEventListener("DOMContentLoaded", function () {
    const timelines = document.querySelectorAll(".timeline");
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const timeline = entry.target;
                    const timelineItems = timeline.querySelectorAll(".timeline-item");

                    timeline.classList.add("animate");

                    timelineItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add("active");
                        }, index * 500); // 500ms delay between items
                    });
                }
            });
        },
        { threshold: 0.5 }
    );

    timelines.forEach(timeline => observer.observe(timeline));
});

function showContainer(containerId, clickedCard) {
    // Hide all containers
    const containers = document.querySelectorAll('.changingcont');
    containers.forEach(container => container.classList.remove('active'));

    // Show the targeted container
    const targetContainer = document.getElementById(containerId);
    if (targetContainer) {
        targetContainer.classList.add('active');
    }

    // Remove active class from all cards
    const cards = document.querySelectorAll('.selectorcard');
    cards.forEach(card => card.classList.remove('active'));

    // Add active class to the clicked card
    clickedCard.classList.add('active');
}