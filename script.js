document.addEventListener('DOMContentLoaded', function() {
    
    // --- MULTI-LANGUAGE SCRIPT ---

    const translations = {
        en: {
            navHome: "Home",
            navProducts: "Products",
            navServices: "Services",
            navContact: "Contact",
            heroTitle: "Your Trusted Partner for Batteries & Inverters in Solapur",
            heroTagline: "Quality Sales & Service for All Your Power Needs",
            viewProductsBtn: "View Products",
            callNowBtn: "Call Now",
            whyChooseUsTitle: "Why Choose Elect Tech System?",
            feature1Title: "Wide Range of Products",
            feature1Desc: "From two-wheelers to heavy-duty inverters, we have a solution for every need.",
            feature2Title: "Competitive Pricing",
            feature2Desc: "Get the best quality products at reasonable and fair prices.",
            feature3Title: "Expert Services",
            feature3Desc: "Professional installation, maintenance, and testing for optimal performance.",
            feature4Title: "Trusted Local Business",
            feature4Desc: "Proudly serving the Solapur community with reliability and dedication.",
            productsTitle: "Our Products",
            invertersTubularTitle: "Inverters & Tubular Batteries",
            automotiveBatteriesTitle: "Automotive Batteries (Car, Truck, Tractor)",
            twoWheelerBatteriesTitle: "Two-Wheeler & Small Batteries",
            servicesTitle: "Our Services",
            service1Title: "Manufacturing Unit",
            service1Desc: "We manufacture high-quality batteries and inverters for various applications.",
            service2Title: "Testing & Commissioning",
            service2Desc: "Professional testing of all electrical and electronics components.",
            service3Title: "Maintenance & Repair",
            service3Desc: "Reliable maintenance and repair services to keep your systems running smoothly.",
            contactTitle: "Contact Us",
            contactProprietor: "Proprietor: Shiva Mukkane",
            contactAddress: "Plot No. 6,140, Revanasiddeswar Nagar, Hotagi Road, Solapur, Pin 413224",
            ctaTitle: "Ready to Power Up?",
            ctaText: "Contact us for expert advice and the best deals in Solapur.",
            ctaButton: "Call Now: 9595793928",
            footerPromo: 'To create your own webpage, contact us today <br>📱 <a href="tel:+919623430369">+91 9623430369</a>',
            businessRegTitle: "Our Business Registration"
        },
        mr: {
            navHome: "मुख्यपृष्ठ",
            navProducts: "उत्पादने",
            navServices: "सेवा",
            navContact: "संपर्क",
            heroTitle: "सोलापूरमधील बॅटरी आणि इन्व्हर्टरसाठी तुमचे विश्वसनीय भागीदार",
            heroTagline: "तुमच्या सर्व उर्जेच्या गरजांसाठी दर्जेदार विक्री आणि सेवा",
            viewProductsBtn: "उत्पादने पहा",
            callNowBtn: "आता कॉल करा",
            whyChooseUsTitle: "इलेक्ट टेक सिस्टम का निवडावे?",
            feature1Title: "उत्पादनांची विस्तृत श्रेणी",
            feature1Desc: "दुचाकीपासून ते हेवी-ड्यूटी इन्व्हर्टरपर्यंत, आमच्याकडे प्रत्येक गरजेसाठी उपाय आहे.",
            feature2Title: "स्पर्धात्मक किंमत",
            feature2Desc: "वाजवी आणि योग्य दरात सर्वोत्तम दर्जाची उत्पादने मिळवा.",
            feature3Title: "तज्ञ सेवा",
            feature3Desc: "उत्तम कार्यप्रदर्शनासाठी व्यावसायिक स्थापना, देखभाल आणि चाचणी.",
            feature4Title: "विश्वासू स्थानिक व्यवसाय",
            feature4Desc: "विश्वसनीयता आणि समर्पणाने सोलापूर समुदायाची सेवा करताना अभिमान वाटतो.",
            productsTitle: "आमची उत्पादने",
            invertersTubularTitle: "इन्व्हर्टर आणि ट्यूबलर बॅटरी",
            automotiveBatteriesTitle: "ऑटोमोटिव्ह बॅटरी (कार, ट्रक, ट्रॅक्टर)",
            twoWheelerBatteriesTitle: "दुचाकी आणि लहान बॅटरी",
            servicesTitle: "आमच्या सेवा",
            service1Title: "उत्पादन युनिट",
            service1Desc: "आम्ही विविध अनुप्रयोगांसाठी उच्च-गुणवत्तेच्या बॅटरी आणि इन्व्हर्टर तयार करतो.",
            service2Title: "चाचणी आणि कमिशनिंग",
            service2Desc: "सर्व इलेक्ट्रिकल आणि इलेक्ट्रॉनिक्स घटकांची व्यावसायिक चाचणी.",
            service3Title: "देखभाल आणि दुरुस्ती",
            service3Desc: "तुमची सिस्टीम सुरळीत चालू ठेवण्यासाठी विश्वसनीय देखभाल आणि दुरुस्ती सेवा.",
            contactTitle: "आमच्याशी संपर्क साधा",
            contactProprietor: "मालक: शिवा मुक्काणे",
            contactAddress: "प्लॉट नं. ६,१४०, रेवणसिद्धेश्वर नगर, होटगी रोड, सोलापूर, पिन ४१३२२४",
            ctaTitle: "पॉवर अप करण्यास तयार आहात?",
            ctaText: "तज्ञ सल्ला आणि सोलापूरमधील सर्वोत्तम डील्ससाठी आमच्याशी संपर्क साधा.",
            ctaButton: "आता कॉल करा: 9595793928",
            footerPromo: 'तुमचे स्वतःचे वेबपेज तयार करण्यासाठी आजच संपर्क साधा <br>📱 <a href="tel:+919623430369">+91 9623430369</a>',
            businessRegTitle: "आमची व्यवसाय नोंदणी"
        },
        hi: {
            navHome: "होम",
            navProducts: "उत्पाद",
            navServices: "सेवाएं",
            navContact: "संपर्क",
            heroTitle: "सोलापुर में बैटरी और इन्वर्टर के लिए आपके विश्वसनीय भागीदार",
            heroTagline: "आपकी सभी बिजली की जरूरतों के लिए गुणवत्तापूर्ण बिक्री और सेवा",
            viewProductsBtn: "उत्पाद देखें",
            callNowBtn: "अभी कॉल करें",
            whyChooseUsTitle: "इलेक्ट टेक सिस्टम क्यों चुनें?",
            feature1Title: "उत्पादों की विस्तृत श्रृंखला",
            feature1Desc: "दोपहिया वाहनों से लेकर हेवी-ड्यूटी इनवर्टर तक, हमारे पास हर जरूरत का समाधान है।",
            feature2Title: "प्रतिस्पर्धी मूल्य निर्धारण",
            feature2Desc: "उचित और ন্যায্য कीमतों पर सर्वोत्तम गुणवत्ता वाले उत्पाद प्राप्त करें।",
            feature3Title: "विशेषज्ञ सेवाएं",
            feature3Desc: "इष्टतम प्रदर्शन के लिए पेशेवर स्थापना, रखरखाव और परीक्षण।",
            feature4Title: "विश्वसनीय स्थानीय व्यवसाय",
            feature4Desc: "गर्व से सोलापुर समुदाय की विश्वसनीयता और समर्पण के साथ सेवा कर रहे हैं।",
            productsTitle: "हमारे उत्पाद",
            invertersTubularTitle: "इन्वर्टर और ट्यूबलर बैटरी",
            automotiveBatteriesTitle: "ऑटोमोटिव बैटरी (कार, ट्रक, ट्रैक्टर)",
            twoWheelerBatteriesTitle: "दोपहिया और छोटी बैटरी",
            servicesTitle: "हमारी सेवाएँ",
            service1Title: "विनिर्माण इकाई",
            service1Desc: "हम विभिन्न अनुप्रयोगों के लिए उच्च गुणवत्ता वाली बैटरी और इनवर्टर का निर्माण करते हैं।",
            service2Title: "परीक्षण और कमीशनिंग",
            service2Desc: "सभी इलेक्ट्रिकल और इलेक्ट्रॉनिक्स घटकों का व्यावसायिक परीक्षण।",
            service3Title: "रखरखाव और मरम्मत",
            service3Desc: "आपके सिस्टम को सुचारू रूप से चलाने के लिए विश्वसनीय रखरखाव और मरम्मत सेवाएं।",
            contactTitle: "हमसे संपर्क करें",
            contactProprietor: "मालिक: शिवा मुक्काने",
            contactAddress: "प्लॉट नंबर ६,१४०, रेवणसिद्धेश्वर नगर, होटगी रोड, सोलापुर, पिन ४१३२२४",
            ctaTitle: "पावर अप करने के लिए तैयार हैं?",
            ctaText: "विशेषज्ञ सलाह और सोलापुर में सर्वोत्तम सौदों के लिए हमसे संपर्क करें।",
            ctaButton: "अभी कॉल करें: 9595793928",
            footerPromo: 'अपना खुद का वेबपेज बनाने के लिए आज ही संपर्क करें <br>📱 <a href="tel:+919623430369">+91 9623430369</a>',
            businessRegTitle: "हमारी व्यावसायिक पंजीकरण"
        },
        kn: {
            navHome: "ಮುಖಪುಟ",
            navProducts: "ಉತ್ಪನ್ನಗಳು",
            navServices: "ಸೇವೆಗಳು",
            navContact: "ಸಂಪರ್ಕ",
            heroTitle: "ಸೋಲಾಪುರದಲ್ಲಿ ಬ್ಯಾಟರಿಗಳು ಮತ್ತು ಇನ್ವರ್ಟರ್‌ಗಳಿಗಾಗಿ ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಪಾಲುದಾರರು",
            heroTagline: "ನಿಮ್ಮ ಎಲ್ಲಾ ವಿದ್ಯುತ್ ಅಗತ್ಯಗಳಿಗಾಗಿ ಗುಣಮಟ್ಟದ ಮಾರಾಟ ಮತ್ತು ಸೇವೆ",
            viewProductsBtn: "ಉತ್ಪನ್ನಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
            callNowBtn: "ಈಗ ಕರೆ ಮಾಡಿ",
            whyChooseUsTitle: "ಎಲೆಕ್ಟ್ ಟೆಕ್ ಸಿಸ್ಟಮ್ ಅನ್ನು ಏಕೆ ಆರಿಸಬೇಕು?",
            feature1Title: "ವ್ಯಾಪಕ ಶ್ರೇಣಿಯ ಉತ್ಪನ್ನಗಳು",
            feature1Desc: "ದ್ವಿಚಕ್ರ ವಾಹನಗಳಿಂದ ಹಿಡಿದು ಹೆವಿ-ಡ್ಯೂಟಿ ಇನ್ವರ್ಟರ್‌ಗಳವರೆಗೆ, ನಾವು ಪ್ರತಿಯೊಂದು ಅಗತ್ಯಕ್ಕೂ ಪರಿಹಾರವನ್ನು ಹೊಂದಿದ್ದೇವೆ.",
            feature2Title: "ಸ್ಪರ್ಧಾತ್ಮಕ ಬೆಲೆ",
            feature2Desc: "ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಉತ್ಪನ್ನಗಳನ್ನು ನ್ಯಾಯಯುತ ಮತ್ತು ಸಮಂಜಸವಾದ ಬೆಲೆಯಲ್ಲಿ ಪಡೆಯಿರಿ.",
            feature3Title: "ತಜ್ಞರ ಸೇವೆಗಳು",
            feature3Desc: "ಗರಿಷ್ಠ ಕಾರ್ಯಕ್ಷಮತೆಗಾಗಿ ವೃತ್ತಿಪರ ಅಳವಡಿಕೆ, ನಿರ್ವಹಣೆ ಮತ್ತು ಪರೀಕ್ಷೆ.",
            feature4Title: "ವಿಶ್ವಾಸಾರ್ಹ ಸ್ಥಳೀಯ ವ್ಯಾಪಾರ",
            feature4Desc: "ಸೋಲಾಪುರ ಸಮುದಾಯಕ್ಕೆ ವಿಶ್ವಾಸಾರ್ಹತೆ ಮತ್ತು ಸಮರ್ಪಣೆಯೊಂದಿಗೆ ಹೆಮ್ಮೆಯಿಂದ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದೇವೆ.",
            productsTitle: "ನಮ್ಮ ಉತ್ಪನ್ನಗಳು",
            invertersTubularTitle: "ಇನ್ವರ್ಟರ್‌ಗಳು ಮತ್ತು ಟ್ಯೂಬ್ಯುಲರ್ ಬ್ಯಾಟರಿಗಳು",
            automotiveBatteriesTitle: "ಆಟೋಮೋಟಿವ್ ಬ್ಯಾಟರಿಗಳು (ಕಾರು, ಟ್ರಕ್, ಟ್ರಾಕ್ಟರ್)",
            twoWheelerBatteriesTitle: "ದ್ವಿಚಕ್ರ ವಾಹನ ಮತ್ತು ಸಣ್ಣ ಬ್ಯಾಟರಿಗಳು",
            servicesTitle: "ನಮ್ಮ ಸೇವೆಗಳು",
            service1Title: "ತಯಾರಿಕಾ ಘಟಕ",
            service1Desc: "ನಾವು ವಿವಿಧ ಅನ್ವಯಿಕೆಗಳಿಗಾಗಿ ಉತ್ತಮ-ಗುಣಮಟ್ಟದ ಬ್ಯಾಟರಿಗಳು ಮತ್ತು ಇನ್ವರ್ಟರ್‌ಗಳನ್ನು ತಯಾರಿಸುತ್ತೇವೆ.",
            service2Title: "ಪರೀಕ್ಷೆ ಮತ್ತು ನಿಯೋಜನೆ",
            service2Desc: "ಎಲ್ಲಾ ವಿದ್ಯುತ್ ಮತ್ತು ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಘಟಕಗಳ ವೃತ್ತಿಪರ ಪರೀಕ್ಷೆ.",
            service3Title: "ನಿರ್ವಹಣೆ ಮತ್ತು ದುರಸ್ತಿ",
            service3Desc: "ನಿಮ್ಮ ಸಿಸ್ಟಮ್‌ಗಳನ್ನು ಸುಗಮವಾಗಿ ಚಾಲನೆಯಲ್ಲಿಡಲು ವಿಶ್ವಾಸಾರ್ಹ ನಿರ್ವಹಣೆ ಮತ್ತು ದುರಸ್ತಿ ಸೇವೆಗಳು.",
            contactTitle: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
            contactProprietor: "ಮಾಲೀಕರು: ಶಿವ ಮುಕ್ಕಾನೆ",
            contactAddress: "ಪ್ಲಾಟ್ ನಂ. ೬,೧೪೦, ರೇವಣಸಿದ್ದೇಶ್ವರ ನಗರ, ಹೊಟಗಿ ರಸ್ತೆ, ಸೋಲಾಪುರ, ಪಿನ್ ೪೧೩೨೨೪",
            ctaTitle: "ಪವರ್ ಅಪ್ ಮಾಡಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
            ctaText: "ತಜ್ಞರ ಸಲಹೆ ಮತ್ತು ಸೋಲಾಪುರದಲ್ಲಿ ಉತ್ತಮ ಡೀಲ್‌ಗಳಿಗಾಗಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",
            ctaButton: "ಈಗ ಕರೆ ಮಾಡಿ: 9595793928",
            footerPromo: 'ನಿಮ್ಮ ಸ್ವಂತ ವೆಬ್‌ಪುಟವನ್ನು ರಚಿಸಲು ಇಂದೇ ಸಂಪರ್ಕಿಸಿ <br>📱 <a href="tel:+919623430369">+91 9623430369</a>',
            businessRegTitle: "ನಮ್ಮ ವ್ಯಾಪಾರ ನೋಂದಣಿ"
        }
    };

    const languageSwitcher = document.querySelector('.language-switcher');
    const langButtons = document.querySelectorAll('.lang-btn');
    
    const setLanguage = (lang) => {
        const trans = translations[lang];
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (trans[key]) {
                element.innerHTML = trans[key];
            }
        });
        document.documentElement.lang = lang;
        
        // Update active button
        langButtons.forEach(btn => {
            btn.classList.remove('active-lang');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active-lang');
            }
        });

        // Save language to local storage
        localStorage.setItem('language', lang);
    };

    languageSwitcher.addEventListener('click', (e) => {
        if (e.target.classList.contains('lang-btn')) {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
        }
    });

    // On page load, check for saved language
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    // --- MOBILE MENU SCRIPT ---
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('header');

    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
        header.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (header.classList.contains('active')) {
                header.classList.remove('active');
            }
        });
    });


    // --- CERTIFICATE SLIDER SCRIPT (PASTE NEW CODE HERE) ---
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');

    if (sliderWrapper) { // Only run if the slider exists on the page
        let currentIndex = 0;
        const totalSlides = slides.length;

        // Create dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                goToSlide(i);
            });
            dotsContainer.appendChild(dot);
        }

        const dots = document.querySelectorAll('.dot');

        function goToSlide(index) {
            if (index < 0) {
                index = totalSlides - 1;
            } else if (index >= totalSlides) {
                index = 0;
            }
            sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
            currentIndex = index;
            updateDots();
        }

        function updateDots() {
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        nextBtn.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
        });

        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
        });

        // Initialize slider
        goToSlide(0);
    }
    
});