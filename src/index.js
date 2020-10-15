function extendLocaleFn(orgFn) {
  return function(...args) {
    if (typeof args[0] === 'string' && args.length === 1) {
      try {
        require(`dayjs/locale/${args[0]}`)
      } catch (e) {
        console.debug(e)
      }
    }

    return orgFn.apply(this, args)
  }
}

export default (option, dayjsClass, dayjsFactory) => {
  dayjsFactory.locale = extendLocaleFn(dayjsFactory.locale)
  dayjsClass.prototype.locale = extendLocaleFn(dayjsClass.prototype.locale)
}
