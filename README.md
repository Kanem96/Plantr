This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To log in you will need to create an account on the create account page. Then change the form to the log in page, and sign in with your credentials.

If log in does not work, you will likely need to add some secrets to a dot.env file:
PERENUAL_API_KEY=sk-ZDQH65620cdbe46b33125
NEXTAUTH_JWT_SECRET='NEXT-JWT-SECRET'
NEXTAUTH_SECRET='NEXT-SECRET'
NEXTAUTH_URL=http://localhost:3000/api/auth


## About the app

The app is intended for users to browse and keep track of plants that they own. They should be able to get some information about different plants including how often they need watered and how much sunlight they need.



