# 🎯 अपना छेत्र - APNA CHHETR
## Skill Marketplace Platform

**अपने आसपास काम और कारीगर खोजें**

---

## 📋 विशेषताएं

### 👷 कार्यकर्ता (Workers)
- अपने कौशल और अनुभव दिखाएं
- विभिन्न श्रेणियों में काम खोजें
- रेटिंग और समीक्षा प्राप्त करें
- पोर्टफोलियो बनाएं

### 💼 नियोक्ता (Employers)
- काम पोस्ट करें और योग्य कार्यकर्ता खोजें
- आवेदन प्राप्त करें और प्रबंधित करें
- बजट और समय सीमा निर्धारित करें

### 🔐 लॉगिन और सुरक्षा
- सुरक्षित JWT प्रमाणीकरण
- व्यक्तिगत प्रोफाइल
- व्यक्तिगत डेटा सुरक्षा

---

## 📂 श्रेणियां (Categories)

| आइकन | श्रेणी | विवरण |
|------|--------|--------|
| 🧵 | **कपड़ा और करघा** | Textile & Loom |
| 🏥 | **चिकित्सा और अस्पताल** | Medical & Hospital |
| 💻 | **कंप्यूटर और ऑफिस** | Computer & Office |
| 🍽️ | **रेस्तरां और भोजन** | Restaurant & Food |
| 🛍️ | **दुकान और खुदरा** | Shop & Retail |
| 🚗 | **ड्राइविंग और डिलीवरी** | Driving & Delivery |
| 🔧 | **मरम्मत और तकनीकी** | Repair & Technical |
| 🏠 | **निर्माण और घर** | Construction & Home |
| 🧹 | **सफाई और घरेलू कार्य** | Cleaning & Housekeeping |
| 📦 | **गोदाम और मजदूर** | Warehouse & Labour |
| 🧑‍🔧 | **अन्य कुशल कार्य** | Other Skilled Work |

---

## 🚀 शुरुआत करें

### आवश्यकताएं
- Node.js (v14 या अधिक)
- MongoDB
- npm

### स्थापना

```bash
# Repository क्लोन करें
git clone https://github.com/shansari901/skill-marketplace.git
cd skill-marketplace

# डिपेंडेंसी इंस्टॉल करें
npm install

# .env फाइल कॉपी करें और सेट करें
cp .env.example .env

# सर्वर शुरू करें
npm start
```

### विकास मोड
```bash
npm run dev
```

---

## 🔌 API एंडपॉइंट्स

### Authentication
- `POST /api/auth/signup` - नया खाता बनाएं
- `POST /api/auth/login` - लॉगिन करें

### Workers
- `POST /api/workers/profile` - कार्यकर्ता प्रोफाइल बनाएं
- `GET /api/workers/profile/:workerId` - प्रोफाइल देखें
- `GET /api/workers/category/:category` - श्रेणी द्वारा कार्यकर्ता खोजें
- `GET /api/workers/categories/all` - सभी श्रेणियां

### Jobs
- `POST /api/jobs/create` - नौकरी पोस्ट करें
- `GET /api/jobs/open` - सभी खुली नौकरियां
- `GET /api/jobs/category/:category` - श्रेणी द्वारा नौकरियां

---

## 👤 Admin Credentials

**ईमेल:** admin@apnachhetr.com  
**पासवर्ड:** admin123456  
**प्रकार:** admin

> ⚠️ **नोट:** पहली बार लॉगिन के बाद पासवर्ड बदलें

---

## 📊 डेटाबेस स्कीमा

### User Model
- name, email, password, phone
- city, state, userType (worker/employer/admin)
- profilePicture, bio

### Worker Model
- userId, category, skills
- experience, description, portfolio
- rating, reviews, verified

### Job Model
- employerId, category, title
- description, requirements, budget
- location, city, state, duration
- status, applications, deadline

---

## 🔄 Workflow

### कार्यकर्ता के लिए
1. साइन अप करें → कार्यकर्ता चुनें
2. अपनी प्रोफाइल पूरी करें
3. कौशल और अनुभव जोड़ें
4. नौकरियों के लिए आवेदन करें
5. नियोक्ता के साथ जुड़ें

### नियोक्ता के लिए
1. साइन अप करें → नियोक्ता चुनें
2. अपनी कंपनी की जानकारी दें
3. नौकरी पोस्ट करें
4. आवेदन प्राप्त करें
5. कार्यकर्ता चुनें और काम शुरू करें

---

## 📱 भविष्य की सुविधाएं

- [ ] Realtime Chat System
- [ ] Video Calling
- [ ] Payment Integration
- [ ] Mobile App (Android/iOS)
- [ ] Advanced Search Filters
- [ ] Worker Verification System
- [ ] Admin Dashboard
- [ ] Analytics & Reports
- [ ] Email Notifications
- [ ] Rating & Review System

---

## 🤝 योगदान

हम योगदान स्वागत करते हैं! कृपया देखें [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📝 लाइसेंस

MIT License - [LICENSE](LICENSE) फाइल देखें

---

## 📧 संपर्क करें

**Email:** shansari901@gmail.com  
**GitHub:** [@shansari901](https://github.com/shansari901)

---

## 🙏 धन्यवाद!

अपना छेत्र को सफल बनाने के लिए!
