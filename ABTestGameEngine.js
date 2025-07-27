import * from ('anim.js')
// Tween đơn giản dùng CSS
const animA = new OBBAnimator('.pet-card');
animA.run();

// Tween dạng GSAP theo container có .feature
const animB = new OBBAnimator('#features');
animB.run();