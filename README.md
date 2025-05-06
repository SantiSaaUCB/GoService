# GoService 🌐

**GoService** es una plataforma web que conecta personas que ofrecen y buscan servicios como:
- Cuidado de niños
- Cuidado de mascotas
- Acompañamiento de adultos
- Realización de recados
- Cuidado de casas

## 🧱 Estructura del proyecto

GoService/
├── backend/ → API REST en Node.js + Express + MongoDB
├── frontend/ → Aplicación Angular moderna (SPA)


## 🚀 ¿Cómo ejecutar el proyecto localmente?

### 📦 Backend

1. Ir al directorio:
     ```bash
     cd backend
2. Instalar dependencias:
     ```bash
     npm install
3. Configurar .env:
     ```bash
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/goservice
4. Ejecutar servidor:
     ```bash
     npm run dev

### 📦 Frontend

1. Ir al directorio:
     ```bash
     cd frontend
2. Instalar dependencias:
     ```bash
     npm install
3. Ejecutar servidor:
     ```bash
     ng serve