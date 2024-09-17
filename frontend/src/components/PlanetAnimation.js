import React from 'react';

// Inline styles for custom animations
const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(to bottom, #001f3f, #000000)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    zIndex: -1, // Make sure it is behind other content
  },
  planet: {
    position: 'relative',
    width: '8rem',
    height: '8rem',
    borderRadius: '50%',
    background: 'linear-gradient(to right, #4f83cc, #003a6d)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    animation: 'spin-slow 20s linear infinite',
  },
  orbit: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '24rem',
    height: '24rem',
    
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'orbit 30s linear infinite',
  },
  orbitItem: {
    position: 'absolute',
    width: '3rem',
    height: '3rem',
    background: '#ffffff',
    borderRadius: '50%',
    animation: 'orbit-item 20s linear infinite',
    transformOrigin: 'center',
  },
  orbit2: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    width: '32rem',
    height: '32rem',
    
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'orbit2 40s linear infinite',
  },
  orbitItem2: {
    position: 'absolute',
    width: '4rem',
    height: '4rem',
    background: '#bfa090',
    borderRadius: '50%',
    animation: 'orbit-item2 30s linear infinite',
    transformOrigin: 'center',
  },
  orbit3: {
    position: 'absolute',
    top: '80%',
    left: '80%',
    width: '36rem',
    height: '36rem',
    
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'orbit3 60s linear infinite',
  },
  orbitItem3: {
    position: 'absolute',
    width: '6rem',
    height: '6rem',
    background: '#fa4087',
    borderRadius: '50%',
    animation: 'orbit-item3 40s linear infinite',
    transformOrigin: 'center',
  },
};

// Inline CSS for animations
const animationStyles = `
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes orbit {
  0% {
    transform: rotate(0deg) translateX(50%) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(50%) rotate(-360deg);
  }
}

@keyframes orbit-item {
  0% {
    transform: rotate(0deg) translateX(50%) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(50%) rotate(-360deg);
  }
}

@keyframes orbit2 {
  0% {
    transform: rotate(0deg) translateX(50%) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(50%) rotate(-360deg);
  }
}

@keyframes orbit-item2 {
  0% {
    transform: rotate(0deg) translateX(50%) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(50%) rotate(-360deg);
  }
}

@keyframes orbit3 {
  0% {
    transform: rotate(0deg) translateX(50%) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(50%) rotate(-360deg);
  }
}

@keyframes orbit-item3 {
  0% {
    transform: rotate(0deg) translateX(50%) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(50%) rotate(-360deg);
  }
}
`;

const PlanetAnimation = () => {
  return (
    <div style={styles.container}>
      <style>{animationStyles}</style>
      <div style={styles.planet}>
        <div style={styles.orbit}>
          <div style={styles.orbitItem}></div>
        </div>
        <div style={styles.orbit2}>
          <div style={styles.orbitItem2}></div>
        </div>
        <div style={styles.orbit3}>
          <div style={styles.orbitItem3}></div>
        </div>
      </div>
    </div>
  );
};

export default PlanetAnimation;
