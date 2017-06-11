class Thumb {
  constructor(config) {
    this.config = config
    this.regex = /(!\[.*?]\()(.+?)(\))/
  }

  getThumb(issue) {
    const thumb = issue.match(this.regex)
    let content = issue

    if (!thumb) {
      return Promise.reslove({
        thumb: '',
        content,
      })
    }

    if (this.config.thumbnail_mode === 1) {
      content = content.replace(thumb[0], '')
    }

    return Promise.reslove({
      thumb: thumb[2].split('""')[0].trim(),
      content,
    })
  }
}

module.exports = Thumb