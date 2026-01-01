// Portfolio Chatbot - Sushant Rana
// FAQ-based chatbot with contact page fallback

(function () {
    'use strict';

    // Knowledge base for the chatbot
    const knowledgeBase = {
        greetings: [
            "Hi! I'm Sushant's AI assistant. How can I help you today?",
            "Hello! 👋 I can answer questions about Sushant's skills, experience, and availability. What would you like to know?"
        ],

        responses: {
            // Skills
            'skills': "Sushant specializes in:\n\n☁️ **Salesforce**: Admin, Apex, LWC, Flows, Security Model, REST API\n\n🤖 **AI & Automation**: LLM Integration, Python, Computer Vision, NLP\n\n🛠️ **Development**: FastAPI, React, Flutter, System Design\n\nWant to know more about a specific area?",
            'salesforce': "Sushant is a **Salesforce Certified Agentforce Specialist** with hands-on experience in:\n\n• Apex Development & Triggers\n• Lightning Web Components (LWC)\n• Flows & Process Automation\n• Security Model & Sharing Rules\n• REST/SOAP API Integrations\n\nHe was mentored by a Salesforce Architect with 12+ years of industry experience.",
            'ai': "Sushant combines AI with business solutions:\n\n• AI Agent Development\n• LLM Integration & Prompting\n• Computer Vision (OpenCV, MediaPipe)\n• Natural Language Processing\n• Intelligent Automation Workflows\n\nHe uses AI to solve real business problems, not just for tech demos.",

            // Experience
            'experience': "Sushant has real-world experience:\n\n💼 **Junior Software Engineer (Intern)**\n• Worked on production CRM workflows\n• Built automation flows\n• API integrations\n\n👨‍🏫 **Salesforce Architecture Mentorship**\n• Remote training under 12+ years industry expert\n• Real project guidance with international client exposure",
            'internship': "During his internship as a Junior Software Engineer, Sushant:\n\n• Worked on production-level enterprise systems\n• Built automation flows for CRM workflows\n• Integrated third-party APIs\n• Collaborated on system design documentation",

            // Availability
            'available': "Yes! Sushant is actively seeking opportunities.\n\n✅ Open to: Salesforce Developer / Admin / Consultant roles\n📍 Preference: WFH or Hybrid\n💰 Target: ₹8-12 LPA range\n\nReady to start immediately!",
            'hire': "Great question! Here's why you should hire Sushant:\n\n✅ **Business-First Thinking** - Understands requirements before coding\n✅ **Real Mentorship** - Trained by a 12+ year Salesforce Architect\n✅ **Salesforce + AI Hybrid** - Unique skill combination\n✅ **Remote-Ready** - Comfortable with WFH/async work\n\n<a href='contact.html'>📩 Get in touch</a>",

            // Contact
            'contact': "You can reach Sushant at:\n\n📧 **Email**: sushantrana2005@gmail.com\n💼 **LinkedIn**: <a href='https://linkedin.com/in/sushantrana05' target='_blank'>linkedin.com/in/sushantrana05</a>\n🐙 **GitHub**: <a href='https://github.com/imSushant2005' target='_blank'>github.com/imSushant2005</a>\n\nOr use the <a href='contact.html'>contact form</a>!",
            'email': "Sushant's email is: **sushantrana2005@gmail.com**\n\nOr you can use the <a href='contact.html'>contact form</a> to send a message directly!",

            // Projects
            'projects': "Sushant has built several business-focused solutions:\n\n🌐 **Langua Link** - Real-time translation platform\n🤖 **AI Support Chatbot** - Customer query automation\n🏥 **Medical Diagnosis Assistant** - ML-powered diagnosis\n👊 **FightCam AI** - Security monitoring system\n\n<a href='projects.html'>View all projects →</a>",

            // Certification
            'certification': "Sushant holds the **Salesforce Certified Agentforce Specialist** certification.\n\nThis official Salesforce credential validates expertise in AI-powered CRM solutions.",

            // Resume
            'resume': "You can view or download Sushant's resume:\n\n📄 <a href='resume.html'>View Resume Page</a>\n⬇️ <a href='assets/Sushant_Rana.pdf' download>Download PDF</a>",

            // Location
            'location': "Sushant is based in **Uttarakhand, India**.\n\nHe's open to:\n• Remote (WFH) positions\n• Hybrid roles\n• Relocation for the right opportunity",

            // Visitors
            'visitors': "<img src='https://visitor-badge.laobi.icu/badge?page_id=imsushant2005.imsushant' alt='Visitors' style='height: 24px; vertical-align: middle;'> people have visited this portfolio!\n\nThanks for stopping by! 🎉"
        },

        // Keywords to match
        keywords: {
            'skills': ['skill', 'skills', 'tech', 'technology', 'stack', 'know', 'expertise', 'good at', 'specialize'],
            'salesforce': ['salesforce', 'apex', 'lwc', 'lightning', 'flow', 'crm', 'admin', 'sf'],
            'ai': ['ai', 'artificial', 'intelligence', 'machine learning', 'ml', 'llm', 'automation', 'python'],
            'experience': ['experience', 'work', 'worked', 'background', 'history', 'career'],
            'internship': ['intern', 'internship', 'job', 'employment'],
            'available': ['available', 'availability', 'looking', 'seeking', 'open', 'job', 'position', 'opportunity'],
            'hire': ['hire', 'why', 'reason', 'choose', 'should'],
            'contact': ['contact', 'reach', 'connect', 'talk', 'message', 'touch'],
            'email': ['email', 'mail', 'e-mail'],
            'projects': ['project', 'projects', 'work', 'portfolio', 'built', 'made', 'created'],
            'certification': ['certification', 'certified', 'certificate', 'credential', 'agentforce'],
            'resume': ['resume', 'cv', 'download', 'pdf'],
            'location': ['location', 'where', 'based', 'live', 'city', 'country', 'remote', 'wfh'],
            'visitors': ['visitor', 'visitors', 'visited', 'views', 'how many', 'count', 'traffic']
        },

        fallback: "I'm not sure about that specific question. For detailed discussions, please <a href='contact.html'>contact Sushant directly</a> — he'd love to hear from you! 📩"
    };

    // Quick reply suggestions
    const quickReplies = [
        "What are your skills?",
        "Salesforce experience?",
        "Are you available?",
        "View projects",
        "Contact info"
    ];

    // Create chatbot HTML
    function createChatbotHTML() {
        const container = document.createElement('div');
        container.className = 'chatbot-container';
        container.innerHTML = `
            <div class="chatbot-window" id="chatbotWindow">
                <div class="chatbot-header">
                    <div class="chatbot-avatar">SR</div>
                    <div class="chatbot-info">
                        <h4>Sushant's Assistant</h4>
                        <span>● Online</span>
                    </div>
                </div>
                <div class="chatbot-messages" id="chatMessages">
                    <!-- Messages will appear here -->
                </div>
                <div class="quick-replies" id="quickReplies">
                    ${quickReplies.map(q => `<button class="quick-reply">${q}</button>`).join('')}
                </div>
                <div class="chatbot-input">
                    <input type="text" id="chatInput" placeholder="Ask me anything..." autocomplete="off">
                    <button id="chatSend">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
            <button class="chatbot-toggle" id="chatbotToggle">
                <svg id="chatIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <svg id="closeIcon" style="display:none;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        `;
        document.body.appendChild(container);
    }

    // Match user input to knowledge base
    function getResponse(input) {
        const lowerInput = input.toLowerCase();

        // Check for greeting
        if (/^(hi|hello|hey|hii|hola|namaste)/i.test(lowerInput)) {
            return knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)];
        }

        // Check for thanks
        if (/thank|thanks|thx/i.test(lowerInput)) {
            return "You're welcome! 😊 Feel free to ask anything else, or <a href='contact.html'>contact Sushant</a> for more details.";
        }

        // Check for bye
        if (/bye|goodbye|see you|later/i.test(lowerInput)) {
            return "Goodbye! Feel free to come back anytime. Don't forget to <a href='contact.html'>get in touch</a> if you're interested! 👋";
        }

        // Match keywords
        for (const [key, keywords] of Object.entries(knowledgeBase.keywords)) {
            for (const keyword of keywords) {
                if (lowerInput.includes(keyword)) {
                    return knowledgeBase.responses[key];
                }
            }
        }

        // Fallback
        return knowledgeBase.fallback;
    }

    // Add message to chat
    function addMessage(text, isUser = false) {
        const messagesContainer = document.getElementById('chatMessages');
        const message = document.createElement('div');
        message.className = `chat-message ${isUser ? 'user' : 'bot'}`;
        message.innerHTML = text.replace(/\n/g, '<br>');
        messagesContainer.appendChild(message);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Show typing indicator
    function showTyping() {
        const messagesContainer = document.getElementById('chatMessages');
        const typing = document.createElement('div');
        typing.className = 'typing-indicator';
        typing.id = 'typingIndicator';
        typing.innerHTML = '<span></span><span></span><span></span>';
        messagesContainer.appendChild(typing);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Hide typing indicator
    function hideTyping() {
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    }

    // Handle user input
    function handleUserInput(input) {
        if (!input.trim()) return;

        addMessage(input, true);
        showTyping();

        // Simulate typing delay
        setTimeout(() => {
            hideTyping();
            const response = getResponse(input);
            addMessage(response);
        }, 500 + Math.random() * 500);
    }

    // Initialize chatbot
    function initChatbot() {
        createChatbotHTML();

        const toggle = document.getElementById('chatbotToggle');
        const window = document.getElementById('chatbotWindow');
        const input = document.getElementById('chatInput');
        const sendBtn = document.getElementById('chatSend');
        const chatIcon = document.getElementById('chatIcon');
        const closeIcon = document.getElementById('closeIcon');
        const quickReplyBtns = document.querySelectorAll('.quick-reply');

        // Toggle chat window
        toggle.addEventListener('click', () => {
            const isActive = window.classList.toggle('active');
            toggle.classList.toggle('active', isActive);
            chatIcon.style.display = isActive ? 'none' : 'block';
            closeIcon.style.display = isActive ? 'block' : 'none';

            // Show greeting on first open
            if (isActive && document.getElementById('chatMessages').children.length === 0) {
                setTimeout(() => {
                    addMessage(knowledgeBase.greetings[0]);
                }, 300);
            }

            if (isActive) input.focus();
        });

        // Send message on button click
        sendBtn.addEventListener('click', () => {
            handleUserInput(input.value);
            input.value = '';
        });

        // Send message on Enter
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleUserInput(input.value);
                input.value = '';
            }
        });

        // Quick replies
        quickReplyBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                handleUserInput(btn.textContent);
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }
})();
