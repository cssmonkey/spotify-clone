import { betterAuth } from 'better-auth';
import { nextCookies } from 'better-auth/next-js';
import Database from 'better-sqlite3';

export const auth = betterAuth({
  database: new Database('./sqlite.db'),
  plugins: [nextCookies()],
  socialProviders: {
    spotify: {
      clientId: process.env.AUTH_SPOTIFY_ID!,
      clientSecret: process.env.AUTH_SPOTIFY_SECRET!,
      scope: [
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
        "user-read-currently-playing",
        "user-follow-read",
        "playlist-read-private",
        "user-read-email",
        "user-read-private",
        "user-library-read",
        "playlist-read-collaborative",
      ]
    },
  },
});
