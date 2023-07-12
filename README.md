# Image Manipulation

## Overview

This project is an Node.js API that can manipulate third-party image URLs provided as URL parameters and performing image processing tasks such as resizing, cropping and applying filters.

## Get Started

To install and start running the project, download this project folder, and run the below command.

```
npm install
```

Now that we've install all the dependencies of the project, go ahead and start the project.

### Run the project

Run this command to start the client and server using single command below:

```
npm run devStart
```

### Example use of the API

To make changes to the image of url `https://dqktdb1dhykn6.cloudfront.net/357882-TLRKytH3h.jpg` Make a request to:

```
http://localhost:3000/editImage?url=https://dqktdb1dhykn6.cloudfront.net/357882-TLRKytH3h.jpg
```

To resize the image of height and width 400 and 500 respectively add these query parameters:

```
http://localhost:3000/editImage?url=http://localhost:3000/editImage?url=https://dqktdb1dhykn6.cloudfront.net/357882-TLRKytH3h.jpg&width=500&height=400
```

To resize the width make a request to (similarly for Height):

```
http://localhost:3000/editImage?url=http://localhost:3000/editImage?url=https://dqktdb1dhykn6.cloudfront.net/357882-TLRKytH3h.jpg&width=500
```

To crop the Image add the query parameter crop= true as follows:

```
http://localhost:3000/editImage?url=https://dqktdb1dhykn6.cloudfront.net/357882-TLRKytH3h.jpg&width=500&height=800&left=150&top=70&crop=true
```

To Convert the image into black and white, add parameter bw=true as follows:

```
http://localhost:3000/editImage?url=https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg&bw=true

```

To Change the format of the image, add the parameter format=png as follows:

```
http://localhost:3000/editImage?url=https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg&format=png
```
