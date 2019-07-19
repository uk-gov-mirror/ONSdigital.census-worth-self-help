var sanitizeHtml = require('sanitize-html');

export const transformSources = htmlString => {
  let videoPath = process.env.GATSBY_ASSETS_PATH
    ? process.env.GATSBY_ASSETS_PATH
    : ""
  if (!htmlString) {
    return ""
  }
  return htmlString.replace(/{{TARGET_ASSETS_SRC}}/g, videoPath)
}

export const htmlSanitize = htmlString => {
  return sanitizeHtml(htmlString, {
  	allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'video', 'audio', 'img', 'source', 'h1', 'h2' ]),
  	allowedAttributes: {
  		a: [ 'href', 'name', 'target' ],
  		img: [ 'src' ],
  		source: [ 'src', 'type'],
  		video: ['controls'],
  		audio: ['controls']
  	}
  })
}