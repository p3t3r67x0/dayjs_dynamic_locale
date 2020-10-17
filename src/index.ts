function extendLocaleFn(orgFn: any) {
  return function(...args: any) {
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

export default (option: any, dayjsClass: any, dayjsFactory: any) => {
  dayjsFactory.locale = extendLocaleFn(dayjsFactory.locale)
  dayjsClass.prototype.locale = extendLocaleFn(dayjsClass.prototype.locale)
}
