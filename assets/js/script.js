// Slider Script =================

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 4,
      },
    },
  });


// Custom Tab Script ================
let currentTab = 3;

function activateTab(tabNumber) {
  const previousTab = currentTab;

  if (tabNumber === 1 || tabNumber === 2) {
    return;
  }

  if (tabNumber < currentTab) {
    setCurrentTab(tabNumber, "active");
    showContent(tabNumber);
  } else if (tabNumber === currentTab + 1) {
    setCurrentTab(previousTab, "completed");
    setCurrentTab(tabNumber, "active");
    showContent(tabNumber);
  }

  if (currentTab === 3 && previousTab === 4) {
    setCurrentTab(4, "");
  }
  currentTab = tabNumber;
}
function setCurrentTab(tabNumber, status) {
  const tab = document.getElementById(`tab${tabNumber}`);
  const countSpan = tab.querySelector('.count');
  const svgIcon = tab.querySelector('svg');

  tab.className = `tab ${status}`;
  currentTab = tabNumber;

  if (status === 'completed') {
    countSpan.classList.add('icon-hidden');
    svgIcon.classList.remove('icon-hidden');
  } else {
    countSpan.classList.remove('icon-hidden');
    svgIcon.classList.add('icon-hidden');
  }
}

function showContent(tabNumber) {
  for (let i = 1; i <= 4; i++) {
    const content = document.getElementById(`content${i}`);
    content.classList.remove('active');
  }
  const selectedContent = document.getElementById(`content${tabNumber}`);
  selectedContent.classList.add('active');
}

setCurrentTab(1, 'completed');
setCurrentTab(2, 'completed');
setCurrentTab(3, 'active');
showContent(3);
