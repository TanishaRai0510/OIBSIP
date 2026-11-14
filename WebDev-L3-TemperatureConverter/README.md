# Task 3 – Temperature Converter ("Degree")

**Track:** Web Development & Designing · **Level 1 · Task 3**

An interactive web tool that converts temperatures between **Celsius, Fahrenheit and Kelvin**, with input validation and friendly error messages. Built with vanilla JavaScript and no libraries.

## Screenshots

| Desktop | Mobile |
|---------|--------|
| ![Desktop view](screenshots/desktop3.png) | ![Mobile view](screenshots/mobile3.png) |

## Features

- Input field for the temperature value
- Unit selector (dropdown) for Celsius, Fahrenheit or Kelvin
- **Convert** button that shows all three scales at once, with correct unit labels
- Results rounded to 2 decimal places
- **Validation:** empty or non-numeric input shows an error message instead of a result
- **Absolute zero check:** values below absolute zero (−273.15 °C, −459.67 °F, 0 K) show a clear message
- Results update automatically when the unit or value is changed after the first conversion
- Clean, centred layout with clear labels and a short "how it works" section
- Responsive design and screen-reader-friendly error messages

## Conversion Formulas

| Conversion | Formula |
|------------|---------|
| Celsius → Fahrenheit | °F = (°C × 9/5) + 32 |
| Fahrenheit → Celsius | °C = (°F − 32) × 5/9 |
| Celsius → Kelvin | K = °C + 273.15 |
| Kelvin → Celsius | °C = K − 273.15 |

The app converts any input to Celsius first, then calculates the other two scales from it.

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, media queries)
- JavaScript (vanilla)
- Google Fonts

## Project Structure

```
WebDev-L1-TemperatureConverter/
├── index.html
├── styles.css
├── script.js
├── screenshots/
└── README.md
```

## How to Run

1. Download or clone the repository.
2. Open `WebDev-L1-TemperatureConverter/index.html` in any modern browser.

## Test Cases

| Input | Unit | Expected result |
|-------|------|-----------------|
| 24 | °C | 75.20 °F, 297.15 K |
| 98.6 | °F | 37.00 °C, 310.15 K |
| 0 | K | −273.15 °C, −459.67 °F |
| abc | any | Error: enter a valid number |
| −300 | °C | Error: below absolute zero |

## What I Learned

- Handling user input and validating it in JavaScript
- DOM manipulation with `querySelector` and event listeners
- Handling edge cases such as absolute zero and floating-point rounding

## Author

**Tanisha Rai** · raitanisha510@gmail.com
Oasis Infobyte Internship · #oasisinfobyte
