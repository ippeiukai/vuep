export default function (input) {
  const compiler = require('vue-template-compiler')
  const content = input.trim();
  const parsed_input = compiler.parseComponent(content)

  try {
    const template = parsed_input.template
    const script = parsed_input.script
    const styles = Array.prototype.slice.call(parsed_input.styles).map(function (n) { return n.content; });

    if (!template && !script && !styles.length) {
      return {
        content,
        script: content
      }
    }

    return {
      content,
      template: template ? template.content : '',
      script: script ? script.content : '',
      styles: styles
    }
  } catch (error) {
    /* istanbul ignore next */
    return { error }
  }
}
