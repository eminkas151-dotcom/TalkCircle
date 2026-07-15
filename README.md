# TalkCircle — simple language club website

This is a static website that works on GitHub Pages. It includes:

- English and Russian interface
- English, French and Spanish club cards
- A booking form
- Mobile-friendly design
- No server or database required

## 1. Change the email address

Open `script.js` and find:

```js
bookingEmail: "your-email@example.com"
```

Replace it with the email that should receive booking requests.

Example:

```js
bookingEmail: "talkcircle@example.com"
```

When a visitor submits the form, their email application opens with a prepared message.

## 2. Change prices and text

Open `index.html`.

Search for `€10` to change prices.

Search for `TalkCircle` if you want to change the project name.

## 3. Publish on GitHub Pages

1. Create a new public GitHub repository.
2. Upload these files to the root of the repository:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Open repository **Settings**.
4. Open **Pages**.
5. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
6. Press **Save**.
7. GitHub will show the website address after deployment.

## Suggested next upgrades

- Real schedule with available seats
- Google Form or Formspree submission
- Stripe payment links
- Automatic confirmation email
- Teacher photo and testimonials
- Separate pages for teenagers and adults
