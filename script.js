        const ballStyles = {
            1: { background: '#FFDD00', color: 'black', number: '1', solid: true },
            2: { background: '#0000FF', color: 'white', number: '2', solid: true },
            3: { background: '#FF0000', color: 'white', number: '3', solid: true },
            4: { background: '#51087E', color: 'white', number: '4', solid: true },
            5: { background: '#FF7F00', color: 'white', number: '5', solid: true },
            6: { background: '#00A651', color: 'white', number: '6', solid: true },
            7: { background: '#800000', color: 'white', number: '7', solid: true },
            8: { background: '#000000', color: 'white', number: '8', solid: true },
            9: { background: '#FFDD00', color: 'black', number: '9', solid: false },
            10: { background: '#0000FF', color: 'white', number: '10', solid: false },
            11: { background: '#FF0000', color: 'white', number: '11', solid: false },
            12: { background: '#51087E', color: 'white', number: '12', solid: false }
        };

function updateClock () {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate roation angles
  const secondsDegrees = (seconds / 60) * 360;
  const minutesDegrees = ((minutes + seconds / 60)/60)*360;
  const hoursDegrees = ((hours % 12 + minutes / 60) / 12) * 360;


  //Update hands rotation
  document.getElementById(`second-hand`).style.transform =
    `translateX(-50%) rotate(${secondsDegrees}deg)`;
  document.getElementById(`minute-hand`).style.transform = 
    `translateX(-50%) rotate(${minutesDegrees}deg)`;
  document.getElementById(`hour-hand`).style.transform =
  `translateX(-50%) rotate(${hoursDegrees}deg)`;

  // Clear all pockets first
  for (let i = 1; i <= 12; i++) {
    document.getElementById(`pocket-${i}`).innerHTML = ``;
  }

  // Get current hour in 12-hour format
  let currentHour = hours % 12;
  if (currentHour === 0) currentHour = 12;

  //Show the current hour's pool ball
  const currentPocket = document.getElementById(`pocket-${currentHour}`);
  const style = ballStyles[currentHour];

  if(style.solid) {
    // Solid ball design
    currentPocket.innerHTML = `
      <div class="pool-ball" style="background-color: ${style.background}; color: ${style.color};">
          <div class="white-circle">
<span style="color: black; font-weight: bold; font-size: 16px; font-family: Arial, Helvetica, sans-serif;">${style.number}</span>          </div>
      </div>
      `;
        } else {
      // Striped ball design
      currentPocket.innerHTML = `
          <div class="pool-ball" style="background-color: ${style.background}; color: ${style.color};">
              <div class="stripe"></div>
              <div class="white-circle">
<span style="color: black; font-weight: bold; font-size: 16px; font-family: Arial, Helvetica, sans-serif;">${style.number}</span>              </div>
          </div>
          `;
        }
      }
//Update every second
setInterval(updateClock, 1000);

// Initial update
updateClock();