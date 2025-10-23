const express = require('express')
const next = require('next')
const fs = require('fs')
const { parse } = require('url')
const geoip = require('geoip-lite')


const port = 4000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { DESTINATION, createSitemap } = require('./sitemap')

app.prepare().then(() => {
  const server = express()
  server.get('/sitemap.xml', function (req, res) {
    res.header('Content-Type', 'application/xml')
    async function sendXML () {
      let xmlFile = await createSitemap()
      // Send it to the browser
      res.send(xmlFile)
      // Create a file on the selected destination
      fs.writeFileSync(DESTINATION, xmlFile)
    }

    sendXML()
  })
  server.set('trust proxy', true)
  // // ... some config based on your app
  server.use((req, res, next) => {
    req.ip = req.headers['x-real-ip'] || req.connection.remoteAddress
    next()
  })

  server.get('/gracias/:slug', function (req, res) {
    const actualPage = '/gracias/[slug]'
    const queryParams = { ...req.params, redirect: true }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/gratuito/:id', function (req, res) {
    const actualPage = '/gratuito/[id]'
    const queryParams = { ...req.params, redirect: true }
    app.render(req, res, actualPage, queryParams)
  })

  // server.get('/activar/:id', function (req, res) {
  //   const actualPage = '/activar/[id]'
  //   const queryParams = { ...req.params, redirect: true }
  //   app.render(req, res, actualPage, queryParams)
  // })

  // This below is the default config.
  // You might have a different one base on your app based on your app
  server.get('*', (req, res) => {
    req.ipCountry = req.headers['x-real-ip'] || req.connection.remoteAddress
    const geo = geoip.lookup(req.ipCountry)
    req.countryDate = geo ? geo.country : 'US'
    req.country = geo ? geo.country : 'US'
    return handle(req, res)
  })
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
