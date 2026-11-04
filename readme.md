# Warcraft Logs Raid Performance & Pull Comparison App

A custom web application built to visualize World of Warcraft raid performance, time-series fight metrics (DPS, HPS, Overhealing), and pull-over-pull progress tracking using Warcraft Logs data.

## Features
- **Time-Series Analysis:** Plot DPS, HPS, and Overhealing over an elapsed time axis (`mm:ss`).
- **Fight-over-Fight Meters:** Compare raid damage, healer throughput, and overheal waste percentages across multiple pulls.
- **Serverless API Proxy:** Secure OAuth token handler for Warcraft Logs v2 GraphQL integration.

## Local Setup & Deployment

### 1. Serverless Proxy Setup
Set the following Environment Variables in your Vercel or Netlify hosting dashboard:
- `WCL_CLIENT_ID`: Your Warcraft Logs Client ID
- `WCL_CLIENT_SECRET`: Your Warcraft Logs Client Secret

### 2. Deploy to Vercel / Netlify
1. Push this repository to GitHub.
2. Import the repository in Vercel or Netlify.
3. Deploy!
