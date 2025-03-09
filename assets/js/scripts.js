document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
            document.body.style.overflow = mobileMenu.style.display === 'block' ? 'hidden' : '';
        });
    }
    
    // Close mobile menu when clicking on mobile nav links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            mobileMenu.style.display = 'none';
            document.body.style.overflow = '';
        });
    });
    
    // Sticky Header
    const header = document.getElementById('header');
    const heroSection = document.getElementById('hero');
    
    if (header && heroSection) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Global Notification Close
    const closeNotification = document.getElementById('close-notification');
    const notificationBar = document.getElementById('notification-bar');
    
    if (closeNotification && notificationBar) {
        closeNotification.addEventListener('click', function() {
            notificationBar.style.display = 'none';
            
            // Add extra padding to header to compensate for removed notification
            document.querySelector('.site-header').style.top = '0';
        });
    }
    
    // Countdown Timer
    const countdownElement = document.getElementById('countdown');
    
    if (countdownElement) {
        // Set the target time (47 hours, 12 minutes, and 33 seconds from now)
        const now = new Date();
        const targetTime = new Date(now.getTime() + (47 * 60 * 60 * 1000) + (12 * 60 * 1000) + (33 * 1000));
        
        function updateCountdown() {
            const currentTime = new Date();
            const difference = targetTime - currentTime;
            
            if (difference <= 0) {
                countdownElement.innerHTML = '00:00:00';
                return;
            }
            
            const hours = Math.floor(difference / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        // Update the countdown every second
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    // Smooth Scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                return;
            }
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate header height for offset
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const notificationHeight = document.getElementById('notification-bar').offsetHeight;
                
                // Calculate total offset
                const totalOffset = headerHeight + (notificationBar.style.display === 'none' ? 0 : notificationHeight);
                
                window.scrollTo({
                    top: targetElement.offsetTop - totalOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            // Check if this item is already active
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // If this item wasn't active before, make it active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Application Form Submission
    const applicationForm = document.getElementById('application-form');
    const successMessage = document.getElementById('success-message');
    const closeSuccess = document.getElementById('close-success');
    
    if (applicationForm && successMessage && closeSuccess) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Display the success message
            successMessage.classList.add('active');
            
            // Reset form
            applicationForm.reset();
        });
        
        closeSuccess.addEventListener('click', function() {
            successMessage.classList.remove('active');
        });
    }
    
    // Reveal animations on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .case-study-card, .framework-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight * 0.8) {
                element.style.animationPlayState = 'running';
            }
        });
    };
    
    // Run animation check on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Psychological Engagement Hooks
    
    // 1. Urgency Trigger - Flash the CTA button occasionally to create urgency
    const ctaButtons = document.querySelectorAll('.btn-gradient');
    
    function flashCTA() {
        ctaButtons.forEach(button => {
            button.classList.add('flash-animation');
            
            setTimeout(() => {
                button.classList.remove('flash-animation');
            }, 1000);
        });
    }
    
    // Flash the CTA every 20-30 seconds
    function scheduleFlash() {
        const randomDelay = Math.floor(Math.random() * (30000 - 20000 + 1)) + 20000;
        setTimeout(() => {
            flashCTA();
            scheduleFlash();
        }, randomDelay);
    }
    
    scheduleFlash();
    
    // 2. FOMO Trigger - Show limited spots occasionally
    function showLimitedSpots() {
        const limitedSpotsIndicator = document.createElement('div');
        limitedSpotsIndicator.className = 'limited-spots-indicator';
        limitedSpotsIndicator.innerHTML = `<p><strong>2 applicants</strong> just submitted their application. <strong>Only 7 spots remaining</strong> today.</p>`;
        
        document.body.appendChild(limitedSpotsIndicator);
        
        setTimeout(() => {
            limitedSpotsIndicator.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            limitedSpotsIndicator.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(limitedSpotsIndicator);
            }, 500);
        }, 5000);
    }
    
    // Show limited spots notification after 40-60 seconds, then every 90-120 seconds
    setTimeout(() => {
        showLimitedSpots();
        
        setInterval(() => {
            showLimitedSpots();
        }, Math.floor(Math.random() * (120000 - 90000 + 1)) + 90000);
    }, Math.floor(Math.random() * (60000 - 40000 + 1)) + 40000);
    
    // 3. Exit Intent Detection
    let exitIntentShown = false;
    
    document.addEventListener('mouseleave', function(e) {
        // Only trigger when the cursor leaves from the top of the page
        if (e.clientY < 5 && !exitIntentShown) {
            // Show exit intent modal or notification
            if (successMessage) {
                // Only show if they haven't already submitted the form
                if (!successMessage.classList.contains('active')) {
                    const exitIntent = document.createElement('div');
                    exitIntent.className = 'exit-intent';
                    exitIntent.innerHTML = `
                        <div class="exit-intent-content">
                            <button class="exit-intent-close">&times;</button>
                            <h3>Wait! You're Missing The Key Insight</h3>
                            <p>The top 1% of social media creators know something the other 99% don't. Before you go, grab our free cheat sheet:</p>
                            <div class="exit-form">
                                <input type="email" placeholder="Your email address">
                                <button class="btn btn-gradient">Get Instant Access</button>
                            </div>
                        </div>
                    `;
                    
                    document.body.appendChild(exitIntent);
                    
                    // Add event listener to close button
                    exitIntent.querySelector('.exit-intent-close').addEventListener('click', function() {
                        document.body.removeChild(exitIntent);
                    });
                    
                    // Add event listener to form submission
                    exitIntent.querySelector('.exit-form button').addEventListener('click', function() {
                        const emailInput = exitIntent.querySelector('input[type="email"]');
                        if (emailInput.value.trim() !== '') {
                            document.body.removeChild(exitIntent);
                            // Here you would send the email to your backend
                        }
                    });
                    
                    exitIntentShown = true;
                }
            }
        }
    });
    
    // 4. Psychological Priming with Statistics
    function updateStatistics() {
        const statValues = document.querySelectorAll('.stat-value');
        
        // Only update some of the statistics sometimes to create organic feel
        statValues.forEach(stat => {
            // 30% chance to update any given stat
            if (Math.random() < 0.3) {
                const currentValue = parseInt(stat.textContent);
                
                // Get the type of stat from the next element (the label)
                const statType = stat.nextElementSibling.textContent.toLowerCase();
                
                // Different fluctuation ranges based on stat type
                let newValue;
                
                if (statType.includes('engagement')) {
                    // Engagement fluctuates between 565% and 582%
                    newValue = Math.floor(Math.random() * (582 - 565 + 1)) + 565;
                    stat.textContent = newValue + '%';
                } else if (statType.includes('creator')) {
                    // Creators analyzed fluctuates slightly
                    newValue = Math.floor(Math.random() * (15250 - 15000 + 1)) + 15000;
                    stat.textContent = newValue.toLocaleString() + '+';
                } else if (statType.includes('success')) {
                    // Success rate fluctuates between 97.6% and 98.1%
                    newValue = (Math.random() * (98.1 - 97.6) + 97.6).toFixed(1);
                    stat.textContent = newValue + '%';
                }
            }
        });
    }
    
    // Update statistics every 30-60 seconds
    setInterval(updateStatistics, Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000);
    
    // Add CSS for the new elements
    const style = document.createElement('style');
    style.textContent = `
        @keyframes flash {
            0% { transform: scale(1); box-shadow: 0 0 0 rgba(84, 104, 255, 0); }
            50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(84, 104, 255, 0.5); }
            100% { transform: scale(1); box-shadow: 0 0 0 rgba(84, 104, 255, 0); }
        }
        
        .flash-animation {
            animation: flash 1s ease-in-out;
        }
        
        .limited-spots-indicator {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            border-left: 4px solid #5468ff;
            padding: 15px 20px;
            border-radius: 4px;
            z-index: 1000;
            font-size: 14px;
            transform: translateX(120%);
            transition: transform 0.3s ease;
            max-width: 300px;
        }
        
        .limited-spots-indicator.show {
            transform: translateX(0);
        }
        
        .limited-spots-indicator strong {
            color: #5468ff;
        }
        
        .exit-intent {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(15, 23, 42, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
        }
        
        .exit-intent-content {
            background-color: #fff;
            border-radius: 8px;
            padding: 30px;
            max-width: 500px;
            width: 90%;
            position: relative;
        }
        
        .exit-intent-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #64748b;
        }
        
        .exit-form {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }
        
        .exit-form input {
            flex: 1;
            padding: 12px;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            font-size: 16px;
        }
    `;
    
    document.head.appendChild(style);
});

/**
 * Advanced Psychological Hook: Behavior Tracking
 * 
 * This module tracks micro-behaviors that indicate heightened interest
 * and adjusts the page's persuasion elements in response.
 * 
 * Research shows that users who hover on key elements, re-read sections,
 * or scroll in specific patterns are significantly more likely to convert.
 * This system identifies these behaviors and dynamically intensifies
 * conversion elements.
 */
(function() {
    // Engagement tracking variables
    let hoverTime = {};
    let scrollDepth = 0;
    let maxScrollDepth = 0;
    let rereadSections = {};
    let interestScore = 0;
    
    // Track hover time on key elements
    document.querySelectorAll('.feature-card, .case-study-card, .pricing-card, .research-content').forEach(element => {
        let timer;
        let totalHoverTime = 0;
        
        element.addEventListener('mouseenter', () => {
            const startTime = Date.now();
            timer = setInterval(() => {
                totalHoverTime = Date.now() - startTime;
                
                if (totalHoverTime > 3000) { // 3 seconds of sustained interest
                    incrementInterestScore(1);
                    hoverTime[element.className] = (hoverTime[element.className] || 0) + 1;
                }
            }, 1000);
        });
        
        element.addEventListener('mouseleave', () => {
            clearInterval(timer);
        });
    });
    
    // Track scroll depth and re-reading behavior
    window.addEventListener('scroll', () => {
        // Calculate scroll depth as percentage
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScrollDepth = (scrollTop / docHeight) * 100;
        
        // Update max scroll depth
        if (currentScrollDepth > maxScrollDepth) {
            maxScrollDepth = currentScrollDepth;
        }
        
        // Check for re-reading (scrolling up significantly)
        if (scrollDepth - currentScrollDepth > 10) { // Scrolled up by 10%
            const visibleSections = getVisibleSections();
            visibleSections.forEach(section => {
                rereadSections[section] = (rereadSections[section] || 0) + 1;
                incrementInterestScore(2); // Re-reading is a strong interest signal
            });
        }
        
        scrollDepth = currentScrollDepth;
    });
    
    // Get currently visible sections
    function getVisibleSections() {
        const sections = document.querySelectorAll('section');
        const visibleSections = [];
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                visibleSections.push(section.id);
            }
        });
        
        return visibleSections;
    }
    
    // Increment interest score
    function incrementInterestScore(amount) {
        interestScore += amount;
        
        // Apply psychological principles based on interest level
        if (interestScore > 10) {
            intensifyConversionElements(1); // First level of intensification
        }
        
        if (interestScore > 25) {
            intensifyConversionElements(2); // Second level
        }
        
        if (interestScore > 50) {
            intensifyConversionElements(3); // Maximum intensity
        }
    }
    
    // Dynamically intensify conversion elements based on interest level
    function intensifyConversionElements(level) {
        // Get all primary CTAs
        const ctaButtons = document.querySelectorAll('.btn-gradient');
        
        if (level >= 1) {
            // Subtle enhancement
            ctaButtons.forEach(button => {
                button.style.transform = 'scale(1.05)';
                button.style.boxShadow = '0 10px 25px rgba(84, 104, 255, 0.3)';
            });
        }
        
        if (level >= 2) {
            // Add light pulsing effect
            ctaButtons.forEach(button => {
                button.style.animation = 'pulse 2s infinite';
            });
            
            // Increase testimonial visibility
            document.querySelectorAll('.case-study-card').forEach(card => {
                card.style.borderColor = '#5468ff';
                card.style.boxShadow = '0 10px 25px rgba(84, 104, 255, 0.15)';
            });
        }
        
        if (level >= 3) {
            // Strongest conversion signals
            ctaButtons.forEach(button => {
                button.innerHTML = 'Apply Now <span style="margin-left:5px;">(Limited)</span>';
                button.style.animation = 'pulse 1.5s infinite';
            });
            
            // Create scarcity indicator
            if (!document.querySelector('.high-interest-indicator')) {
                const indicator = document.createElement('div');
                indicator.className = 'high-interest-indicator';
                indicator.innerHTML = `<p><strong>High demand alert:</strong> Applications closing soon. <span id="remaining-spots">Only 5 spots left today</span>.</p>`;
                indicator.style.position = 'fixed';
                indicator.style.bottom = '20px';
                indicator.style.left = '20px';
                indicator.style.backgroundColor = '#fff';
                indicator.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                indicator.style.borderLeft = '4px solid #5468ff';
                indicator.style.padding = '15px 20px';
                indicator.style.borderRadius = '4px';
                indicator.style.zIndex = '1000';
                indicator.style.fontSize = '14px';
                indicator.style.maxWidth = '300px';
                
                document.body.appendChild(indicator);
                
                // Create countdown for remaining spots
                let spotsLeft = 5;
                const spotsElement = document.getElementById('remaining-spots');
                
                setInterval(() => {
                    if (Math.random() < 0.3 && spotsLeft > 1) { // 30% chance to decrease spots
                        spotsLeft--;
                        spotsElement.textContent = `Only ${spotsLeft} spot${spotsLeft === 1 ? '' : 's'} left today`;
                    }
                }, 30000); // Check every 30 seconds
            }
        }
    }
})();
