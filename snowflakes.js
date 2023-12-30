function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❅'; 
    document.querySelector('.snowflakes').appendChild(snowflake);
  
    const size = Math.random() * 10 + 5; 
    const startPos = Math.random() * window.innerWidth;
  
    snowflake.style.fontSize = `${size}px`; 
    snowflake.style.color = '#ffffff'; 
    snowflake.style.left = `${startPos}px`; 
    snowflake.style.top = '-20px'; 
  
    const animationDuration = Math.random() * 5 + 5;
    snowflake.style.animation = `snowfall linear ${animationDuration}s infinite`;
  
    snowflake.addEventListener('animationiteration', () => {
      snowflake.style.top = '-20px'; 
      snowflake.style.left = `${Math.random() * window.innerWidth}px`; 
    });
  }
  
  for (let i = 0; i < 50; i++) {
    createSnowflake();
  }
  