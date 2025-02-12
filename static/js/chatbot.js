document.getElementById('chatCtrl').addEventListener('click', () => {
    const chatBtn = document.getElementById('chatCtrl');
    const chatContainer = document.getElementById('chatContainer');
    
    chatBtn.classList.add('hidden');
    chatContainer.classList.add('active');
});

document.getElementById('closeChat').addEventListener('click', () => {
    const chatBtn = document.getElementById('chatCtrl');
    const chatContainer = document.getElementById('chatContainer');
    
    chatContainer.classList.remove('active');
    setTimeout(() => {
        chatBtn.classList.remove('hidden');
    }, 200); // Wait for container animation to finish
});

// Create ResizeObserver to handle chat container resizing
const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
        const chatBox = entry.target.querySelector('.chat-box');
        if (chatBox) {
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }
});

// Start observing the chat container
const chatContainer = document.getElementById('chatContainer');
resizeObserver.observe(chatContainer);

const botAvatar = "/static/imgs/chatbot/bot.png"; 
const userAvatar = "/static/imgs/chatbot/user.png";

function sendMessage() {
    const inputField = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const userText = inputField.value.trim();
    if (userText === "") return;

    const user_msg_cont = document.createElement("div");
    user_msg_cont.classList.add("message-container");

    const userPfp = document.createElement("img");
    userPfp.src = userAvatar;
    userPfp.classList.add("pfp");

    const user_msg = document.createElement("div");
    user_msg.classList.add("message", "user-message");
    user_msg.textContent = userText;

    user_msg_cont.appendChild(user_msg);
    user_msg_cont.appendChild(userPfp);
    chatBox.appendChild(user_msg_cont);


    const bot_msg = getbot_msg(userText);
    const bot_msg_cont = document.createElement("div");
    bot_msg_cont.classList.add("message-container");

    const botPfp = document.createElement("img");
    botPfp.src = botAvatar;
    botPfp.classList.add("pfp");

    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");
    botMessage.innerHTML = bot_msg;

    bot_msg_cont.appendChild(botPfp);
    bot_msg_cont.appendChild(botMessage);
    chatBox.appendChild(bot_msg_cont);

    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function enterSend(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function getbot_msg(input) {
    const responses = [
    
        { pattern: /\bhello\b/i, response: "Hi there! How can I help you?" },
        { pattern: /\bhi\b/i, response: "Hi there! How can I help you?" },
        { pattern: /\bhey\b/i, response: "Hi there! How can I help you?" },
        { pattern: /\bhow are you\b/i, response: "I'm just a bot, but I'm doing great!" },
        { pattern: /\bwho are you\b/i, response: "I'm a simple chatbot!" },
        { pattern: /\bsup|whatsup\b/i, response: "Sup! What you gonna ask me today to free up your mind???" },
        { pattern: /\bwhat's up\b/i, response: "sup buddy! You seem to have some problems, hmmm" },
        { pattern: /\bgood morning\b/i, response: "Good morning! How can I assist you?" },
        { pattern: /\bgood afternoon\b/i, response: "Good afternoon! How can I assist you?" },
        { pattern: /\bgood evening\b/i, response: "Good evening! How can I assist you?" },
        { pattern: /\bgood night\b/i, response: "Good night! Have a great sleep!" },
        { pattern: /\bthank(s)?\b/i, response: "You're welcome! Feel free to ask me anything!" },
        { pattern: /\bbye\b/i, response: "Goodbye! Have a great day!" },
        { pattern: /\b(see ya|cya|see you)\b/i, response: "See ya later! Take care!" },
        { pattern: /\b(help|assistance|support|problem)\b/i, response: "I'm here to help! What do you need assistance with?" },


        { pattern: /\byour name\b/i, response: "I'm blummy!" },
        { pattern: /\b(what is hacklumina|what is hacklumina'25|whats hacklumina|whats hacklumina'25)\b/i, 
          response: "HackLumina'25 is a cool 36-hour in-person hackathon that brings students of all levels together for coding, learning, and collaboration in Delhi/NCR in May 2025. Registration is free!" },
        { pattern: /\b(when is hacklumina|whens hacklumina|whats is hacklumina'25|whens hacklumina'25)\b/i, response: "HackLumina is scheduled for May 2025 (Exact date: TBD)." },
        { pattern: /\b(where is hacklumina|venue|wheres hacklumina|wheres hacklumina'25)\b/i, response: "HackLumina will be held in Delhi/NCR (Venue: TBD)." },
        { pattern: /\b(event details|what are the details of the event)\b/i, 
          response: "HackLumina'25 features in-person workshops, mentorship sessions, networking opportunities, and exciting rewards like certificates and prizes—all designed to inspire and educate. Plus, it's completely free to register!" },
        { pattern: /\btheme\b/i, 
          response: "The theme of HackLumina is Solarpunk, embracing a futuristic, eco-friendly aesthetic that celebrates sustainable technology." },
        { pattern: /\bhighlights\b/i, 
          response: "Highlights include workshops &amp; mentorship from industry experts, ample networking opportunities, and exciting rewards for innovative projects." },

  
        { pattern: /\bcontact\b/i, 
          response: `<div class="modal-container">
                      <span class="modal-trigger" style="cursor: pointer; text-decoration: underline; color: #0077cc;">
                        Contact Our Team
                      </span>
                      <div class="modal-overlay">
                        <div class="modal-content">
                          <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
                            <thead>
                              <tr>
                                <th>Name</th>
                    
                                <th>Email</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Angad</td>
                             
                                <td><a href="mailto:angad@hacklumina.tech">angad@hacklumina.tech</a></td>
                              </tr>
                              <tr>
                                <td>Shrey</td>
                                
                                <td><a href="mailto:shrey@hacklumina.tech">shrey@hacklumina.tech</a></td>
                              </tr>
                              <tr>
                                <td>Kavish</td>
                            
                                <td><a href="mailto:kavish@hacklumina.tech">kavish@hacklumina.tech</a></td>
                              </tr>
                              <tr>
                                <td>Manan</td>
                           
                                <td><a href="mailto:manan@hacklumina.tech">manan@hacklumina.tech</a></td>
                              </tr>
                              <tr>
                                <td style="width:100px;">Org</td>
                                <td style="width:400px;"><a href="mailto:contact@hacklumina.tech">contact@hacklumina.tech</a></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>` },
                    

        { pattern: /\bschedule|run of show\b/i, 
          response: `<div class="modal-container">
                      <span class="modal-trigger" style="cursor: pointer; text-decoration: underline; color: #0077cc;">
                        Run of Show
                      </span>
                      <div class="modal-overlay">
                        <div class="modal-content">
                          <h3>Day 1</h3>
                          <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
                            <thead>
                              <tr>
                                <th style="width:100px;">Time</th>
                                <th>Event</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td>8:00 AM</td><td>Doors Open</td></tr>
                              <tr><td>8:15 AM</td><td>Opening Ceremony</td></tr>
                              <tr><td>8:30 AM</td><td>Introductions &amp; Team Formation</td></tr>
                              <tr><td>9:00 AM</td><td>Breakfast</td></tr>
                              <tr><td>10:00 AM</td><td>Workshops Begin</td></tr>
                              <tr><td>2:00 PM</td><td>Lunch</td></tr>
                              <tr><td>3:30 PM</td><td>Project Work Continues</td></tr>
                              <tr><td>6:00 PM</td><td>Snacks</td></tr>
                              <tr><td>8:00 PM</td><td>Dinner</td></tr>
                              <tr><td>10:00 PM</td><td>Game Night</td></tr>
                              <tr><td>11:30 PM</td><td>Game Night Ends / Optional Sleep</td></tr>
                            </tbody>
                          </table>
                          <h3>Day 2</h3>
                          <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
                            <thead>
                              <tr>
                                <th style="width:100px;">Time</th>
                                <th>Event</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td>8:00 AM</td><td>Convene</td></tr>
                              <tr><td>9:00 AM</td><td>Breakfast</td></tr>
                              <tr><td>4:30 PM</td><td>Finalize Projects</td></tr>
                              <tr><td>5:00 PM</td><td>Submissions Open</td></tr>
                              <tr><td>5:30 PM</td><td>Judges Review</td></tr>
                              <tr><td>6:30 PM</td><td>Announcements</td></tr>
                              <tr><td>7:00 PM</td><td>Prize Distribution</td></tr>
                              <tr><td>7:30 PM</td><td>Closing Ceremony</td></tr>
                              <tr><td>8:00 PM</td><td>Event Wrap-Up</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>` },
        { pattern: /\bsponsors\b/i, response: "Our featured sponsor is Saral Technologies. (More sponsors will be announced soon!)" },
        { 
            pattern: /\bsponsor\b/i, 
            response: "Our featured sponsor is Saral Technologies. (More sponsors will be announced soon!). Interested in sponsoring HackLumina? Check out our <a href='/prospectus/HackLumina%20Prospectus.pdf'>prospectus</a> here:" 
          },          
        { pattern: /\bsponsor you\b/i, response: "Interested in sponsoring HackLumina? Check out our prospectus here: <a href='/prospectus/HackLumina Prospectus.pdf'>HackLumina Prospectus</a>" },
        { pattern: /\bsponsor hacklumina\b/i, response: "Interested in sponsoring HackLumina? Check out our prospectus here: <a href='prospectus/HackLumina%20Prospectus.pdf'>HackLumina Prospectus</a>" },
        { pattern: /\bsponsor hackathon\b/i, response: "Interested in sponsoring HackLumina? Check out our prospectus here: <a href='prospectus/HackLumina%20Prospectus.pdf'>HackLumina Prospectus</a>" },
        { pattern: /\bsponsor us\b/i, response: "Interested in sponsoring HackLumina? Check out our prospectus here: <a href='prospectus/HackLumina%20Prospectus.pdf'>HackLumina Prospectus</a>" },
        { pattern: /\bfeatures\b/i, response: "The website includes interactive features like a message form, background audio controls, parallax scrolling, and social media links (Twitter, Instagram, and LinkedIn)." }
    ];


    input = input.toLowerCase();
    for (const entry of responses) {
        if (entry.pattern.test(input)) {
            return entry.response;
        }
    }
    return "I'm not sure how to respond to that. If you think you have an important query and didn't misslepelled it, please fill the form at the bottom and we will get back to you as soon as possible.";
}
