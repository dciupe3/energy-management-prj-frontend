FROM node:17-alpine3.15
# Set working directory

COPY package.json package-lock.json .

RUN npm install
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm run build

ENTRYPOINT ["npm", "start"]