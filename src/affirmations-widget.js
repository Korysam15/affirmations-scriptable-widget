// Configuration
const config = {
  affirmationUrl: "https://www.affirmations.dev",
};

// Styling
const styling = {
  textColor: new Color("#FFFFFF"),
  backgroundColor: new Color("#1A1B1E"),
};

// Fetch Affirmation Data
async function fetchData() {
  let request = new Request(config.affirmationUrl);
  let response = await request.loadJSON();
  if (response) {
    return response.affirmation;
  }
  return "Error Retrieving Affirmation";
}

// Create Widget
async function createWidget(size) {
  const widget = new ListWidget();
  widget.backgroundColor = styling.backgroundColor;

  const affirmation = await fetchData();
  const parentStack = widget.addStack();
  parentStack.layoutHorizontally();
  addItem(affirmation, parentStack, size);

  return widget;
}

// Create Item
function addItem(affirmation, stack, size) {
  // small size
  if (size === "small") {
    const line = stack.addStack();
    line.layoutVertically();
    const affirmationMessage = line.addText(affirmation);
    affirmationMessage.font = Font.boldSystemFont(12);
    affirmationMessage.textColor = styling.textColor;
  }
  // medium/large size
  else if (size === "medium" || size === "large") {
    const item = stack.addStack();
    item.layoutVertically();

    const affirmationMessage = item.addText(affirmation);
    affirmationMessage.font = Font.boldSystemFont(25);
    affirmationMessage.textColor = styling.textColor;
    affirmationMessage.centerAlignText();
  } else {
    console.error(`Size: ${size} not supported!`);
  }
}

// "Main Function"
//const size = 'small';
const size = "medium";
// const size = 'large';

const widget = await createWidget(size);
if (size === "small") {
  widget.presentSmall();
} else if (size === "medium") {
  widget.presentMedium();
} else {
  widget.presentLarge();
}

Script.complete();
