require('aframe-physics-system');
document.addEventListener("DOMContentLoaded", function() {
  console.log('helooo');

  AFRAME.registerComponent('throwing-hand', {
    dependencies: ['dynamic-body', 'vive-controls'],
    init: function() {
      this.el.addEventListener('triggerdown', function(e) {
        console.log('triggerdown');
      });
    }
  })
});
