# Affirmations Scriptable Widget

![Bamboo Widget Preview](https://github.com/Korysam15/affirmations-scriptable-widget/blob/main/docs/img/widget.png)

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Affirmation Scriptable Widget is a JavaScript-based widget for the Scriptable app that fetches daily affirmations from affirmations.dev and displays them directly on your iOS or macOS home screen. Stay motivated and inspired with a fresh affirmation every time your widget refreshes.

## Prerequisites

Before you begin, ensure you have the following prerequisites:

- [Scriptable App](https://scriptable.app/) installed on your iOS or macOS device.

## Installation

1. Clone or download the repository:

   ```bash
   git clone https://github.com/Korysam15/affirmations-scriptable-widget.git
   ```

2. Open the Scriptable app.

3. Create a new script by tapping the "+" icon and paste the contents of `affirmation-widget.js` into the script editor.

4. Save the script and exit the Scriptable app.

5. Add a Scriptable widget to your iOS or macOS home screen.

6. Edit the widget, and choose the "Bamboo Widget" script you just created.

7. Resize the widget according to your preferences.

8. Enjoy real-time Bamboo build plan status updates on your home screen!

## Usage

The Affirmations Scriptable Widget will automatically fetch and display different affirmations. Tap the widget to open the Scriptable app for more details.

## Configuration

Customize the style of the widget by modifying the styling options within the script. Edit the `styling` object to set your color configuration.

```javascript
const styling = {
  textColor: new Color("#FFFFFF"),
  backgroundColor: new Color("#1A1B1E"),
};
```

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Follow the contribution guidelines for details.

## License

This project is licensed under the MIT License.
