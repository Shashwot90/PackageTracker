# Parcel Tracker

A minimal, modern web application for tracking parcels, built with [Next.js](https://nextjs.org) and [Appwrite](https://appwrite.io/).

## Live Demo at Vercel

[Vercel Link](https://package-tracker-1.vercel.app/)

## Example Package Numbers
You can use the following package numbers to test the app:

```
6825a2ae0020cba48604
6825a83c001ffdb857d4
6825bee90019dad997b4
6825bfa800365853ec13
6825bfde002d8ce8e973
6825c0210011b7e0740d
6825c053002a3d7634f7
6825c093000a60086fe7
6825c0d2001fa652f473
6825c10e0034f6fdbea5
```
## Getting Started

1. **Clone the repository:**
   ```bash
   git clone git@github.com:Shashwot90/PackageTracker.git
   cd parcel-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your Appwrite credentials:
   ```env
   NEXT_PUBLIC_API_ENDPOINT=your-appwrite-endpoint
   NEXT_PUBLIC_DATABASE_ID=your-database-id
   NEXT_PUBLIC_PARCELS_ID=your-parcels-id
   NEXT_PUBLIC_PARCELEVENTS_ID=your-parcel-events-id
   NEXT_PUBLIC_PROJECT_ID=your-project-id
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to use the app.

## Features
- Track parcels by entering a tracking number
- View parcel information and status updates
- Clean, minimal, and responsive UI



## Customization
- Update styles in `styles/Home.module.css` for a different look.
- Update Appwrite configuration in `utils/config.js`.

## Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Appwrite Documentation](https://appwrite.io/docs)

## License
MIT
