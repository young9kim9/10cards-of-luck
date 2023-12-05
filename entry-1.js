const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}


function toggleText(element) {
    const revealedTextContainer = document.querySelector('.revealed-text-container');
    const revealedText = document.querySelector('.revealed-text');
  
    // Check if the clicked keyword-off is already active
    const isActive = element.classList.contains('active');
  
    // Reset all keyword-off elements
    const keywordOffElements = document.querySelectorAll('.keyword-off');
    keywordOffElements.forEach((el) => el.classList.remove('active'));
  
    // If not active, activate the clicked element
    if (!isActive) {
      element.classList.add('active');
      
      // Replace the revealed text content based on the clicked keyword
      switch (element.innerText) {
        case '#Start':
          revealedText.innerHTML = 'Start a new adventure / Take a new path / Enter a new phase';
          break;
        // Add cases for other keywords as needed
      }
  
      // Set the max-height to the height of the revealed text
      revealedTextContainer.style.maxHeight = `${revealedText.offsetHeight}px`;
    } else {
      // If already active, deactivate and hide the revealed text
      revealedTextContainer.style.maxHeight = '0';
    }
  }
  