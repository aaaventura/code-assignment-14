# Use Node.ja base image
FROM node:20

# Set working directory inside the container
WORKDIR	/usr/src/app/ventura_ahleeryan-joe_coding_assignment14/ventura_ahleeryan-joe_final_site

# copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of app files
COPY . . 

# Set port
ENV PORT=5575

# exposedthe port 
EXPOSE 5575

# start the react development server
CMD ["npm", "start"]
