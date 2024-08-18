# Sử dụng Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ project
COPY . .

# Expose port (tùy thuộc vào ứng dụng của bạn)
EXPOSE 3000

# Start application bằng PM2 với file cấu hình pm2
CMD ["npx", "pm2-runtime", "ecosystem.config.js"]
