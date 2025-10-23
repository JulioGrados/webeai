const path = require('path')
const glob = require('glob')
const fs = require('fs')
const { listOpenCourses } = require('utils/api/courses')
const { listOpenAgreements } = require('utils/api/agreements')

// If you use Dotenv you can include your .env variables uncommenting the following line
// require("dotenv").config();

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

// SITE_ROOT is the domain of your app
// Update example.com with your domain or set the env variable
const SITE_ROOT = process.env.SITE_ROOT || 'https://www.eai.edu.pe'

// SOURCE is where are stored all pages files
// By default it tracks all files in the pages folder
// without considering the ones starting with `_` (e.g. _document.js and _app.js)
const SOURCE =
  process.env.SOURCE || path.join(resolveApp('src/pages'), '/**/!(_*).js')

// DESTINATION is where the real file is exported
// By default is .next/static/sitemap.xml
const DESTINATION =
  process.env.DESTINATION ||
  path.join(resolveApp('.next/static'), 'sitemap.xml')

const createSitemap = async () => {
  /**
   * STEP 1: Store all static pages url
   **/
  let diskPages = glob.sync(SOURCE)
  let xml = ''
  xml += '<?xml version="1.0" encoding="UTF-8"?>'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

  diskPages.forEach(page => {
    let stats = fs.statSync(page)
    let modDate = new Date(stats.mtime)
    let lastMod = `${modDate.getFullYear()}-${(
      '0' +
      (modDate.getMonth() + 1)
    ).slice(-2)}-${('0' + modDate.getDate()).slice(-2)}`

    page = page.replace(resolveApp('src/pages'), '')
    page = page.replace(/.js$/, '')
    page = `${SITE_ROOT}${page}`

    if (page.match(/.*\/index$/)) {
      page = page.replace(/(.*)index$/, '$1')
    }

    if (!page.includes('[')) {
      xml += '<url>'
      xml += `<loc>${page}</loc>`
      xml += `<lastmod>${lastMod}</lastmod>`
      xml += `<changefreq>always</changefreq>`
      if (page.includes('/cursos')) {
        xml += `<priority>1.0</priority>`
      } else {
        xml += `<priority>0.5</priority>`
      }
      xml += '</url>'
    }
  })

  /**
   * STEP 2: Store all dynamic pages url
   * In the following snippet we gather all products available
   * TODO: Add <lastmod>${lastMod}</lastmod> tag and set priority order
   **/

  const agreements = await listOpenAgreements({ select: 'slug' })

  agreements.forEach((agrement, index) => {
    xml += '<url><loc>'
    xml += `${SITE_ROOT}/convenios/${agrement.slug}/`
    xml += '</loc><changefreq>always</changefreq><priority>0.5</priority></url>'
  })

  const courses = await listOpenCourses({ select: 'slug' })

  courses.forEach((course, index) => {
    xml += '<url><loc>'
    xml += `${SITE_ROOT}/cursos/${course.slug}/`
    xml += '</loc><changefreq>always</changefreq><priority>1.0</priority></url>'
    if (index === courses.length - 1) {
      xml += '</urlset>'
    }
  })

  return xml
}

module.exports = { DESTINATION, createSitemap }
