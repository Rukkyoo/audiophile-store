# 🚀 Quick Vercel Deployment Fix

## The Issue
Your build is failing because Convex needs the `NEXT_PUBLIC_CONVEX_URL` environment variable in production.

## ✅ Solution (2 minutes)

### Step 1: Go to Vercel
1. Open your project in Vercel: https://vercel.com/dashboard
2. Click on your **audiophile-store** project

### Step 2: Add Environment Variable
1. Go to **Settings** tab
2. Click **Environment Variables** in the left sidebar
3. Click **Add New**
4. Fill in:
   - **Key**: `NEXT_PUBLIC_CONVEX_URL`
   - **Value**: `https://gregarious-iguana-931.convex.cloud`
   - Check all environments: ✅ Production, ✅ Preview, ✅ Development
5. Click **Save**

### Step 3: Redeploy
1. Go to **Deployments** tab
2. Click the **⋯** (three dots) on the latest failed deployment
3. Click **Redeploy**

That's it! Your deployment should now succeed. ✨

---

## Alternative: Using Vercel CLI

```bash
cd audiophile-store
vercel env add NEXT_PUBLIC_CONVEX_URL
# Paste: https://gregarious-iguana-931.convex.cloud
# Select: Production, Preview, Development
```

Then redeploy:
```bash
vercel --prod
```