# gatsby-plugin-freshdesk

Freshdesk plugin for Gatsby static site generator

## Install

`npm install --save gatsby-plugin-freshdesk`

## How to use

Just add the plugin to the plugins array in your `gatsby-config.js`

```javascript
plugins: [
  {
    resolve: 'gatsby-plugin-freshdesk',
    options: {
      url: 'https://example.freshdesk.com'
    }
  }
]
```

See `gatsby-ssr.js` for more configuration options
