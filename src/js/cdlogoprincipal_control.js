// Control script for cdlogo animation (modular)
(function(){
  // expects the SVG to have id="cdlogo_svg"
  const svg = document.getElementById('cdlogo_svg');
  if (!svg) return;

  function restart() {
    // remove animations by cloning nodes and replacing to restart CSS animations
    const parent = svg.parentNode;
    const clone = svg.cloneNode(true);
    parent.replaceChild(clone, svg);
  }

  window.cdlogo = {
    restart: restart,
    // set progress in [0,1] isn't trivial without SMIL; restart is simplest control
  };
})();