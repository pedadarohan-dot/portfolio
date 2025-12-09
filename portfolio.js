let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
 
// EmailJS form submission
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault(); // stops actual form submission
    alert("✅ Thank you! Your message has been sent.");
    this.reset(); // clears the form
});
 
// Certificate

// Setup
const canvas = document.getElementById("bgCanvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Gradient shader material
const geometry = new THREE.PlaneGeometry(10, 10, 50, 50);
const material = new THREE.ShaderMaterial({
  uniforms: { time: { value: 0 } },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(vUv.x, vUv.y, abs(sin(time)), 1.0);
    }
  `,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Animate
function animate() {
  requestAnimationFrame(animate);
  material.uniforms.time.value += 0.02;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

/* ========================================
   LIQUID GLASS INTERACTIVE EFFECTS
   Add this to the END of your portfolio.js file
   ======================================== */

// Apply Liquid Glass Classes on Page Load
document.addEventListener('DOMContentLoaded', function() {
    
    // Add liquid glass to header
    const header = document.querySelector('.header');
    if (header) {
        header.classList.add('liquid-glass', 'liquid-glass-interactive');
    }

    // Add liquid glass to all service boxes
    const serviceBoxes = document.querySelectorAll('.service-box');
    serviceBoxes.forEach(box => {
        box.classList.add('liquid-glass', 'liquid-glass-interactive');
    });

    // Add liquid glass to skills container
    const skillsContainer = document.querySelector('.skills .container');
    if (skillsContainer) {
        skillsContainer.classList.add('liquid-glass');
    }

    // Add liquid glass to individual skill bars
    const skillBars = document.querySelectorAll('.skills .container .bar');
    skillBars.forEach(bar => {
        bar.classList.add('liquid-glass', 'liquid-glass-interactive');
    });

    // Add liquid glass to education content boxes
    const educationContent = document.querySelectorAll('.education .content');
    educationContent.forEach(content => {
        content.classList.add('liquid-glass');
    });

    // Add liquid glass to contact form inputs
    const formInputs = document.querySelectorAll('.contact form .input-box input, .contact form textarea');
    formInputs.forEach(input => {
        input.classList.add('liquid-glass');
    });

    // Add liquid glass to all buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.classList.add('liquid-glass', 'liquid-glass-interactive');
    });

    // Add liquid glass to home image
    const homeImg = document.querySelector('.home-img img');
    if (homeImg) {
        homeImg.classList.add('liquid-glass');
    }

    // Add liquid glass to social icons
    const socialIcons = document.querySelectorAll('.social-icon a');
    socialIcons.forEach(icon => {
        icon.classList.add('liquid-glass');
    });

    // Add liquid glass to footer social icons
    const footerSocial = document.querySelectorAll('.footer .social a');
    footerSocial.forEach(icon => {
        icon.classList.add('liquid-glass');
    });

});

// Dynamic Mouse-Following Light Refraction Effect
document.addEventListener('mousemove', function(e) {
    const glassElements = document.querySelectorAll('.liquid-glass');
    
    glassElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check if mouse is over the element
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            // Create dynamic gradient based on mouse position
            element.style.setProperty('--mouse-x', `${xPercent}%`);
            element.style.setProperty('--mouse-y', `${yPercent}%`);
            
            // Add a temporary radial glow at mouse position
            const glow = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(64, 224, 208, 0.3) 0%, transparent 50%)`;
            const currentBg = window.getComputedStyle(element).background;
            element.style.background = `${glow}, ${currentBg}`;
        }
    });
});

// Parallax Glass Effect on Scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const glassElements = document.querySelectorAll('.liquid-glass-interactive');
    
    glassElements.forEach((element, index) => {
        const speed = 0.05 + (index * 0.01); // Different speed for each element
        const yPos = -(scrolled * speed);
        
        // Subtle parallax movement
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Interactive Ripple Effect on Click
document.querySelectorAll('.liquid-glass').forEach(element => {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(64, 224, 208, 0.6) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            animation: ripple 0.8s ease-out;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 800);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Tilt Effect on Glass Elements (3D Feel)
document.querySelectorAll('.liquid-glass-interactive').forEach(element => {
    element.addEventListener('mousemove', function(e) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * 5; // Max 5 degrees
        const rotateY = ((centerX - x) / centerX) * 5;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    element.addEventListener('mouseleave', function() {
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Ambient Light Animation (Simulates iOS Light Effects)
function createAmbientLight() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        // Create floating light orbs
        for (let i = 0; i < 3; i++) {
            const lightOrb = document.createElement('div');
            lightOrb.className = 'ambient-light-orb';
            lightOrb.style.cssText = `
                position: absolute;
                width: ${100 + Math.random() * 200}px;
                height: ${100 + Math.random() * 200}px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(64, 224, 208, 0.15) 0%, transparent 70%);
                filter: blur(40px);
                pointer-events: none;
                z-index: -1;
                animation: floatLight ${8 + Math.random() * 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 3}s;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
            `;
            
            section.style.position = 'relative';
            section.appendChild(lightOrb);
        }
    });
    
    // Add floating animation
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes floatLight {
            0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.3;
            }
            25% {
                transform: translate(30px, -30px) scale(1.1);
                opacity: 0.5;
            }
            50% {
                transform: translate(-20px, 20px) scale(0.9);
                opacity: 0.4;
            }
            75% {
                transform: translate(20px, 30px) scale(1.05);
                opacity: 0.6;
            }
        }
    `;
    document.head.appendChild(floatStyle);
}

// Initialize ambient lighting
createAmbientLight();

// Accessibility Toggle: Switch between transparent and opaque styles
function createGlassStyleToggle() {
    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = '🌟 Glass Style';
    toggleBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        padding: 12px 24px;
        background: linear-gradient(135deg, rgba(64, 224, 208, 0.2), rgba(64, 224, 208, 0.1));
        backdrop-filter: blur(10px);
        border: 2px solid rgba(64, 224, 208, 0.5);
        border-radius: 50px;
        color: #40E0D0;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        z-index: 9999;
        box-shadow: 0 4px 20px rgba(64, 224, 208, 0.3);
        transition: all 0.3s ease;
    `;
    
    let glassMode = 'normal'; // normal, frosted, clear
    
    toggleBtn.addEventListener('click', function() {
        const glassElements = document.querySelectorAll('.liquid-glass');
        
        glassElements.forEach(el => {
            el.classList.remove('liquid-glass-frosted', 'liquid-glass-clear');
            
            if (glassMode === 'normal') {
                el.classList.add('liquid-glass-frosted');
                glassMode = 'frosted';
                toggleBtn.innerHTML = '❄️ Frosted';
            } else if (glassMode === 'frosted') {
                el.classList.add('liquid-glass-clear');
                glassMode = 'clear';
                toggleBtn.innerHTML = '💎 Clear';
            } else {
                glassMode = 'normal';
                toggleBtn.innerHTML = '🌟 Glass Style';
            }
        });
    });
    
    toggleBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 8px 30px rgba(64, 224, 208, 0.5)';
    });
    
    toggleBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 20px rgba(64, 224, 208, 0.3)';
    });
    
    document.body.appendChild(toggleBtn);
}

// Initialize glass style toggle
createGlassStyleToggle();

console.log('🌟 Liquid Glass Design System Activated!');