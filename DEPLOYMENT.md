# Deployment Guide

## Deploying to Vercel

### Prerequisites
1. A Convex account and project set up at https://dashboard.convex.dev
2. A Vercel account

### Steps

#### 1. Set up Convex for Production

1. Go to your Convex dashboard: https://dashboard.convex.dev
2. Select your project: **audiophile-store**
3. Go to **Settings** → **URL & Deploy Key**
4. Copy your production deployment URL (it should look like: `https://gregarious-iguana-931.convex.cloud`)

#### 2. Configure Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following environment variable:
   - **Name**: `NEXT_PUBLIC_CONVEX_URL`
   - **Value**: Your Convex deployment URL (e.g., `https://gregarious-iguana-931.convex.cloud`)
   - **Environment**: Select all (Production, Preview, Development)

4. Click **Save**

#### 3. Redeploy

After adding the environment variable, trigger a new deployment:
- Either push a new commit to your repository
- Or go to **Deployments** tab in Vercel and click **Redeploy** on the latest deployment

### Troubleshooting

If you see the error:
```
Error: No address provided to ConvexReactClient
```

This means the `NEXT_PUBLIC_CONVEX_URL` environment variable is not set in Vercel. Follow the steps above to add it.

### Local Development

For local development, make sure you have a `.env.local` file with:
```
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
```

Run `npx convex dev` to start the Convex development server.