# Sử dụng Node.js base image
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ project
COPY . .

# Build ứng dụng
RUN npm run build

# Sử dụng Nginx base image để phục vụ ứng dụng React
FROM nginx:alpine

# Copy build từ bước build trước vào thư mục Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copy file cấu hình Nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 81
EXPOSE 8081

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]