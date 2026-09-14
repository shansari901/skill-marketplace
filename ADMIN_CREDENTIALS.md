# 🔐 Admin Credentials - अपना छेत्र

## Default Admin Account

### Login Details
```
Email: admin@apnachhetr.com
Password: admin123456
User Type: admin
```

### Admin Permissions
✅ manage_users - उपयोगकर्ता प्रबंधन  
✅ manage_jobs - नौकरी प्रबंधन  
✅ manage_workers - कार्यकर्ता प्रबंधन  
✅ approve_verification - सत्यापन को मंजूरी दें  
✅ view_analytics - विश्लेषण देखें  

---

## Admin Dashboard Functions

### 1. User Management (उपयोगकर्ता प्रबंधन)
- सभी उपयोगकर्ता देखें
- उपयोगकर्ता को हटाएं/निलंबित करें
- उपयोगकर्ता विवरण संपादित करें

### 2. Worker Management (कार्यकर्ता प्रबंधन)
- कार्यकर्ता सत्यापन करें
- रेटिंग और समीक्षा प्रबंधित करें
- कार्यकर्ता प्रोफाइल मॉडरेट करें

### 3. Job Management (नौकरी प्रबंधन)
- सभी पोस्ट की गई नौकरियां देखें
- अनुचित नौकरियां हटाएं
- नौकरी की स्थिति अपडेट करें

### 4. Verification System (सत्यापन प्रणाली)
- कार्यकर्ता सत्यापन अनुरोध को मंजूरी दें
- दस्तावेज़ सत्यापित करें
- सत्यापन स्थिति ट्रैक करें

### 5. Analytics (विश्लेषण)
- कुल उपयोगकर्ता, कार्यकर्ता, नौकरियां
- श्रेणी-वार आंकड़े
- सबसे सक्रिय श्रेणियां
- राजस्व रिपोर्ट

---

## ⚠️ Important Notes (महत्वपूर्ण नोट्स)

1. **पहली बार लॉगिन के बाद पासवर्ड बदलें**
2. **Admin credentials को सुरक्षित रखें**
3. **नियमित रूप से बैकअप लें**
4. **किसी भी संदिग्ध गतिविधि की निगरानी करें**

---

## 🔑 Change Admin Password

```bash
# Admin password बदलने के लिए
POST /api/admin/change-password
Body: {
  "currentPassword": "admin123456",
  "newPassword": "नया_पासवर्ड"
}
```

---

## 📊 Admin Database Backup

```bash
# MongoDB से बैकअप लें
mongodump --db apna-chhetr --out ./backup

# बैकअप को restore करें
mongorestore --db apna-chhetr ./backup/apna-chhetr
```

---

**Last Updated:** 2024
