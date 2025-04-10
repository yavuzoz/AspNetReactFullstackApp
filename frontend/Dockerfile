# 1. Base image
FROM node:18-alpine

# 2. Çalışma dizini oluştur
WORKDIR /app

# 3. Paketleri kopyala ve kur
COPY package*.json ./
RUN npm install

# 4. Kodları kopyala
COPY . .

# 5. Build et
RUN npm run build

# 6. Production server (vite değil, static dosyaları serve edecek)
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "3000"]
