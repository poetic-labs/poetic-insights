# Poetic Insights

## Installation

1. Clone the repo:

   ```
   git clone git@github.com:poetic-labs/poetic-insights.git
   cd poetic-insights
   ```

2. Install dependencies:

   ```
   yarn install
   ```

## Usage

1. Create a Google Sheet with column call sites.

2. Publish Document. Find the publish url under json format. It will have this following format:

  ```
  https://spreadsheets.google.com/feeds/list/{google-sheet-id}}/{sheet-order}/public/values?alt=json
  ```

3. Run Analyze