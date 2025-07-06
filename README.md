# Full-Stack Chat App with Docker & Nginx

This is a simple full-featured chat web application built using:
- **Frontend:** HTML/CSS/JS (served via Nginx)
- **Backend:** Node.js with Socket.io
- **Database:** MySQL
- **Containerization:** Docker with Nginx reverse proxy

---

## 📁 Project Structure

```
chat-app-docker-nginx/
├── backend/
│   └── server.js
│   └── package.json
├── frontend/
│   └── index.html
│   └── style.css
├── nginx/
│   └── default.conf
├── docker-compose.yml
├── Dockerfile.nginx
├── Dockerfile.backend
```

---

## 🚀 Deployment Steps on AWS EC2

### ✅ 1. Upload to GitHub
Push this folder to a new GitHub repository.

### 🔐 2. Connect to EC2

```bash
ssh -i your-key.pem ubuntu@<your-ec2-ip>
```

### 📥 3. Clone the Repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 🐳 4. Build & Run Docker Containers

```bash
sudo docker compose up --build -d
```

This will:
- Build the backend image
- Build the Nginx image to serve the frontend
- Set up MySQL container
- Connect all services with Docker networks

### 🌐 5. Access the App

Visit in browser:

```bash
http://<your-ec2-public-ip>
```

(If HTTPS is needed, you can later configure SSL using Let's Encrypt in Nginx.)

---

## ⚙️ Docker Services Summary

| Service   | Port | Description                  |
|-----------|------|------------------------------|
| nginx     | 80   | Serves frontend + reverse proxy to backend |
| backend   | 3000 | Handles chat logic & Socket.io |
| mysql     | 3306 | Stores user/message data     |

---

## 🧪 Testing

- Open the app in two browser tabs
- Send messages
- Messages should sync live using Socket.io

---

## 📌 Notes

- MySQL credentials are set in `docker-compose.yml`. Change them as needed.
- Data is stored in a Docker volume (`mysql-data`).
- To stop everything:  
```bash
sudo docker compose down
```

---

## 🙋 Support

For help, contact: [your-email@example.com]
