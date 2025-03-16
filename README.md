# AWS CloudFront with AWS S3: Optimizing Costs and Enhancing Food Delivery App Performance
As we know that, When hosting a static site on GitHub Pages or any other platform at that time serving images efficiently is critical for performance and cost optimization. If you are working on Food Delivery Application which includes multiple high-resolution images, and hosting them directly on GitHub Pages or any other platform that can lead to slower load times and unnecessary bandwidth consumption. To optimize performance and reduce costs, For that we can offload images to Amazon S3 and distribute them via AWS CDN service called CloudFront, and a Content Delivery Network (CDN) that caches images closer to users worldwide. This will definitely improves speed and ensures scalability.    
In this blog, we will dive deep into how to set up Amazon S3 and CloudFront to optimize image hosting for your food delivery app. We’ll also explore some important key terminologies.


### Primary Terminologies
- `Reactjs` : Frontend liberary for making single page application.
- `Github/Vercel` : Where we are hosting our static site.
- `AWS S3` : Highly scalable and durable storage service provided by AWS.
- `AWS CloudFront` : Content Delivery Network (CDN) service provided by AWS.

### Key Benefits for Food Delivery Apps:
- ✅ Faster Page Loads – We can Reduce the latency for users across different regions by caching images and assets.
- ✅ Lower Data Transfer Costs – Avoiding high charges for outbound data transfer of S3.
- ✅ Better User Experience – During peak traffic hours, It provides high availability and responsiveness.
- ✅ Scalability – It can Handle spikes in traffic efficiently with CloudFront’s caching capabilities.

# 🛠️ Step-by-Step Guide: Integrating AWS S3 with CloudFront
### Step 1: Upload Your Images to S3
- First of all Login to AWS Console → Go to Amazon S3.
- Then Click `Create bucket` and enter a unique bucket name (e.g., food-delivery-app-images).
- Disable "Block Public Access" (since we want to serve images publicly).
- Then Click on `Create bucket`.
- Now Upload your Files or Folder
- Open your S3 bucket and click `Upload`.
- Select all images from your local folder (src/assets/Images/).
- Click `Upload` to store them in S3.

