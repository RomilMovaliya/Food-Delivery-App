# AWS CloudFront with AWS S3: Optimizing Costs and Enhancing Food Delivery App Performance
As we know, when we hosting a static site on GitHub Pages or any other platform, serving images efficiently is critical for performance and cost optimization. If you are working on a Food Delivery Application that includes multiple high-resolution images, hosting them directly on GitHub Pages or any other platform can lead to slower load times and unnecessary bandwidth consumption. To optimize performance and reduce costs, we can offload images to Amazon S3 and distribute them via AWS CDN service called CloudFront, a Content Delivery Network (CDN) that caches images closer to users worldwide. This will definitely improve speed and ensure scalability.

In this blog, we will dive deep into how to set up Amazon S3 and CloudFront to optimize image hosting for your food delivery app. We’ll also explore some important key terminologies.

### Architecture Overview
![Diagram.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/architecture.gif)

### Primary Terminologies
- `Reactjs`: Frontend library for making single-page applications.
- `Github/Vercel`: It is a Platform Where we are hosting our static site.
- `AWS S3`: Highly scalable and durable storage service provided by AWS.
- `AWS CloudFront`: Global Content Delivery Network (CDN) service provided by AWS.

### Key Benefits for Food Delivery Apps:
- ✅ Faster Page Loads – Reduce the latency for users across different regions by caching images and assets.
- ✅ Lower Data Transfer Costs – Avoid high charges for outbound data transfer of S3.
- ✅ Better User Experience – During peak traffic hours, it provides high availability and responsiveness.
- ✅ Scalability – Handle spikes in traffic efficiently with CloudFront’s caching capabilities.

# 🛠️ Step-by-Step Guide: Integrating AWS S3 with CloudFront
### Step 1: Setting-Up and Uploaing Images to S3
- First of all, login to `AWS Console` → Go to `Amazon S3`.
- Click `Create bucket` and enter a unique bucket name (e.g., noodletown-bucket).
- Disable `Block Public Access` (since we want to serve images publicly).
- Enabling the bucket version helps with accidental deletion protection, data recovery, and more (optional).
- Click on `Create bucket`.

![Screenshot1.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(745).png)

![Screenshot2.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(746).png)

![Screenshot3.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(747).png)

![Screenshot4.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(748).png)

![Screenshot5.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(750).png)

![Screenshot6.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(753).png)

- Once the bucket is created, open your S3 bucket and click `Upload`.
- Select all images from your local folder (src/assets/Images/).
- In my case, I am adding my entire directory which contains multiple sub-directories.
- Click `Upload` to store them in S3.

![Screenshot7.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(754).png)

- Note: One thing you should keep in mind, That you must disable block public access because we will edit our bucket policy when we get the policy from CloudFront.
- 🏆 Congratulations on completing the first phase where we create a bucket and upload assets.

### Step 2: Set Up AWS CloudFront for Faster Image Delivery
- The first step is to go to AWS CloudFront and click `Create Distribution`.

![Screenshot8.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(761).png)

- Under Origin Settings:
- Origin domain: Select your S3 bucket (noodletown-bucket).
- Origin path: Leave empty.
- Origin access: Select the `Origin access control settings`.

![Screenshot9.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(762).png)

- In `Origin access control`, create a new OAC then click on `Create` button.
(If it is already present, directly select it.)

- If you stuck on the term of `Origin access control`. so don't panic i am explaining about that,
just divide the sentence into the word,
- `Origin` : It refers the source server where our images are stored. 
- `access control` : It refers the permissions and rules that determine who or what can access the resources that are stored in the s3.
- `Origin access control` : Now it refers the set of rule or permission that define how access is granted to the origin.
  
![Screenshot10.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(763).png)

- Default Cache Behavior Settings:
- Viewer Protocol Policy: Redirect HTTP to HTTPS.
- Allowed HTTP Methods: GET, HEAD.
- Object Caching: Use recommended settings.

![Screenshot11.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(764).png)

- Here, we don't need any WAF protection so select `Do not enable security protections`.

![Screenshot12.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(766).png)

- 🏆 Congratulations on completing the second phase where we create and configure AWS CloudFront.

- Now click on `copy policy` and paste this to the S3.

![Screenshot13.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(768).png)

- In S3, go to the permission tab and click on `Edit`, paste those permissions there, and click on `save`.

![Screenshot14.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(769).png)

- Then copy `Distribution domain name` from CloudFront's Distributions.
- Add the path of the assets from the bucket.

![Screenshot15.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(770).png)

### Step 3: Use CloudFront URLs in React App

- Now, come into our IDE `(VS Code)` and create one `.env` file then Add `Distribution domain name`.

![Screenshot16.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(771).png)

- Once added successfully, change your image path with `Environment Variable`.

![Screenshot17.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(772).png)

- Now push your code into GitHub and deploy to production.

![Screenshot18.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(773).png)

- Then check, If it works well!

![Screenshot19.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(774).png)

- You might have one question,
- If we want to directly access without manually adding the S3 path after the CDN link.
- Yes, we also have a solution for that.
- If we directly access, it will show like the image below.

- 🏆 Congratulations on completing the third phase where we use our CloudFront URL in our React application.

![Screenshot20.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(775).png)

- But if you assign a path in `Default root object` then it will works well.

![Screenshot21.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(776).png)

### Step 4: Stopping and Removing all Services
- Now it's time to shut down all the services after completing our practical.
- First, we are stopping our CloudFront service.
- The first step is to `Disable` the `Distribution`, then after 10-15 minutes, we are able to delete the distribution.
  
![Screenshot22.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(777).png)

![Screenshot23.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(778).png)

![Screenshot25.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(780).png)

- Now it is deleted successfully.

![Screenshot26.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(781).png)

- Then clear our S3 bucket and delete it.

![Screenshot24.JPG](https://github.com/RomilMovaliya/Food-Delivery-App/blob/main/DocumentationStuff/Screenshot%20(779).png)

# AWS Free Tier Cost Estimation for S3 + CloudFront Setup

| **Service**                  | **Free Tier Usage (Monthly)** | **Expected Cost** |
|------------------------------|-------------------------------|-------------------|
| S3 Storage                   | 5GB                           | $0.00             |
| S3 Requests                  | 20,000 GET, 2,000 PUT         | $0.00             |
| CloudFront Data Transfer     | 1TB                           | $0.00             |
| CloudFront Requests          | 10 million                    | $0.00             |
| **TOTAL COST (within free tier)** |       **$0.00**                          |

### When Do You Start Paying?
- If images exceed 5GB in S3 → ~$0.023 per extra GB.
- If monthly GET requests exceed 20,000 → ~$0.0004 per 1,000 extra requests.
- If CloudFront traffic exceeds 1TB → ~$0.08 per extra GB.
- For a small app with a moderate number of users, the free tier is sufficient for months before incurring any cost. 🚀

> `Note`: One thing to keep in mind is that there are no inbound charges, it only charges for outbound data transfer. <br>
         `Inbound data transfer` : data is being uploaded into AWS services, such as uploading files to s3. <br>
         `Outbound data transfer` : data is being served to users or transferred out of AWS.

# Conclusion
By integrating AWS S3 with a cloudfront, you can increase the performance and scalability of your food distribution app by adjusting costs. Host images on S3 and serve them through Cloudfront ensure rapid load time, low bandwidth cost and a spontaneous user experience, also in high traffic periods. With simple steps to Set-up, this approach provides an efficient, cost -effective solution for stable property management. In addition, by taking advantage of AWS free level, you can start with minimal costs, so this solution can be perfect for a small medium-sized app.

## FAQS Section

> **1. Can You Use AWS Route 53 for a GitHub Pages + AWS S3 + CloudFront Setup?** <br>
- Yes, AWS Route 53 can be used if you want a custom domain (e.g., www.yourfoodapp.com) instead of the default GitHub Pages URL (yourusername.github.io).

> **2. If i add AWS Route 53 service what would be Total Cost Estimate?** <br>
- If you need a custom domain, Route 53 will cost ~$6–$7 for 3 months.
  
| **Service**                | **Free Tier?** | **Estimated Cost**      |
|----------------------------|----------------|-------------------------|
| Route 53 Hosted Zone       | ❌ No          | $0.50/month             |
| Route 53 Queries           | ✅ Up to 1M    | $0.00–$0.40             |
| Domain Registration        | ❌ No          | ~$12–$15/year           |

> **3. If we are not enabling the version then what happened?** <br>
- If versioning is not enabled in S3, deleted or overwritten files cannot be recovered. You lose the ability to revert to previous versions. It's advisable to enable versioning for better data protection and recovery.
