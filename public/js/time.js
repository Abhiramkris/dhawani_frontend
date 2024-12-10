document.addEventListener("DOMContentLoaded", function () {
    const timeline = document.querySelector(".timeline");
    const timelineItems = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add animation class to timeline
                    timeline.classList.add("animate");

                    // Animate each timeline item with delay
                    timelineItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add("active");
                            item.style.setProperty("--delay", `${index * 0.5}s`);
                        }, index * 10); // 500ms delay between items
                    });
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the timeline is in viewport
    );

    observer.observe(timeline);
});


function showcontainer(containerid, clickedcard) {
    console.log(containerid);

    // Hide all containers
    const containers = document.querySelectorAll('.changingcont');
    containers.forEach(container => container.classList.remove('active'));

    // Show the targeted container
    const targetContainer = document.getElementById(containerid);
    if (targetContainer) {
      targetContainer.classList.add('active');
    } else {
      console.log("Container not found");
    }

    // Remove active class from all cards
    const cards = document.querySelectorAll('.selectorcard');
    cards.forEach(card => card.classList.remove('active'));

    // Add active class to the clicked card
    clickedcard.classList.add('active');
  }