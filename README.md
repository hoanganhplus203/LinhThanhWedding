# Wedding Invitation Website - Next.js 16 + Tailwind CSS

A beautiful wedding invitation website with pastel pink theme, built with Next.js 16 and Tailwind CSS.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

## Color Scheme

The website uses a three-color palette:
- **Black** (#000000) - Primary text
- **White** (#FFFFFF) - Primary background
- **Pastel Pink** (#FFB6D9) - Accent color

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main wedding invitation page
│   └── globals.css        # Global styles
├── components/
│   └── wedding/
│       ├── Hero.tsx       # Hero section with couple names
│       ├── SaveTheDate.tsx # Save the date section
│       ├── CoupleInfo.tsx  # Couple information
│       ├── Invitation.tsx  # Invitation letter
│       ├── EventDetails.tsx # Event details
│       ├── Location.tsx    # Location information
│       ├── PhotoAlbum.tsx  # Photo gallery
│       ├── RSVP.tsx        # RSVP form
│       └── Gift.tsx        # Gift form
└── .env.local             # Environment variables (optional)
```

## Features

- **Hero Section** - Beautiful landing with couple names and date
- **Save the Date** - Information about bride and groom
- **Invitation Letter** - Formal invitation details
- **Event Details** - Date, time, and location information
- **Photo Album** - Gallery of wedding photos
- **RSVP Form** - Form for guests to confirm attendance (frontend only)
- **Gift Form** - Form for guests to send congratulatory messages (frontend only)
- **Responsive Design** - Works on all devices

## Customization

### Update Couple Information

Edit the following files:
- `components/wedding/Hero.tsx` - Update couple names and date
- `components/wedding/SaveTheDate.tsx` - Update bride and groom details
- `components/wedding/Invitation.tsx` - Update invitation text
- `components/wedding/Location.tsx` - Update venue information
- `components/wedding/Gift.tsx` - Update bank account information

### Add Photos

Replace placeholder images in `components/wedding/PhotoAlbum.tsx` with your actual wedding photos.

## Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy

The easiest way to deploy your Next.js app is using the [Vercel Platform](https://vercel.com/new).
