import * as index from 'anim.js';

// Với container có .feature
export const animGallery = new index.OBBAnimator('#features');
animGallery.run();

// Với thẻ đơn lẻ như .pet-card
export const animCards = new index.OBBAnimator('.pet-card', { duration: 1000 });
animCards.run();// File: /petgen.js