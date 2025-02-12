const audioCtrl = document.getElementById('audioCtrl');
const audioImg = document.getElementById('audioImg');
const bgAudio = document.getElementById('bgAudio');

const audioOnImg = "assets/music.png";
const audioOffImg = "https://static.thenounproject.com/png/1680900-200.png";

audioImg.src = audioOffImg;

audioCtrl.addEventListener('click', () => {
  if (bgAudio.paused) {
    bgAudio.play();
    audioImg.src = audioOnImg;
  } else {
    bgAudio.pause();
    audioImg.src = audioOffImg;
  }
});

const subBtn = document.getElementById('subBtn');

subBtn.addEventListener('click', async () => {
  location.reload();
  const nameIn = document.getElementById('nameIn').value;
  const email = document.getElementById('emailIn').value;
  const msg = document.getElementById('msgIn').value;
  if (!nameIn || !email || !msg) {
    alert("Please fill out all fields!");
    return;
  }
  const data = {
    name: nameIn,
    email: email,
    msg: msg,
  };
  try {
    const response = await fetch('https://admin.hacklumina.tech/contact-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(data);
    if (response.ok) {
      const result = await response.json();
      alert(result.message);
    } else {
      alert('Failed to submit the form.');
    }} catch (error) {alert('Failed to submit the form.');} 
  });

