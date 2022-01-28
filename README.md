# Plover

🚧 _This is App is still in development._ 🚧

## What is this?

Like millions of other people, I'm a heavy user of **Spotify**. However, everytime I create a playlist I have to manually design a neat cover image because I just don't like the default one. **Plover** aims to automate this process.

## How does that work?

All you need to provide is your playlist's name and a keyword for the picture search. Plover than consults the **Unsplash API** to find a suitable background image. This image then gets resized, darkened and labelled.

### Fetching Pictures

To get started and be able to fetch pictures from Unsplash's API, you have to request an API key. Set up a file called `keys.js` in the `/src` directory and store your API key as value of `keys.unsplashAccessKey`. After that, you should be able to call the API.

```ts
const keys = {
  unsplashAccessKey: "YOUR_PERSONAL_UNSPLASH_API_KEY",
}

export default keys
```
